# Proposal

## Why

臺式複合料理的食用量、加料和剩食很難以單一資料庫項目記錄。DietSense 將自然語言轉成可修正的飲食草稿，讓每個營養數值有來源與可檢查的份量假設。

## What Changes

- 以繁中描述建立餐點草稿，必要時以最多兩輪追問釐清主要缺項。
- 提供可追溯的熱量與三大營養素估算，支援無可用證據時的降級。
- 提供日誌、已記錄攝取摘要與成人適用的 TDEE 參考。
- 將高風險建議切換為一般資訊，規劃分組資料集及驗收情境。

## Capabilities

### New Capabilities

- `meal-logging`: 管理草稿、確認、重送和刪除。
- `nutrition-estimation`: 驗證來源、計算數值、澄清與降級。
- `intake-analysis`: 彙整已確認日誌與合適成人的 TDEE。
- `dietary-safety`: 限制高風險、臨床及不適用族群的個人化輸出。

### Modified Capabilities

本變更新建原型。

## Impact

預計新增對話／確認 API、版本化營養資料、可重現的估算引擎、日誌儲存與驗收案例。首版以繁中文字為主，語音及照片列為延伸。
