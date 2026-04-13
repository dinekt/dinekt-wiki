<div class="dnk-hero" markdown>

# Dinekt Knowledge Wiki

<p class="dnk-hero-tagline">Claude Code と AI エージェントの設計・運用を続けるなかで積み上げてきた知見を、他のプロジェクトでも参照できる形でまとめたナレッジベースです。概念・手法・失敗パターン・道具・実際のケーススタディまでを横断して扱います。</p>

<div class="dnk-hero-meta">
  <span>28 entries</span>
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

    _5 entries_

-   __[Techniques](techniques/index.md)__

    ---

    エージェントやプロンプトの設計手法

    _5 entries_

-   __[Patterns](patterns/index.md)__

    ---

    失敗モードと再発防止のパターン集

    _3 entries_

-   __[Case Studies](case-studies/index.md)__

    ---

    実際に遭遇したケースと対応の記録

    _7 entries_

-   __[Tools](tools/index.md)__

    ---

    Dinekt が設計・運用している道具と実装

    _3 entries_

-   __[Tech Notes](tech-notes/index.md)__

    ---

    技術仕様・Tips・検証メモ

    _5 entries_

</div>

## 最近のエントリ

<div class="grid cards" markdown>

-   __[プロンプトキャッシュを壊さない書き方](techniques/プロンプトキャッシュを壊さない書き方.md)__

    ---

    LLM API の多くは同じ先頭プロンプトを再利用することでプロンプトキャッシュを効かせ、レイテンシとコストを劇的に下げられる。ただしキャッシュは「先頭から完全一致」が前提なので、わずかな変動で無効化…

-   __[マルチエージェント組織の4つの設計教訓](techniques/マルチエージェント組織の4つの設計教訓.md)__

    ---

    AI エージェントを複数ロールで運用する際に得た設計上の教訓。 組織構造の比喩 mermaid flowchart TD H[ユーザー / 発注者] I[索引エージェント<br/index only]…

-   __[Next.js で LLM のストリーミング応答を扱う実装パターン](case-studies/nextjs-で-llm-のストリーミング応答を扱う実装パターン.md)__

    ---

    OpenAI（や Anthropic）の Chat Completions API でストリーミング応答を Next.js サーバーから受けて、ブラウザにリアルタイム表示する実装パターン。Server…

-   __[Eval-Driven Development — LLM 機能開発は評価から始める](concepts/eval-driven-development-llm-機能開発は評価から始める.md)__

    ---

    LLM を使った機能を作る際、目視確認だけに頼ると品質が安定しない。評価を先に書き、評価が通ることを目指して実装するという進め方が、LLM 時代の TDD に相当する。EvalDriven Devel…

-   __[エージェント運用の失敗モード一覧と対策マップ](patterns/エージェント運用の失敗モード一覧と対策マップ.md)__

    ---

    単一エージェント運用の典型的な 7 つのアンチパターンと、マルチエージェント運用で頻出する 8 つの失敗モードに対する、実装可能な対策の対応表。個別の解説は各エントリを参照。 パターンと対策の対応図…

-   __[ADR 参照コマンドによる意思決定の継承](tools/adr-参照コマンドによる意思決定の継承.md)__

    ---

    アーキテクチャ上の意思決定を Architecture Decision Record（ADR）として残し、Claude Code の作業前に自動で参照させる運用パターン。 ADR 参照の流れ mer…

</div>

## 関連リンク

- [用語集](glossary.md)
- [タグ一覧](tags.md)
- [Dinekt 公式サイト](https://dinekt.com)
