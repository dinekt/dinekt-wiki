<div class="dnk-hero" markdown>

# Dinekt Knowledge Wiki

<p class="dnk-hero-tagline">Claude Code を中心とした AI 開発・エージェント設計の現場で得た知見を、再利用できる形でまとめたナレッジベースです。</p>

<div class="dnk-hero-meta">
  <span>6 entries</span>
  <span>3 categories</span>
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

</div>

## 最近のエントリ

<div class="grid cards" markdown>

-   __[LLM エージェントに push 通知チャネルを組み込む際の落とし穴](case-studies/llm-エージェントに-push-通知チャネルを組み込む際の落とし穴.md)__

    ---

    Claude Code 等の対話型 LLM エージェントに Telegram などの外部チャネルを連携する際、MCP サーバーの設定だけでは不十分という教訓。 観察された問題  受信が無音で止まる:…

-   __[比喩的な指示が実装の食い違いを生む — 二役レビューで救われた事例](case-studies/比喩的な指示が実装の食い違いを生む-二役レビューで救われた事例.md)__

    ---

    ユーザの指示に含まれる比喩的な語彙を、実装者（LLM）がリテラルに解釈することで発生する仕様 drift と、それを検出・巻き戻す仕組みの実証例。 発生した事象 設計セッションで、ユーザが「データベー…

-   __[エージェント運用の失敗モード一覧と対策マップ](patterns/エージェント運用の失敗モード一覧と対策マップ.md)__

    ---

    単一エージェント運用の典型的な 7 つのアンチパターンと、マルチエージェント運用で頻出する 8 つの失敗モードに対する、実装可能な対策の対応表。個別の解説は各エントリを参照。 単一エージェント運用…

-   __[マルチエージェントの8つの失敗モード](patterns/マルチエージェントの8つの失敗モード.md)__

    ---

    1. Context Compression Amnesia コンテキスト圧縮時にエージェントが重要な知識を忘れる。  症状: 前のターンで決めた方針を圧縮後に覆す  対策: MEMORY.md /…

-   __[単一エージェントの7つのアンチパターン](patterns/単一エージェントの7つのアンチパターン.md)__

    ---

    1. CLAUDE.mdを200行以上書く 指示予算（実質100〜150命令）を超えると指示無視が発生する。  対策: 30〜60行に収める。詳細はADR（docs/decisions/）や別ファイル…

-   __[マルチエージェント組織の4つの設計教訓](techniques/マルチエージェント組織の4つの設計教訓.md)__

    ---

    AI エージェントを複数ロールで運用する際に得た設計上の教訓。 1. レビュー役は「対等な同僚」の口調で 上から目線でも卑屈でもなく、忌憚なく指摘する同僚のトーンを指示する。同調バイアスを避けるため、…

</div>

## 関連リンク

- [用語集](glossary.md)
- [Dinekt 公式サイト](https://dinekt.com)
