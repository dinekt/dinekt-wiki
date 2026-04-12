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

---

## 先行概念チェック

**判定**: 📚 先行概念あり  
**独自性スコア**: 20/100  
**検証日**: 2026-04-12T15:47:52+00:00  

### 先行概念の概要

FTS5 trigram tokenizer の CJK 対応は広く知られた手法。SQLite 公式ドキュメント、DEV Community の記事「Building a Search System with SQLite FTS5 and CJK Support」、sqlite-better-trigram（GitHub）等で詳細に解説済み。

### この概念の独自部分

3文字未満のクエリで LIKE フォールバックが必要という実務ノウハウは記載記事が少ないが、技術的には自明。

### 参考ソース

- https://dev.to/ahmet_gedik778845/building-a-search-system-with-sqlite-fts5-and-cjk-support-472f
- https://github.com/streetwriters/sqlite-better-trigram
