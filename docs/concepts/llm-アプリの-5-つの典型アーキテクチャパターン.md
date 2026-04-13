---
tags:
  - architecture
  - patterns
  - concept
  - design
---

# LLM アプリの 5 つの典型アーキテクチャパターン

<div class="dnk-meta" markdown>
<span class="pill cat">Concepts</span>
<span class="pill">#architecture</span>
<span class="pill">#patterns</span>
<span class="pill">#concept</span>
<span class="pill">#design</span>
<span class="pill">updated 2026-04-13</span>
<span class="pill">6 min read</span>
</div>

LLM を組み込んだアプリのアーキテクチャは、用途によって大きく 5 パターンに分類できる。**自分のアプリがどのパターンか**を意識すると、設計判断が迷わない。

### パターンマップ

```mermaid
flowchart TD
    P[LLM アプリの型] --> P1[1. シンプル応答型]
    P --> P2[2. RAG 型]
    P --> P3[3. ツール利用型]
    P --> P4[4. マルチエージェント型]
    P --> P5[5. バッチ処理型]

    style P fill:#0a0a0a,color:#fff,stroke:#0a0a0a
```

### パターン 1: シンプル応答型

ユーザー入力に対して、LLM が直接回答する最小構成。

```mermaid
flowchart LR
    U[ユーザー] --> A[アプリ]
    A --> L[LLM API]
    L --> A
    A --> U

    style L fill:#fff3e0,stroke:#ffb74d
```

**例**: チャットボット、翻訳、要約

**向く**: 単純な問答、固有情報が不要な用途

**注意**: ハルシネーション対策を基本層で組み込む

### パターン 2: RAG 型

関連文書を検索してコンテキストに含めて回答。

```mermaid
flowchart LR
    U[ユーザー] --> A[アプリ]
    A --> V[Vector DB<br/>類似度検索]
    V --> A
    A --> L[LLM<br/>文書を参照]
    L --> A
    A --> U

    style V fill:#e3f2fd,stroke:#64b5f6
    style L fill:#fff3e0,stroke:#ffb74d
```

**例**: 社内ドキュメント QA、サポート自動化

**向く**: 固有情報・動的情報を扱う用途

**注意**: チャンク設計、関連度スコアの調整

### パターン 3: ツール利用型

LLM が外部ツールを呼び出して情報取得・アクション実行。

```mermaid
flowchart LR
    U[ユーザー] --> A[アプリ]
    A --> L[LLM]
    L -->|Tool Call| T1[DB クエリ]
    L -->|Tool Call| T2[外部 API]
    L -->|Tool Call| T3[計算]
    T1 --> L
    T2 --> L
    T3 --> L
    L --> A
    A --> U

    style L fill:#fff3e0,stroke:#ffb74d
    style T1 fill:#e3f2fd
    style T2 fill:#e3f2fd
    style T3 fill:#e3f2fd
```

**例**: スマート予約システム、AI アシスタント、調査エージェント

**向く**: 能動的な情報取得や操作が必要な用途

**注意**: ツール定義の品質、無限ループ防止

### パターン 4: マルチエージェント型

役割分担した複数のエージェントが協調。

```mermaid
flowchart TD
    U[ユーザー] --> O[Orchestrator]
    O --> A1[Planner]
    A1 --> A2[Coder]
    A2 --> A3[Reviewer]
    A3 --> A4[Deployer]
    A4 --> O
    O --> U

    style O fill:#0a0a0a,color:#fff
    style A3 fill:#fff3e0,stroke:#ffb74d
```

**例**: 自律的なコード生成、リサーチエージェント

**向く**: 複雑・長期・多段階のタスク

**注意**: エージェント間の情報伝達、並行処理の競合

### パターン 5: バッチ処理型

ユーザーインタラクションなしで、大量データを非同期に処理。

```mermaid
flowchart LR
    D[データ入力<br/>数千〜数万件] --> Q[ジョブキュー]
    Q --> W[ワーカー 並列]
    W --> L[LLM<br/>Batch API]
    L --> W
    W --> R[結果 DB]
    R --> V[可視化]

    style L fill:#fff3e0,stroke:#ffb74d
    style W fill:#e3f2fd,stroke:#64b5f6
```

**例**: レビュー分析、大量タグ付け、文書分類

**向く**: オフライン処理でコストを抑えたい用途

**注意**: 失敗時のリトライ、進捗可視化

### パターン選択ガイド

```mermaid
flowchart TD
    Q[要件] --> A{固有情報<br/>使う?}
    A -->|いいえ| B{能動的操作<br/>する?}
    A -->|はい| C{対話的?}
    B -->|いいえ| P1[パターン 1]
    B -->|はい| P3[パターン 3]
    C -->|はい| P2[パターン 2]
    C -->|いいえ| D{複雑?}
    D -->|はい| P4[パターン 4]
    D -->|いいえ| P5[パターン 5]
```

### 組み合わせ

実際のプロダクトは**複数パターンの組み合わせ**が多い。

- RAG 型 + ツール利用型: 文書検索 + 実行
- シンプル応答型 + バッチ処理型: 対話と分析の並行
- マルチエージェント型 + RAG: 調査エージェントが各自 RAG を使う

### アンチパターン

**1. パターン 4 を最初から選ぶ**

マルチエージェントは複雑。**シンプルな構成で試してから**、必要性を判断する。

**2. RAG なしで固有情報を回答**

LLM が記憶だけで答えようとして**ハルシネーション頻発**。情報取得経路を作る。

**3. ツール利用に制限なし**

無限にツールを呼ぶ。**最大呼び出し回数**を設定する。

**4. バッチ処理を同期 API で**

数千件を同期で回すと、タイムアウト・レート制限に引っかかる。**Batch API**を使う。

### チェックリスト

- [ ] 自分のアプリのパターンを識別できる
- [ ] パターンの典型的な注意点を知っている
- [ ] 必要なら複数パターンを組み合わせる設計にしている
- [ ] 複雑なパターンに飛びつかず、シンプルから始めている

### まとめ

LLM アプリは**5 つの基本パターン**に大別できる。自分のアプリの型を理解すると、設計判断・デバッグ・最適化が速くなる。**シンプルな型から始めて、必要に応じて進化**させる。



## 関連エントリ

- [LLM の非決定性を前提に設計する](llm-の非決定性を前提に設計する.md)
- [AI エージェントと人間の責任分界](ai-エージェントと人間の責任分界.md)
- [AI プロダクトと倫理 — 7 つの観点](ai-プロダクトと倫理-7-つの観点.md)


<div class="dnk-prev-next" markdown>
  <div class="prev">← [ファインチューニング vs プロンプト — どちらを選ぶか](ファインチューニング-vs-プロンプト-どちらを選ぶか.md)</div>
  <div class="next">[技術選定の5軸評価フレームワーク](技術選定の5軸評価フレームワーク.md) →</div>
</div>
