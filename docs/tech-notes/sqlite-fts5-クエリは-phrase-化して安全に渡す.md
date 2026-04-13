# SQLite FTS5 クエリは phrase 化して安全に渡す

<div class="dnk-meta" markdown>
<span class="pill cat">Tech Notes</span>
<span class="pill">#fts5</span>
<span class="pill">#cli</span>
<span class="pill">#convention</span>
<span class="pill">#2026-04-10</span>
<span class="pill">updated 2026-04-13</span>
</div>

FTS5 のクエリ構文では `-` `"` `(` `)` `*` などが演算子として解釈される。ユーザー入力をそのまま渡すとクエリエラーや意図しない検索結果を招く。たとえば `tech-news` は `tech NOT news` と解釈される。

### 対策

1. **デフォルトは全クエリを phrase（ダブルクォート）で囲む**

    ```python
    fts_query = '"' + keyword.replace('"', '""') + '"'
    ```

2. 高度な構文（AND/OR/NEAR 等）を使いたい場合のために、`:raw:` のような明示的なプレフィックスでオプトインできるようにしておく

この 2 段構えで、通常用途は安全・上級用途は自由という設計ができる。



## 参考ソース

- <https://www.sqlite.org/fts5.html>


## 関連エントリ

- [SQLite FTS5 で日本語を全文検索する](sqlite-fts5-で日本語を全文検索する.md)
- [実装言語を選ぶ前に環境前提を確認する](実装言語を選ぶ前に環境前提を確認する.md)
- [比喩的な指示が実装の食い違いを生む — 二役レビューで救われた事例](../case-studies/比喩的な指示が実装の食い違いを生む-二役レビューで救われた事例.md)
