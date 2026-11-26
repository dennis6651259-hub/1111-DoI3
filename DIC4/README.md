# 王鼎昌 7115064172 DIC4 DietSense 投稿草稿

本作業延續 [DIC3 DietSense](https://github.com/dennis6651259-hub/1111-DoI3)，完成英文學術論文初稿及修訂稿，並用 OpenSpec 記錄修稿要求。使用者未指定投稿場域，採通用 article 格式。

## 閱讀順序
1. [教授要求與目標](goal.md)
2. [修改後論文 PDF 6 頁](paper/after/main.pdf) 與 [修改前初稿 PDF 2 頁](paper/before/main.pdf)
   - [修訂稿 LaTeX](paper/after/main.tex) 與 [初稿 LaTeX](paper/before/main.tex)
3. [修改對照](revision-notes.md)
4. [設計](design.md)、[任務狀態](task.md)、[OpenSpec 變更](openspec/changes/dic4-paper-draft/)
5. [Overleaf 操作與待補證據](OVERLEAF_GUIDE.md)

## 內容與邊界
論文核心為 Abstract、Introduction、Related Work，補有支撐方法、評估、限制與結論。before 是本次從 DIC3 整理的新英文初稿，不是既存 Overleaf 歷史。500 筆資料、20 人研究及 85%／60%／70 門檻皆是待驗證計畫，沒有宣稱實驗已完成。

## LaTeX
兩個版本各自只有 main.tex，內含可點擊參考文獻。Overleaf 選 pdfLaTeX；本地可用 `latexmk -pdf main.tex`。paper/references.bib 為另外提供的 BibTeX 書目資料，現有 main.tex 使用內嵌書目，不需要 BibTeX。

## OpenSpec 重現
固定 CLI 1.17.0，執行環境需符合該版套件 engines。可在本目錄執行：

```sh
npx --yes @fission-ai/openspec@1.17.0 --version
npx --yes @fission-ai/openspec@1.17.0 status --change dic4-paper-draft
npx --yes @fission-ai/openspec@1.17.0 validate dic4-paper-draft --strict
```

實際執行紀錄見 validation/。OpenSpec 格式通過不表示原型測試通過。task.md 區分文件完成、交付驗證、外部操作與後續研究。

## Overleaf MCP
目前尚無 Overleaf MCP 呼叫證據或專案連結；匯入 ZIP 後仍須依操作說明補齊。不要將本地編譯冒充 Overleaf 操作。

## Overleaf 匯入檔

- [修改前 ZIP](overleaf/DIC4_Overleaf_Before.zip)
- [修改後 ZIP](overleaf/DIC4_Overleaf_After.zip)

解壓或直接 Upload Project 後以 main.tex 為主檔。依 OVERLEAF_GUIDE.md 補齊實際專案與 MCP 證據。
