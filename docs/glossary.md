# 用語集

Dinekt のエントリで使われる略語・固有概念の定義集。

| 用語 | 説明 |
|------|------|
| forge.md | Dinekt が設計した Claude Code 向けのハーネス設計フレームワーク。意図捕捉から設計、自己レビュー、改善までを一つのパイプラインで扱う |
| intent-graph | 意図を構造化した YAML 形式の中間表現。凍結することで実装段階の乖離（drift）を検出できる |
| drift-detection | 実行中の成果物が、凍結された intent-graph から離れていく現象を検出する仕組み |
| Phase 1〜5 | forge.md の実行フェーズ。1 = ヒアリング、2 = 選好蒸留、3 = 設計、4 = 二役自己レビュー、5 = 改善 |
| critic | 批判者エージェント。設計や実装に対して、対等な立場から指摘を行う役割 |
| ADR | Architecture Decision Record。アーキテクチャ上の意思決定とその根拠を残すドキュメント形式 |
| FTS5 | SQLite の全文検索エンジン。日本語検索には trigram tokenizer を併用する |
| trigram tokenizer | 文字列を 3 文字単位で分割するトークナイザ。分かち書きを持たない言語の全文検索に有効 |
