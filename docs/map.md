# ナレッジマップ

本 Wiki に含まれる主要な概念・手法・パターンの関係を俯瞰する。

## 全体像

```mermaid
flowchart TD
    subgraph Concepts
        C1[非決定性]
        C2[コンテキスト]
        C3[Intent Engineering]
        C4[Drift Detection]
        C5[自律度レベル]
        C6[責任分界]
        C7[EDD]
        C8[Injection]
        C9[技術選定]
        C10[AI プロダクト設計]
    end

    subgraph Techniques
        T1[Few-shot]
        T2[CoT/ToT/ReAct]
        T3[JSON 化]
        T4[プロンプトキャッシュ]
        T5[プロンプト版管理]
        T6[コスト最適化]
        T7[ツールスキーマ]
        T8[デバッグ手順]
        T9[ハルシ抑制]
        T10[メモリ設計]
        T11[ヒアリング]
        T12[二役レビュー]
    end

    subgraph Patterns
        P1[単一7]
        P2[マルチ8]
        P3[ツール失敗]
        P4[長出力]
        P5[長時間セッション]
        P6[評価セット失敗]
    end

    C1 --> T9
    C1 --> T1
    C2 --> T4
    C2 --> T10
    C2 --> P5
    C3 --> T11
    C3 --> C4
    C4 --> T12
    C5 --> C6
    C7 --> P6
    C7 --> T9
    C8 --> T7

    T1 --> T3
    T2 --> T7
    T4 --> T6
    T7 --> P3
    T9 --> T4
    T11 --> T12

```

## プロンプト設計の流れ

```mermaid
flowchart LR
    I[ユーザー要求] --> H[ヒアリング<br/>意図抽出]
    H --> F[Few-shot 設計]
    F --> R[推論パターン選択<br/>CoT/ReAct等]
    R --> S[構造化出力<br/>JSON Mode]
    S --> C[プロンプトキャッシュ<br/>を考慮した配置]
    C --> V[バージョン管理]
    V --> E[評価セットで検証]
    E --> D[本番デプロイ]

```

## トラブル対応の流れ

```mermaid
flowchart TD
    T[問題発生] --> I{どれに該当?}
    I -->|品質| Q[品質問題]
    I -->|コスト| C[コスト問題]
    I -->|失敗| F[失敗問題]

    Q --> Q1[ハルシネーション抑制]
    Q --> Q2[評価セット改善]
    Q --> Q3[プロンプトデバッグ]

    C --> C1[コスト最適化 7 手法]
    C --> C2[プロンプトキャッシュ]
    C --> C3[モデル使い分け]

    F --> F1[ツール失敗モード]
    F --> F2[レート制限対応]
    F --> F3[エラー復帰]

```

## カテゴリ別索引

- [Concepts](concepts/index.md) — 考え方の土台
- [Techniques](techniques/index.md) — 具体的な手法
- [Patterns](patterns/index.md) — 失敗と再発防止
- [Case Studies](case-studies/index.md) — 実体験
- [Tools](tools/index.md) — 道具と実装
- [Tech Notes](tech-notes/index.md) — 小さな知見

## このページの使い方

- **初めて読む方**: まず「全体像」で位置関係を眺めてから、気になったカテゴリに深入り
- **特定の問題がある方**: 「トラブル対応の流れ」で該当する問題を見つけてジャンプ
- **プロンプト改善したい方**: 「プロンプト設計の流れ」を順に読む
