# DietSense 系統設計

## 問題與需求

繁中外食敘述常含模糊份量、加料與剩食。DietSense 將敘述解析為有版本的估算草稿，提供臺式複合餐點分析與可修正的日誌。合適成人可另看已記錄攝取與 TDEE 參考。

## 架構與資料流

① 使用者 → ② 正規化與意圖 → ③ Planner → ④ 版本化檢索 → ⑤ 營養計算 → ⑥ 營養規則 → ⑦ 安全決策 → ⑧ 回覆及確認。高影響缺項回到澄清，最多兩輪。缺可靠資料時轉成未估草稿。

AI 負責意圖、欄位與工具選擇。工具查找食藥署資料、本地配方與 USDA，計算 kcal、蛋白質、脂肪及碳水。營養規則依國健署餐盤和 Mifflin–St Jeor，針對風險情境降級。輸出保留可食比例、估算範圍及來源版本。

## 工作流與實作對照

- [proposal.md](openspec/changes/diet-sense-meal-logging/proposal.md) 說明動機及四項能力。
- [specs/](openspec/changes/diet-sense-meal-logging/specs/) 定義可驗收情境。
- [design.md](openspec/changes/diet-sense-meal-logging/design.md) 定義介面、資料、算法、狀態及取捨。
- [tasks.md](openspec/changes/diet-sense-meal-logging/tasks.md) 將規格轉成原型與驗收工作。

## 驗證與限制

目前完成規格階段。實作階段須以固定版稱重樣本、手動基線、追問與資料消融及七日試用驗證。含油量或配方缺漏會限制可估覆蓋率。七日試用只能估計短期可用性。
