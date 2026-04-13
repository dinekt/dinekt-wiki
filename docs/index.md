<div class="dnk-hero" markdown>

# Dinekt Knowledge Wiki

<p class="dnk-hero-tagline">Claude Code と AI エージェントの設計・運用を続けるなかで積み上げてきた知見を、他のプロジェクトでも参照できる形でまとめたナレッジベースです。概念・手法・失敗パターン・道具・実際のケーススタディまでを横断して扱います。</p>

<div class="dnk-hero-meta">
  <span>25 entries</span>
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

    _4 entries_

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

    _6 entries_

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

-   __[Stripe Webhook を Next.js で安全に実装する](case-studies/stripe-webhook-を-nextjs-で安全に実装する.md)__

    ---

    Stripe の Webhook エンドポイントを実装する際、署名検証を正しく行わないと、第三者が偽の決済完了通知を送り込める。Next.js 環境での実装で遭遇した落とし穴と対処。 Webhook…

-   __[技術選定の5軸評価フレームワーク](concepts/技術選定の5軸評価フレームワーク.md)__

    ---

    新しいプロジェクトで技術スタックを選ぶ際、場当たり的に「流行ってるから」「使ったことあるから」で選ぶと後で痛い目を見る。判断軸を言語化しておくと、同じ失敗を繰り返さずに済む。 5 つの判断軸 merm…

-   __[chrome.storage は local / sync / session を正しく使い分ける](tech-notes/chromestorage-は-local-sync-session-を正しく使い分ける.md)__

    ---

    Chrome 拡張で状態を保存する際、chrome.storage.local と chrome.storage.sync のどちらを使うかは意外と間違えやすい。誤って sync を選ぶと、クォータ制…

-   __[Chrome 拡張 Manifest V3 での Content Script + Side Panel 連携](case-studies/chrome-拡張-manifest-v3-での-content-script-side-panel-連携.md)__

    ---

    Chrome 拡張 Manifest V3 で、Content Script（ページに注入するスクリプト）と Side Panel（ブラウザ右側のパネル UI）を連携させる際に遭遇した実装上の落とし穴…

-   __[Next.js + Supabase + Prisma 併用時の認証と RLS の扱い方](case-studies/nextjs-supabase-prisma-併用時の認証と-rls-の扱い方.md)__

    ---

    Next.js アプリで Supabase（認証・RLS 付き Postgres）と Prisma（型付き ORM）を併用する際、認証情報の同期で詰まる問題と対処。 併用の基本構造 mermaid f…

-   __[Python での PDF 処理: PyMuPDF と pikepdf の使い分け](techniques/python-での-pdf-処理-pymupdf-と-pikepdf-の使い分け.md)__

    ---

    Python で PDF を扱う際、PyMuPDF（fitz） と pikepdf は両方とも有力だが、得意領域が異なる。両方を使い分けると実装の見通しが良くなる。 役割分担のマップ mermaid…

</div>

## 関連リンク

- [用語集](glossary.md)
- [タグ一覧](tags.md)
- [Dinekt 公式サイト](https://dinekt.com)
