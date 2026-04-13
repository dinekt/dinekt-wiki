---
tags:
  - sqlite
  - fts5
  - japanese
---

# SQLite FTS5 で日本語を全文検索する

<div class="dnk-meta" markdown>
<span class="pill cat">Tech Notes</span>
<span class="pill">#sqlite</span>
<span class="pill">#fts5</span>
<span class="pill">#japanese</span>
<span class="pill">updated 2026-04-13</span>
</div>

SQLite FTS5 のデフォルト tokenizer (`unicode61`) は日本語の分かち書きを行わず、「テスト」のようなクエリでは期待通りの結果が得られない。SQLite 3.34 以降で利用できる trigram tokenizer に切り替えれば、CJK 言語の全文検索が機能する。

### 設定例

```sql
CREATE VIRTUAL TABLE entries_fts USING fts5(
  title, content, tags,
  content='entries',
  content_rowid='id',
  tokenize='trigram case_sensitive 0'
);
```

### 注意点

- **3 文字以上のクエリで動作する**。2 文字以下の検索は別経路（LIKE 等）にフォールバックする実装が必要
- インデックスサイズは `unicode61` より大きくなるが、数百〜数千エントリ規模では実用上問題にならない
- 検索精度に不満が出たら、ICU tokenizer や外部検索エンジン（Meilisearch 等）へのアップグレードパスを検討する



## 参考ソース

- <https://dev.to/ahmet_gedik778845/building-a-search-system-with-sqlite-fts5-and-cjk-support-472f>
- <https://github.com/streetwriters/sqlite-better-trigram>


## 関連エントリ

- [SQLite FTS5 クエリは phrase 化して安全に渡す](sqlite-fts5-クエリは-phrase-化して安全に渡す.md)
- [ナレッジベースを静的 Wiki として自動公開するパイプライン](../tools/ナレッジベースを静的-wiki-として自動公開するパイプライン.md)
- [ナレッジベースのファイル命名規則とテキスト規約](ナレッジベースのファイル命名規則とテキスト規約.md)
