# FTS5 日本語検索は trigram tokenizer を使う

**カテゴリ**: lesson  
**タグ**: sqlite,fts5,japanese,2026-04-10,tech-fact  
**登録日**: 2026-04-10 14:59:11  

---

SQLite FTS5 のデフォルト tokenizer (unicode61) は日本語形態素解析を行わないため、『テスト』のような検索が機能しない。SQLite 3.34+ で利用可能な trigram tokenizer に切り替えれば日本語含む CJK の全文検索が機能する。

設定例:
CREATE VIRTUAL TABLE entries_fts USING fts5(
  title, content, tags,
  content='entries',
  content_rowid='id',
  tokenize='trigram case_sensitive 0'
);

注意点:
1. 3 文字以上のクエリで動作する（2 文字検索は LIKE で対応）
2. インデックスサイズは unicode61 より大きい（数百〜数千エントリ規模では問題ない）
3. 検索精度に不満が出たら ICU tokenizer や外部検索エンジン (Meilisearch 等) への upgrade パスを検討
