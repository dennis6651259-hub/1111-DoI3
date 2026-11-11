# Design

## Context

DietSense 面向一般成人的臺式餐點記錄。使用者輸入繁中描述，Agent 負責理解與澄清，工具負責數值、證據及確認後提交。原提案的架構摘要見根目錄 DESIGN.md。

## Goals / Non-Goals

**Goals**

- 以對話建立可更正的資料，支援臺式複合餐點與食用比例。
- 數值可從來源版本與假設重算。
- 同時驗證估算、操作負擔與安全降級。

**Non-Goals**

- 首版範圍限定繁中文字輸入與一般成人飲食紀錄。語音、照片及臨床處方列後續研究。

## Decisions

1. **模型與工具分工。** LLM 解析意圖、名稱、烹調法、加料及食用量，並編排白名單工具。結構化參數通過 schema 與範圍驗證後才執行。LLM 自帶數字不得當作營養來源。
2. **在地資料優先。** 食藥署食品成分與本地食譜優先，以 USDA 補足等價食材。依別名、生熟與份量基準排序。配方保留版本和原料來源，快照鎖定至評估結束。
3. **數值與區間。** kcal = Σ(食用可食部克重 × kcal_per_100g / 100)。三大營養素類推。列舉相容的份量／配方組合，再取支持範圍。區間呈現為估算範圍，驗證涵蓋率與平均寬度。
4. **有上限的澄清。** 依資料完整性及預估範圍寬度選擇高影響缺項。門檻由開發集選定，最多兩輪。無證據時標記未估並允許使用者確認文字草稿。
5. **安全與個人化。** 在提供數字目標前及最後回覆前檢查風險。每日目標 ≤ 1,200 kcal 觸發保守降級，係本專案風險規則，未定義通用安全攝取量。成人 TDEE = Mifflin–St Jeor REE × 活動係數，列明適用條件。
6. **資料最小化與持久化。** 草稿狀態為 pending、estimated、unestimated 或 confirmed。確認需驗證擁有者、版本及請求識別碼，以交易與唯一索引防止重複寫入。儲存結構化餐點與政策碼，原始對話預設不留存。

### Data contracts

| 資料 | 欄位 |
| --- | --- |
| FoodRef | source_id, source_version, food_id, cooked_state, kcal/p/f/c_per_100g |
| MealItem | food_ref, serving_unit, consumed_fraction, grams_low/high, assumptions |
| MealDraft | owner_id, draft_id, revision, intent, items, status, missing_fields |
| ConfirmRequest | draft_id, revision, idempotency_key |
| Result | estimate_status, kcal_center/range, macros, sources, assumptions, policy_codes |

### System architecture

```mermaid
flowchart LR
    A["① 成人飲食情境"] --> B["② 輸入"]
    B --> C["③ Planner"]
    C --> D["④ 資料檢索"]
    D --> E["⑤ 分析"]
    E --> F["⑥ 領域知識"]
    F --> G["⑦ 決策與安全"]
    G --> H["⑧ 草稿、摘要或一般資訊"]
    G -->|需澄清且尚有輪次| B
    H -->|確認當前版本| I["使用者日誌"]
```

## Risks / Trade-offs

- **份量誤差。** 用分件重量與版本化參考值比較，分層報告覆蓋率、誤差和棄答。
- **追問負擔。** 比較無追問消融，評估每輪對區間寬度、時間和完成率的影響。
- **相似品項誤用。** 檢查生熟、品牌、份量與資料列，資料不足時降級。
- **個人化越界。** 限制建議欄位，記錄觸發政策碼並測試故障時的保守行為。

## Migration Plan

新增能力從本地測試快照及空日誌起步。依 tasks.md 建置，通過案例後再考慮開放測試。新資料版本須保留舊快照識別，既有紀錄可追溯。

## Open Questions

待開發集決定相對範圍寬度、檢索分數門檻與台式份量常模。待試用確認澄清提示文案及活動係數欄位是否易懂。
