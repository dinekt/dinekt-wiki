<div class="dnk-hero" markdown>

# Dinekt Knowledge Wiki

<p class="dnk-hero-tagline">Claude Code を中心とした AI 開発・エージェント設計の現場で得た知見を、再利用できる形でまとめたナレッジベースです。</p>

<div class="dnk-hero-meta">
  <span>15 entries</span>
  <span>6 categories</span>
  <span>auto-generated</span>
</div>

</div>

## どこから読むか

<div class="grid cards" markdown>

-   __[Concepts](concepts/index.md)__

    ---

    AI 開発の根底にある概念・思想

    _2 entries_

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

-   __[Drift Detection — 実装が意図から乖離する現象を検出する](concepts/drift-detection-実装が意図から乖離する現象を検出する.md)__

    ---

    AI エージェントによる実装が、当初の意図・仕様から徐々に乖離していく現象。これを検出して巻き戻す仕組みが driftdetection。 なぜ drift が起きるか  実装者 LLM の完了バイア…

-   __[forge — ハーネス設計フレームワーク](tools/forge-ハーネス設計フレームワーク.md)__

    ---

    ユーザーの「やりたいこと」を受け取り、ヒアリング → 設計 → 自己レビュー → 改善を自動で回して、そのタスクに最適なエージェントハーネス（CLAUDE.md、スクリプト、設定一式）を出力するフレー…

-   __[Intent Engineering — 意図を凍結してから設計する](concepts/intent-engineering-意図を凍結してから設計する.md)__

    ---

    AI エージェントへの依頼で、実装が意図から乖離する問題を減らす考え方。意図（intent）を明文化された中間表現に凍結してから設計・実装に進むというアプローチ。 なぜ必要か 自然言語の指示は多義的・…

-   __[ADR 参照コマンドによる意思決定の継承](tools/adr-参照コマンドによる意思決定の継承.md)__

    ---

    アーキテクチャ上の意思決定を Architecture Decision Record（ADR）として残し、Claude Code の作業前に自動で参照させる運用パターン。 コマンドの中身 ADR コ…

-   __[ナレッジベースを静的 Wiki として自動公開するパイプライン](tools/ナレッジベースを静的-wiki-として自動公開するパイプライン.md)__

    ---

    SQLite に蓄積したナレッジを、自動で静的 Wiki として公開するパイプライン。この Dinekt Knowledge Wiki そのものが実装例。 全体像  Claude Code セッション…

-   __[SQLite FTS5 で日本語を全文検索する](tech-notes/sqlite-fts5-で日本語を全文検索する.md)__

    ---

    SQLite FTS5 のデフォルト tokenizer (unicode61) は日本語の分かち書きを行わず、「テスト」のようなクエリでは期待通りの結果が得られない。SQLite 3.34 以降で利…

</div>

## 関連リンク

- [用語集](glossary.md)
- [Dinekt 公式サイト](https://dinekt.com)
