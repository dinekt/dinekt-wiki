<div class="dnk-hero" markdown>

# Dinekt Knowledge Wiki

<p class="dnk-hero-tagline">Claude Code と AI エージェントの設計・運用を続けるなかで積み上げてきた知見を、他のプロジェクトでも参照できる形でまとめたナレッジベースです。概念・手法・失敗パターン・道具・実際のケーススタディまでを横断して扱います。</p>

<div class="dnk-hero-meta">
  <span>22 entries</span>
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

    _4 entries_

-   __[Patterns](patterns/index.md)__

    ---

    失敗モードと再発防止のパターン集

    _3 entries_

-   __[Case Studies](case-studies/index.md)__

    ---

    実際に遭遇したケースと対応の記録

    _5 entries_

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

-   __[Chrome 拡張 Manifest V3 での Content Script + Side Panel 連携](case-studies/chrome-拡張-manifest-v3-での-content-script-side-panel-連携.md)__

    ---

    Chrome 拡張 Manifest V3 で、Content Script（ページに注入するスクリプト）と Side Panel（ブラウザ右側のパネル UI）を連携させる際に遭遇した実装上の落とし穴…

-   __[Next.js + Supabase + Prisma 併用時の認証と RLS の扱い方](case-studies/nextjs-supabase-prisma-併用時の認証と-rls-の扱い方.md)__

    ---

    Next.js アプリで Supabase（認証・RLS 付き Postgres）と Prisma（型付き ORM）を併用する際、認証情報の同期で詰まる問題と対処。 併用の基本構造 mermaid f…

-   __[Python での PDF 処理: PyMuPDF と pikepdf の使い分け](techniques/python-での-pdf-処理-pymupdf-と-pikepdf-の使い分け.md)__

    ---

    Python で PDF を扱う際、PyMuPDF（fitz） と pikepdf は両方とも有力だが、得意領域が異なる。両方を使い分けると実装の見通しが良くなる。 役割分担のマップ mermaid…

-   __[Drift Detection — 実装が意図から乖離する現象を検出する](concepts/drift-detection-実装が意図から乖離する現象を検出する.md)__

    ---

    AI エージェントによる実装が、当初の意図・仕様から徐々に乖離していく現象。これを検出して巻き戻す仕組みが driftdetection。 発生と検出のメカニズム mermaid flowchart…

-   __[Intent Engineering — 意図を凍結してから設計する](concepts/intent-engineering-意図を凍結してから設計する.md)__

    ---

    AI エージェントへの依頼で、実装が意図から乖離する問題を減らす考え方。意図（intent）を明文化された中間表現に凍結してから設計・実装に進むというアプローチ。 全体フロー mermaid flow…

-   __[コンテキストは有限で劣化する資源である](concepts/コンテキストは有限で劣化する資源である.md)__

    ---

    LLM エージェントの回答品質は、渡されたコンテキスト量に比例しない。むしろ反比例する場面が多い。コンテキストは有限かつ劣化する資源として扱うのが、実運用での正しい前提。 コンテキスト量と品質の関係…

</div>

## 関連リンク

- [用語集](glossary.md)
- [タグ一覧](tags.md)
- [Dinekt 公式サイト](https://dinekt.com)
