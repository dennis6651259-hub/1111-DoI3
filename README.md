# DietSense 臺式飲食熱量分析 Agent
<img width="718" height="852" alt="{7BE8516A-0D99-431E-BBDA-FF9841A3E13F}" src="https://github.com/user-attachments/assets/b4f79cff-ea52-4bd4-bac4-42c696ebdb04" />

https://dennis6651259-hub.github.io/1111-DoI3/

[播放網頁簡報](https://dennis6651259-hub.github.io/1111-DoI3/slides/)

DietSense 是 DIC3 的 OpenSpec 提案重構專案。它針對臺式外食難以記錄份量、加料與剩食的問題，設計一個能用繁體中文理解餐點、查找營養資料並產生可修正紀錄的 AI Agent。


## 使用情境

> 我吃了一碗牛肉麵，加一顆蛋，湯喝了一半。

1. 將餐點拆成麵、肉、蛋與湯，只有湯的食用量按一半換算。
2. 優先檢索臺式配方與食藥署資料，必要時以 USDA 補足等價食材。若碗大小等資訊會明顯影響估算，最多追問兩輪。
3. 依可食重量估算熱量與三大營養素，附上資料來源、版本、假設及估算範圍。證據不足時保留未估草稿。
4. 使用者可以更正草稿。確認當前版本後，系統才寫入正式日誌。

LLM 負責辨識意圖、抽取餐點欄位與選擇工具。營養數值由版本化資料和計算工具產生。安全規則處理限制性熱量目標或補償式請求，觸發時改提供一般資訊與專業諮詢選項。

## OpenSpec 工作流

變更 ID 為 `diet-sense-meal-logging`。由提案定義變更範圍，再以規格和設計約束實作，最後將情境轉成驗收任務。

| 工件 | 用途 |
| --- | --- |
| [DESIGN.md](DESIGN.md) | 系統全局架構、資料流與設計入口 |
| [proposal.md](openspec/changes/diet-sense-meal-logging/proposal.md) | 問題、變更範圍與新增能力 |
| [specs](openspec/changes/diet-sense-meal-logging/specs) | 可驗收的行為與例外情境 |
| [design.md](openspec/changes/diet-sense-meal-logging/design.md) | 計算、澄清、安全、狀態與持久化決策 |
| [tasks.md](openspec/changes/diet-sense-meal-logging/tasks.md) | 原型實作、情境測試與使用者研究 |
| [validation.txt](validation.txt) | OpenSpec 1.17.0 的實際檢查紀錄 |

四項能力涵蓋[餐點草稿與日誌](openspec/changes/diet-sense-meal-logging/specs/meal-logging/spec.md)、[營養估算](openspec/changes/diet-sense-meal-logging/specs/nutrition-estimation/spec.md)、[攝取摘要與 TDEE](openspec/changes/diet-sense-meal-logging/specs/intake-analysis/spec.md)，以及[飲食安全降級](openspec/changes/diet-sense-meal-logging/specs/dietary-safety/spec.md)。

## 重現規格驗證

環境需有 Git、Node.js 20.19.0 以上與 npm。下載 ZIP 的讀者可直接進入解壓後的專案根目錄，再執行 OpenSpec 指令。

```sh
git clone https://github.com/dennis6651259-hub/1111-DoI3.git
cd 1111-DoI3
npx --yes @fission-ai/openspec@1.17.0 --version
npx --yes @fission-ai/openspec@1.17.0 status --change diet-sense-meal-logging
npx --yes @fission-ai/openspec@1.17.0 validate diet-sense-meal-logging --strict
```

`status` 應顯示 `4/4 artifacts complete`，`validate` 應顯示變更有效。這兩項檢查確認規格工件齊備且符合 OpenSpec 格式。

## 評估計畫

規劃建立 500 筆臺式餐點描述，以可食部稱重和固定版本的營養資料建立參考值。比較 MyFitnessPal 手動紀錄與兩個消融版本，分別檢驗澄清追問和自建臺式食譜的效果。另規劃 20 位成人的七日交叉試用，以及至少 30 個 Agent 情境測試。

| 指標 | 待驗證目標 |
| --- | --- |
| 熱量估算落在參考值 ±20% 內 | 命中率 > 85% |
| 標準餐點配對記錄時間 | 較手動紀錄縮短 60% |
| 系統可用性量表（SUS） | 平均分數 > 70 |

## 資料來源

- [衛福部食藥署食品營養成分資料集](https://data.gov.tw/dataset/8543)
- [USDA FoodData Central](https://fdc.nal.usda.gov/)
- [國健署每日飲食指南與我的餐盤](https://www.mohw.gov.tw/cp-2704-41108-1.html)
- [OpenSpec 官方文件與原始碼](https://github.com/Fission-AI/OpenSpec)
