## ADDED Requirements

### Requirement: 已記錄攝取摘要

系統 SHALL 彙整使用者已確認且未刪除的日誌，並標示未估與未記錄資料。

#### Scenario: 部分餐點未估

- **WHEN** 日期內有一筆完整營養紀錄與一筆已確認但未估紀錄
- **THEN** 只合計有來源的完整數值，並列出未估筆數和已記錄範圍

### Requirement: 合適成人的消耗估算

系統 SHALL 只在資料完整且符合適用條件時，以 Mifflin–St Jeor 靜息能量與明示活動係數提供 TDEE 參考。

#### Scenario: 活動量未提供

- **WHEN** 使用者缺少活動量欄位
- **THEN** 略過 TDEE 並保留已記錄攝取摘要
