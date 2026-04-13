# Case Studies

*実際に遭遇したケースと対応の記録*

実際のセッションで遭遇した出来事と、そこから得た学びを記録しています。具体的なシチュエーションを通じて、Concepts や Patterns の妥当性を確認できます。

**6 件のエントリ**

<div class="grid cards" markdown>

-   __[CLAUDE.md 肥大化を ADR 分離で回復した事例](claudemd-肥大化を-adr-分離で回復した事例.md)__

    ---

    Claude Code のシステムプロンプト（CLAUDE.md）が肥大化して指示遵守率が下がった状況を、ADR パターンの導入で回復させたケース。 発生した事象 プロジェクトが成長するにつれ、CLA…

-   __[比喩的な指示が実装の食い違いを生む — 二役レビューで救われた事例](比喩的な指示が実装の食い違いを生む-二役レビューで救われた事例.md)__

    ---

    ユーザの指示に含まれる比喩的な語彙を、実装者（LLM）がリテラルに解釈することで発生する仕様 drift と、それを検出・巻き戻す仕組みの実証例。 発生した事象 設計セッションで、ユーザが「データベー…

-   __[LLM エージェントに push 通知チャネルを組み込む際の落とし穴](llm-エージェントに-push-通知チャネルを組み込む際の落とし穴.md)__

    ---

    Claude Code 等の対話型 LLM エージェントに Telegram などの外部チャネルを連携する際、MCP サーバーの設定だけでは不十分という教訓。 観察された問題  受信が無音で止まる:…

-   __[Chrome 拡張 Manifest V3 での Content Script + Side Panel 連携](chrome-拡張-manifest-v3-での-content-script-side-panel-連携.md)__

    ---

    Chrome 拡張 Manifest V3 で、Content Script（ページに注入するスクリプト）と Side Panel（ブラウザ右側のパネル UI）を連携させる際に遭遇した実装上の落とし穴…

-   __[Next.js + Supabase + Prisma 併用時の認証と RLS の扱い方](nextjs-supabase-prisma-併用時の認証と-rls-の扱い方.md)__

    ---

    Next.js アプリで Supabase（認証・RLS 付き Postgres）と Prisma（型付き ORM）を併用する際、認証情報の同期で詰まる問題と対処。 併用の基本構造 mermaid f…

-   __[Stripe Webhook を Next.js で安全に実装する](stripe-webhook-を-nextjs-で安全に実装する.md)__

    ---

    Stripe の Webhook エンドポイントを実装する際、署名検証を正しく行わないと、第三者が偽の決済完了通知を送り込める。Next.js 環境での実装で遭遇した落とし穴と対処。 Webhook…

</div>
