---
tags:
  - python
  - pdf
  - pymupdf
  - pikepdf
---

# Python での PDF 処理: PyMuPDF と pikepdf の使い分け

<div class="dnk-meta" markdown>
<span class="pill cat">Techniques</span>
<span class="pill">#python</span>
<span class="pill">#pdf</span>
<span class="pill">#pymupdf</span>
<span class="pill">#pikepdf</span>
<span class="pill">updated 2026-04-13</span>
<span class="pill">3 min read</span>
</div>

Python で PDF を扱う際、**PyMuPDF（fitz）** と **pikepdf** は両方とも有力だが、得意領域が異なる。両方を使い分けると実装の見通しが良くなる。

### 役割分担のマップ

```mermaid
flowchart LR
    subgraph PyMuPDF
      R[レンダリング]
      T[テキスト抽出]
      S[検索・ハイライト]
      I[画像書き出し]
    end
    subgraph pikepdf
      M[メタデータ編集]
      E[ページ抽出・結合]
      X[暗号化・復号]
      L[低レベル PDF 構造]
    end

    style PyMuPDF fill:#e8f5e9,stroke:#81c784,color:#000
    style pikepdf fill:#e3f2fd,stroke:#64b5f6,color:#000
```

### ライブラリの特徴

| 観点 | PyMuPDF | pikepdf |
|------|---------|---------|
| 基盤 | MuPDF（C++） | QPDF（C++） |
| 得意 | ビューア・テキスト抽出 | 構造的編集・圧縮 |
| ライセンス | AGPL / 商用 | MPL 2.0 |
| 速度 | レンダリングが高速 | 構造操作が堅牢 |
| 欠点 | AGPL のため配布時に注意 | レンダリング機能なし |

### 使い分けの目安

- **PDF を画面表示したい、テキストを検索したい、画像として書き出したい** → PyMuPDF
- **PDF を分割・結合したい、メタデータや注釈を編集したい、暗号化を扱いたい** → pikepdf
- **両方必要なら両方使う**。ライブラリを選ぶ時点で「一つで全て」は欲張らない

### ライセンスに関する注意

PyMuPDF は AGPL。商用製品に組み込む場合、商用ライセンスを購入するか、製品を AGPL で公開する必要がある。**配布形態を決める段階でライセンスを確認する**。開発時に気付かず AGPL を前提にした設計をすると、後で高い代償を払う。

### 実装の型

    # 読み取り・表示は PyMuPDF
    import fitz  # PyMuPDF
    doc = fitz.open("input.pdf")
    page = doc[0]
    pix = page.get_pixmap()
    pix.save("page.png")

    # 構造編集は pikepdf
    import pikepdf
    pdf = pikepdf.open("input.pdf")
    del pdf.pages[0]  # 1 ページ目を削除
    pdf.save("output.pdf")

両者は同じファイルを別プロセスで扱える。役割で切り分け、必要なときだけ相互に読み書きすればよい。



## 関連エントリ

- [AI エージェントが読みやすいドキュメントの書き方](ai-エージェントが読みやすいドキュメントの書き方.md)
- [Claude Code を日々使い倒す 10 の小技](claude-code-を日々使い倒す-10-の小技.md)
- [CoT・ToT・ReAct — 推論パターンの使い分け](cottotreact-推論パターンの使い分け.md)


<div class="dnk-prev-next" markdown>
  <div class="prev">← [RAG のチャンクサイズを選ぶ基準](rag-のチャンクサイズを選ぶ基準.md)</div>
  <div class="next"></div>
</div>
