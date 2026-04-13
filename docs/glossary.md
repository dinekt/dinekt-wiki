# 用語集

Dinekt のエントリで使われる内部用語・略語の定義集です。

| 用語 | 説明 |
|------|------|
| forge.md | Dinekt が設計した Claude Code 向けハーネス設計フレームワーク。意図捕捉 → 設計 → 自己レビュー → 改善の自動パイプラインを提供する |
| intent-graph | 意図を構造化した YAML オブジェクト。Intent Engineering における中間表現で、凍結することで実装段階での drift を検出できる |
| drift-detection | 実行中の成果物が凍結 intent-graph から乖離する現象を検出する機構 |
| Phase 1〜5 | forge.md の実行フェーズ。Phase 1 = ヒアリング / Phase 2 = 選好蒸留 / Phase 3 = 設計 / Phase 4 = 二役自己レビュー / Phase 5 = 改善 |
| critic | 批判者エージェント。設計・実装に対して対等な視点で指摘を行う役割 |
| ADR | Architecture Decision Record。アーキテクチャ上の意思決定とその根拠を記録するドキュメント形式 |
| FTS5 | SQLite の全文検索エンジン。日本語検索には trigram tokenizer が必要 |
| trigram tokenizer | 3-gram で文字列を分割するトークナイザ。日本語のような分かち書きがない言語の全文検索に有効 |

!!! note "内部用語について"
    Dinekt 固有の運用用語（組織運営に関するもの）は本 Wiki には掲載していません。
    一般公開して価値のある技術概念のみを収録しています。
