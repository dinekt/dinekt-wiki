<div class="dnk-hero" markdown>

# Dinekt Knowledge Wiki

<p class="dnk-hero-tagline">Claude Code と AI エージェントの設計・運用を続けるなかで積み上げてきた知見を、他のプロジェクトでも参照できる形でまとめたナレッジベースです。概念・手法・失敗パターン・道具・実際のケーススタディまでを横断して扱います。</p>

<div class="dnk-hero-meta">
  <span>19 entries</span>
  <span>6 categories</span>
  <span>auto-generated</span>
</div>

</div>

## はじめての方へ

**推奨の読み順**:

1. [Concepts](concepts/index.md) — 背景にある考え方を掴む
2. [Patterns](patterns/index.md) — 典型的な失敗と対策をチェックリストとして読む
3. [Techniques](techniques/index.md) — 設計手法として応用する
4. [Case Studies](case-studies/index.md) — 実例で理解を補強する

必要に応じて [Tools](tools/index.md) と [Tech Notes](tech-notes/index.md) を辞書的に参照してください。

## カテゴリ

<div class="grid cards" markdown>

-   __[Concepts](concepts/index.md)__

    ---

    AI 開発の根底にある概念・思想

    _3 entries_

-   __[Techniques](techniques/index.md)__

    ---

    エージェントやプロンプトの設計手法

    _3 entries_

-   __[Patterns](patterns/index.md)__

    ---

    失敗モードと再発防止のパターン集

    _3 entries_

-   __[Case Studies](case-studies/index.md)__

    ---

    実際に遭遇したケースと対応の記録

    _3 entries_

-   __[Tools](tools/index.md)__

    ---

    Dinekt が設計・運用している道具と実装

    _3 entries_

-   __[Tech Notes](tech-notes/index.md)__

    ---

    技術仕様・Tips・検証メモ

    _4 entries_

</div>

## 最近のエントリ

<div class="grid cards" markdown>

-   __[コンテキストは有限で劣化する資源である](concepts/コンテキストは有限で劣化する資源である.md)__

    ---

    LLM エージェントの回答品質は、渡されたコンテキスト量に比例しない。むしろ反比例する場面が多い。コンテキストは有限かつ劣化する資源として扱うのが、実運用での正しい前提。 観察される事実  長いセッシ…

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

    複数のエージェントやセッションを同時・並列に運用する際に現れる筆者的な失敗モード。 1. Context Compression Amnesia コンテキスト圧縮時にエージェントが重要な決定を忘れる。…

-   __[単一エージェントの7つのアンチパターン](patterns/単一エージェントの7つのアンチパターン.md)__

    ---

    Claude Code などシステムプロンプト主体のエージェント運用で繰り返し現れるアンチパターンと、その回避策。 1. システムプロンプトを 200 行以上書く 指示予算（実質 100〜150 命令…

</div>

## 関連リンク

- [用語集](glossary.md)
- [タグ一覧](tags.md)
- [Dinekt 公式サイト](https://dinekt.com)
