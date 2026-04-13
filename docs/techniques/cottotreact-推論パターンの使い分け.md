---
tags:
  - reasoning
  - cot
  - react
  - prompt-technique
---

# CoT・ToT・ReAct — 推論パターンの使い分け

<div class="dnk-meta" markdown>
<span class="pill cat">Techniques</span>
<span class="pill">#reasoning</span>
<span class="pill">#cot</span>
<span class="pill">#react</span>
<span class="pill">#prompt-technique</span>
<span class="pill">updated 2026-04-13</span>
<span class="pill">5 min read</span>
</div>

LLM の推論能力を引き出すパターンとして、**Chain-of-Thought (CoT)**、**Tree-of-Thoughts (ToT)**、**ReAct** が筆者的。用途に応じて使い分ける。

### 3 つのパターンの位置づけ

```mermaid
flowchart TD
    P[推論パターン] --> C[Chain-of-Thought<br/>CoT]
    P --> T[Tree-of-Thoughts<br/>ToT]
    P --> R[ReAct]

    C --> C1[一直線の推論]
    T --> T1[複数経路を探索]
    R --> R1[推論 + 行動の交互]

    style C fill:#e8f5e9,stroke:#81c784
    style T fill:#fff9c4,stroke:#fff176
    style R fill:#e3f2fd,stroke:#64b5f6
```

### 1. Chain-of-Thought (CoT)

**何か**: 答えを出す前に、**推論の過程を書き出させる**手法。「ステップバイステップで考えて」が典型的な指示。

```mermaid
flowchart LR
    Q[質問] --> S1[ステップ1]
    S1 --> S2[ステップ2]
    S2 --> S3[ステップ3]
    S3 --> A[回答]
```

**指示例**:

    この問題を、段階的に考えて解いてください。
    1. 何が問われているかを明確にする
    2. 必要な情報を整理する
    3. 一歩ずつ計算する
    4. 最終回答を出す

**向いている用途**: 数学問題、論理推論、多段階の推理が必要なタスク

**欠点**: トークン消費が増える。単純なタスクでは過剰。

### 2. Tree-of-Thoughts (ToT)

**何か**: 複数の推論経路を並列に展開し、**途中で評価して選別**する手法。

```mermaid
flowchart TD
    Q[質問] --> A[アプローチ A]
    Q --> B[アプローチ B]
    Q --> C[アプローチ C]
    A --> A1[深化]
    B --> B1[深化]
    C --> C1[深化]
    A1 --> E{評価}
    B1 --> E
    C1 --> E
    E --> F[最良を選ぶ]

    style E fill:#fff3e0,stroke:#ffb74d
```

**実装**: 複数のアプローチを LLM に生成させ、別の LLM に評価させる、を反復する。

**向いている用途**: 創造的タスク、戦略立案、複数の正解があるタスク

**欠点**: CoT より更にコストが高い。単純化のために数経路に絞る。

### 3. ReAct (Reasoning + Acting)

**何か**: 推論（Thought）と行動（Action）を交互に繰り返す。ツール利用と相性が良い。

```mermaid
sequenceDiagram
    participant U as ユーザー
    participant L as LLM
    participant T as ツール

    U->>L: 質問
    L->>L: 推論 1: 検索が必要
    L->>T: Action: search("...")
    T-->>L: 結果
    L->>L: 推論 2: 結果から〇〇と判断
    L->>T: Action: calculate(...)
    T-->>L: 結果
    L->>L: 推論 3: 答えは〇〇
    L-->>U: 最終回答
```

**指示例**:

    以下の形式で答えてください:

    Thought: <次に何をすべきかの推論>
    Action: <実行するツール>
    Observation: <ツールの結果>
    Thought: <次の推論>
    ...
    Final Answer: <最終回答>

**向いている用途**: ツール利用が必要なタスク、外部情報を参照する調査、ReAct-style Agent

**欠点**: ツール設計に依存する。設計が悪いと無限ループする。

### 使い分けの目安

| タスク種別 | CoT | ToT | ReAct |
|-----------|-----|-----|-------|
| 数学・論理 | ◎ | ○ | △ |
| 創造的タスク | ○ | ◎ | △ |
| 調査・リサーチ | ○ | ○ | ◎ |
| ツール利用 | △ | △ | ◎ |
| 単純な分類 | △ | × | × |

### 実装のコツ

**1. デフォルトは CoT**

「まず CoT、足りなければ他へ」で多くのケースは足りる。シンプルさを優先。

**2. コストを意識する**

ToT や ReAct は CoT の数倍のコスト。**本当に必要か**を評価する。

**3. 推論を見せるか隠すか**

エンドユーザーには推論過程を隠すことが多い。ログや開発者には見せる。プロダクト設計で使い分ける。

**4. 推論だけ先に生成**

CoT の推論部分だけを先に生成し、それを別の呼び出しに渡して最終回答を作る**二段階設計**も有効。

### 落とし穴

- **CoT を過信**: CoT は万能ではない。単純タスクで過剰に使うとコストと時間が無駄
- **ReAct で無限ループ**: ツール呼び出しが終わらない。**最大ステップ数**を必ず設定
- **ToT で計算量爆発**: 経路数を制限せずに深くすると、コストが急増
- **推論を検証しない**: CoT の推論部分自体が間違っていることもある。出力だけでなく推論の妥当性も評価する

### まとめ

CoT・ToT・ReAct は**どれも強力だが得意分野が違う**。単純な推論は CoT、探索が必要なら ToT、ツール利用なら ReAct。**タスクに合わせて選ぶ**のが正解。



## 関連エントリ

- [Few-shot Examples の効果的な設計](few-shot-examples-の効果的な設計.md)
- [LLM から構造化 JSON を確実に取り出す](llm-から構造化-json-を確実に取り出す.md)
- [LLM コストを減らす 7 つの手法 (優先順位つき)](llm-コストを減らす-7-つの手法-優先順位つき.md)


<div class="dnk-prev-next" markdown>
  <div class="prev">← [Few-shot Examples の効果的な設計](few-shot-examples-の効果的な設計.md)</div>
  <div class="next">[LLM から構造化 JSON を確実に取り出す](llm-から構造化-json-を確実に取り出す.md) →</div>
</div>
