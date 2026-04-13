<div class="dnk-hero" markdown>

# Dinekt Knowledge Wiki

<p class="dnk-hero-tagline">Claude Code と AI エージェントの設計・運用を続けるなかで積み上げてきた知見を、他のプロジェクトでも参照できる形でまとめたナレッジベースです。概念・手法・失敗パターン・道具・実際のケーススタディまでを横断して扱います。</p>

<div class="dnk-hero-meta">
  <span>18 entries</span>
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

    _2 entries_

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

-   __[ヒアリングテンプレートの設計](techniques/ヒアリングテンプレートの設計.md)__

    ---

    曖昧な依頼から意図を抽出するために使う、定型のヒアリング質問セット。毎回ゼロから聞くのではなく、テンプレートを用意しておくと抽出の漏れが減る。 ヒアリング質問の型 以下 7 項目をベースにする。これは…

-   __[マルチエージェントの8つの失敗モード](patterns/マルチエージェントの8つの失敗モード.md)__

    ---

    複数のエージェントやセッションを同時・並列に運用する際に現れる筆者的な失敗モード。 1. Context Compression Amnesia コンテキスト圧縮時にエージェントが重要な決定を忘れる。…

-   __[単一エージェントの7つのアンチパターン](patterns/単一エージェントの7つのアンチパターン.md)__

    ---

    Claude Code などシステムプロンプト主体のエージェント運用で繰り返し現れるアンチパターンと、その回避策。 1. システムプロンプトを 200 行以上書く 指示予算（実質 100〜150 命令…

-   __[CLAUDE.md 肥大化を ADR 分離で回復した事例](case-studies/claudemd-肥大化を-adr-分離で回復した事例.md)__

    ---

    Claude Code のシステムプロンプト（CLAUDE.md）が肥大化して指示遵守率が下がった状況を、ADR パターンの導入で回復させたケース。 発生した事象 プロジェクトが成長するにつれ、CLA…

-   __[二役レビューの実装パターン](techniques/二役レビューの実装パターン.md)__

    ---

    同一モデルでの自己レビューは自己整合性バイアスに引きずられて機能しない。実装者と別ロールの批判者を構造的に分けることで、独立したレビューが成立する。 基本構造 1. 実装者（implementer）:…

-   __[forge — ハーネス設計フレームワーク](tools/forge-ハーネス設計フレームワーク.md)__

    ---

    ユーザーの「やりたいこと」を受け取り、ヒアリング → 設計 → 自己レビュー → 改善を自動で回して、そのタスクに最適なエージェントハーネス（システムプロンプト、スクリプト、設定一式）を出力するフレー…

</div>

## 関連リンク

- [用語集](glossary.md)
- [Dinekt 公式サイト](https://dinekt.com)
