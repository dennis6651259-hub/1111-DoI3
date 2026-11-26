# Agent 修稿流程

以下為本次採用的修稿規則，以及連接 Overleaf MCP 後可使用的操作提示。提示文字不是已執行的 MCP 證據。

## 本次規格先行
1. 先讀 goal.md、design.md、OpenSpec proposal 與 specs，確認這是提案與評估協定。
2. 以 DIC3 的摘要、緒論、相關研究建立新的英文 before，交代來源。
3. 依規格產生 after。每一項外部研究主張附真實書目，研究問題要能對應消融與量測。
4. 核對引文、修改差異、LaTeX 編譯及 OpenSpec 格式；各種驗證分別記錄。

## 連接 MCP 後的提示範本

```text
請透過目前已授權的 Overleaf MCP 讀取我指定的 DietSense DIC4 After 專案。
先列出專案 main.tex 與目前版本，不要猜測 project ID 或工具名稱。
讀取 GitHub DIC4/goal.md、design.md、task.md 與 OpenSpec academic-manuscript 規格。
檢查 Abstract、Introduction、Related Work 是否符合規格；列出具體需要修改的句子。
保留 before 專案。若修改 after，記錄讀取版本、修改摘要與 diff。
研究尚未實驗，不得把 500 筆、20 人或效能目標寫成結果。
呼叫服務實際提供的編譯能力並檢查回應，不得以本地編譯回應冒充。
回報真實專案連結、編譯結果及工具呼叫摘要；遮去 token、cookie、email 等敏感資訊。
```

## 工具選用原則
不同 Overleaf MCP 的工具名稱與授權方式不同，因此本檔不提供虛構的 API、endpoint 或設定檔。先確認課程指定的 MCP 套件、版本及支援的操作，再依其官方說明連接。
