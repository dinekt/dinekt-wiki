---
tags:
  - security
  - api-key
  - secrets
---

# LLM API キーの管理と漏洩防止

<div class="dnk-meta" markdown>
<span class="pill cat">Tech Notes</span>
<span class="pill">#security</span>
<span class="pill">#api-key</span>
<span class="pill">#secrets</span>
<span class="pill">updated 2026-04-13</span>
<span class="pill">5 min read</span>
</div>

LLM の API キー（OpenAI, Anthropic 等）は**高価・攻撃対象・漏洩時の影響が大きい**。最初から管理の仕組みを整えないと、事故を起こす。

### 漏洩の主な経路

```mermaid
flowchart TD
    L[API キー漏洩] --> G[Git に誤コミット]
    L --> C[クライアントコードに含む]
    L --> LOG[ログに出力]
    L --> S[スクリーンショット/画面共有]
    L --> T[チャットやメールで送信]

    style L fill:#ffebee,stroke:#e57373,color:#000
```

### 基本の守り方

**1. 環境変数に置く**

コードに直書きしない。**環境変数**で管理する。

    # 良い
    client = OpenAI(api_key=os.environ["OPENAI_API_KEY"])

    # 悪い
    client = OpenAI(api_key="sk-...")

**2. .env ファイルを gitignore**

`.env` は必ず `.gitignore` に含める。**先に gitignore を書いてから** `.env` を作る。順序が大事。

    # .gitignore
    .env
    .env.local
    .env.*.local

**3. クライアントに露出しない**

フロントエンドに API キーを渡さない。ブラウザで動くコードに入ると、全ユーザーから見える。

- **NG**: `NEXT_PUBLIC_OPENAI_API_KEY`
- **OK**: サーバーサイドで使い、クライアントにはプロキシ経由で提供

```mermaid
flowchart LR
    B[ブラウザ] --> S[サーバー]
    S --> L[LLM API]

    style S fill:#262626,color:#fff,stroke:#0a0a0a
```

サーバーが「API キーを持つ唯一の場所」になる設計。

**4. ログに出さない**

エラーログや HTTP リクエストログに API キーが含まれると漏れる。

    # ログに出やすい NG パターン
    logger.info(f"Calling API with headers: {headers}")  # headers に Authorization

ミドルウェアで**マスキング処理**を挟む。

**5. 用途別にキーを分ける**

- 本番用・開発用・CI 用で別キー
- 漏洩が疑われたら**該当キーだけ無効化**できる

**6. Rotation（定期更新）**

長期間同じキーを使わない。3〜6 ヶ月ごとに新しいキーを発行して切り替える。

### プラットフォーム別の格納先

| 環境 | 推奨の格納先 |
|------|-------------|
| ローカル開発 | `.env`（gitignore） |
| Vercel | Environment Variables |
| AWS | AWS Secrets Manager / SSM Parameter Store |
| GCP | Secret Manager |
| Azure | Key Vault |
| GitHub Actions | Repository Secrets |

平文で Docker image に焼き込んだり、リポジトリにコミットしたりしない。

### 漏洩時の対応

```mermaid
flowchart TD
    D[漏洩検知] --> R[即座に該当キーを無効化]
    R --> N[新しいキーを発行]
    N --> U[稼働中の環境で置き換え]
    U --> L[使用履歴を確認<br/>不正利用がないか]
    L --> F[報告・記録]

    style R fill:#ffebee,stroke:#e57373,color:#000
```

**順序が重要**。まず無効化、次に交換、最後に調査。

### 検出の仕組み

- **GitHub Secret Scanning**: リポジトリにコミットされた既知の形式のキーを自動検出
- **pre-commit hook**: コミット前にシークレットを検出（`detect-secrets`, `gitleaks`）
- **コスト異常検知**: 想定外の API 利用急増をアラート

これらをプロジェクト開始時に設定する。後付けは忘れがち。

### アンチパターン

- **「小さなプロジェクトだから大丈夫」**: 小さいうちこそコミット事故しやすい
- **「public repo じゃないから」**: private repo からも漏れることがある（CI ログ、画面共有、委託先経由等）
- **「ローテーションは後で」**: 事故後に慌てて rotation 手順を整えるのは大変。最初から仕組みに

### チェックリスト

- [ ] `.gitignore` に `.env` を追加
- [ ] pre-commit hook でシークレット検出
- [ ] 本番・開発・CI で別キー
- [ ] クライアントに API キーが露出していない
- [ ] ログのマスキング処理がある
- [ ] コスト異常アラートを設定
- [ ] rotation 手順を文書化

### まとめ

API キー管理は**プロジェクト最初のコミット**から仕組み化する。後付けはコストが高く、漏洩事故の修復も痛い。予防が全て。



## 関連エントリ

- [LLM アプリのインシデント対応](llm-アプリのインシデント対応.md)
- [LLM レッドチーミング — 意図的な攻撃で安全性を検証する](../techniques/llm-レッドチーミング-意図的な攻撃で安全性を検証する.md)
- [Stripe Webhook を Next.js で安全に実装する](../case-studies/stripe-webhook-を-nextjs-で安全に実装する.md)


<div class="dnk-prev-next" markdown>
  <div class="prev">← [実装言語を選ぶ前に環境前提を確認する](実装言語を選ぶ前に環境前提を確認する.md)</div>
  <div class="next">[LLM 機能を本番リリースする前のチェックリスト](llm-機能を本番リリースする前のチェックリスト.md) →</div>
</div>
