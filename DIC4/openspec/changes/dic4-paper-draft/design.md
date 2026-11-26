# DIC4 Design

## Context
DIC3 來源為 https://github.com/dennis6651259-hub/1111-DoI3 ，本次讀取的 main commit 為 b303bdbf3b38210a8e52b942b98591c65dc62df2。DIC3 為 DietSense 提案與四項餐點記錄能力規格；其 tasks.md 的原型和實驗任務仍未勾選。本次變更是論文撰寫，不冒充那些任務已完成。

## Goals and non goals
完成英文投稿草稿三個核心章節、前後對照、LaTeX 編譯及修稿規格。保留計畫性質，不製造資料或學校隸屬，不指定未經選擇的投稿場域，也不進行正式投稿。

## Decisions
1. 使用通用 article、A4、11 pt、24 mm 邊界；每個版本為獨立 main.tex，可選 pdfLaTeX。行內 thebibliography 避免初學者匯入時漏跑 BibTeX；另附 references.bib 供日後改版。
2. 初稿是本次將 DIC3 內容轉成英文的 v0。保留 broad framing 與計畫目標，明確寫 provenance；不稱為歷史 Overleaf 版本。
3. 修訂 v1 以問題、文獻定位、研究問題和貢獻連接段落。納入 Nutrition5k、DietAI24、NutriRAG、Open-KNEAD、RAG、ReAct 與兩項官方資料來源。Open-KNEAD 明示為 preprint。
4. 營養數值由工具計算；份量與食用比例分欄。範圍是相容情境的最小與最大值，不稱為信賴區間。研究的統計區間與估算範圍分開描述。
5. 以本地食譜開關乘澄清開關形成四條件，固定模型與計算工具。拒答計入全案例命中率分母，另報有估算條件的誤差與涵蓋率。
6. 依店家與配方家族形成連通群組切分；同餐點改寫留在同群。預計約 300 開發、200 測試，分組優先於固定筆數。
7. 20 人七日為 feasibility study。第 1 天訓練，接著兩個三日期間 counterbalance；標準任務計時與日常紀錄分別分析。無健康效果主張。
8. 保留 DIC3 繁中姓名與學號於說明；論文英文署名採 provisional romanization，未填假造系所、email 或共同作者。

## Artifact flow
教授要求與 DIC3 → goal → proposal/specs/design/tasks → v0 與 v1 → 來源核對與編譯 → 差異說明 → GitHub → Overleaf 匯入與 MCP 證據。

## Verification
OpenSpec 1.17.0 為本次固定驗證版，沿用 DIC3 已有的本地安裝，實際執行 version、status、strict validate。格式驗證只代表工件符合 schema。LaTeX 編譯成功只代表來源可編譯。兩者都不代表 DietSense 原型、實驗或 MCP 已完成。

## External dependencies
目前工具清單沒有 Overleaf MCP。提供完整 ZIP、匯入步驟和待補證據，不放入密碼或猜測 MCP endpoint。GitHub 以原 repo 的獨立 dic4-paper-draft 分支保存 DIC4/，保留 DIC3 主分支。
