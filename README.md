# DietSense OpenSpec

DIC3 提案重構的本地專案。變更 ID 為 `diet-sense-meal-logging`，包含 proposal、四項 delta specs、design 與 tasks。從 [DESIGN.md](DESIGN.md) 進入系統設計。

## 安裝與檢查

使用 Node.js 20.19.0 以上版本。在解壓後的 DietSense 資料夾執行下列命令。

```powershell
npm install -g @fission-ai/openspec@1.17.0
openspec --version
openspec status --change diet-sense-meal-logging
openspec validate diet-sense-meal-logging --strict
```

本專案已初始化，status 應顯示 4/4，validate 應通過。可於 [validation.txt](validation.txt) 查看實際執行結果。

## 下一階段

依 tasks.md 實作原型與情境測試。4/4 表示四類規格工件齊備。實作、資料標註與使用者研究各自依任務驗收。完成後執行 `openspec archive diet-sense-meal-logging`。

