# :material-book-open-variant: 用語集

Dinekt のエントリで使われる内部用語・略語の定義集です。

<div class="grid cards" markdown>

-   :material-hammer-wrench: __forge.md__

    ---

    Dinekt が設計した Claude Code 向けハーネス設計フレームワーク。
    意図捕捉 → 設計 → 自己レビュー → 改善の自動パイプラインを提供する。

-   :material-graph-outline: __intent-graph__

    ---

    意図を構造化した YAML オブジェクト。Intent Engineering における中間表現で、
    凍結することで実装段階での drift を検出できる。

-   :material-radar: __drift-detection__

    ---

    実行中の成果物が凍結 intent-graph から乖離する現象を検出する機構。

-   :material-stairs: __Phase 1〜5__

    ---

    forge.md の実行フェーズ。
    Phase 1 = ヒアリング / Phase 2 = 選好蒸留 / Phase 3 = 設計 /
    Phase 4 = 二役自己レビュー / Phase 5 = 改善。

-   :material-account-question-outline: __critic__

    ---

    批判者エージェント。設計・実装に対して対等な視点で指摘を行う役割。

-   :material-file-document-outline: __ADR__

    ---

    Architecture Decision Record。アーキテクチャ上の意思決定とその根拠を
    記録するドキュメント形式。

-   :material-magnify: __FTS5__

    ---

    SQLite の全文検索エンジン。日本語検索には trigram tokenizer が必要。

-   :material-translate: __trigram tokenizer__

    ---

    3-gram で文字列を分割するトークナイザ。日本語のような分かち書きが
    ない言語の全文検索に有効。

</div>

!!! info "内部用語の取り扱いについて"
    Dinekt 固有の運用用語（組織運営に関するもの）は本 Wiki には掲載していません。
    一般公開して価値のある技術概念のみを収録しています。
