<div class="dnk-hero" markdown>

# Dinekt Knowledge Wiki

<p class="dnk-hero-tagline">Claude Code を中心とした AI 開発・エージェント設計の現場で得た知見を、再利用できる形でまとめたナレッジベースです。</p>

<div class="dnk-hero-meta">
  <span>10 entries</span>
  <span>4 categories</span>
  <span>auto-generated</span>
</div>

</div>

## どこから読むか

<div class="grid cards" markdown>

-   __[Techniques](techniques/index.md)__

    ---

    エージェントやプロンプトの設計手法

    _1 entries_

-   __[Patterns](patterns/index.md)__

    ---

    失敗モードと再発防止のパターン集

    _3 entries_

-   __[Case Studies](case-studies/index.md)__

    ---

    Dinekt が実際に遭遇したケースと対応の記録

    _2 entries_

-   __[Tech Notes](tech-notes/index.md)__

    ---

    技術仕様・Tips・検証メモ

    _4 entries_

</div>

## 最近のエントリ

<div class="grid cards" markdown>

-   __[SQLite FTS5 で日本語を全文検索する](tech-notes/sqlite-fts5-で日本語を全文検索する.md)__

    ---

    SQLite FTS5 のデフォルト tokenizer (unicode61) は日本語の分かち書きを行わず、「テスト」のようなクエリでは期待通りの結果が得られない。SQLite 3.34 以降で利…

-   __[SQLite FTS5 クエリは phrase 化して安全に渡す](tech-notes/sqlite-fts5-クエリは-phrase-化して安全に渡す.md)__

    ---

    FTS5 のクエリ構文では  " ( )  などが演算子として解釈される。ユーザー入力をそのまま渡すとクエリエラーや意図しない検索結果を招く。たとえば technews は tech NOT news…

-   __[ナレッジベースのファイル命名規則とテキスト規約](tech-notes/ナレッジベースのファイル命名規則とテキスト規約.md)__

    ---

    個人・チームでナレッジを運用する際、命名規則とコンテンツルールを先に決めておくと、検索性と整合性が保てる。Dinekt で実運用している規約を一般化した例。 ファイル命名  種類  命名    日次フ…

-   __[実装言語を選ぶ前に環境前提を確認する](tech-notes/実装言語を選ぶ前に環境前提を確認する.md)__

    ---

    実装言語やランタイムを決める際、前提となる CLI やライブラリがターゲット環境に存在することを事前確認する（preflight check）。「いつもの環境にはあるから」という感覚で選ぶと詰む。 具…

-   __[LLM エージェントに push 通知チャネルを組み込む際の落とし穴](case-studies/llm-エージェントに-push-通知チャネルを組み込む際の落とし穴.md)__

    ---

    Claude Code 等の対話型 LLM エージェントに Telegram などの外部チャネルを連携する際、MCP サーバーの設定だけでは不十分という教訓。 観察された問題  受信が無音で止まる:…

-   __[比喩的な指示が実装の食い違いを生む — 二役レビューで救われた事例](case-studies/比喩的な指示が実装の食い違いを生む-二役レビューで救われた事例.md)__

    ---

    ユーザの指示に含まれる比喩的な語彙を、実装者（LLM）がリテラルに解釈することで発生する仕様 drift と、それを検出・巻き戻す仕組みの実証例。 発生した事象 設計セッションで、ユーザが「データベー…

</div>

## 関連リンク

- [用語集](glossary.md)
- [Dinekt 公式サイト](https://dinekt.com)
