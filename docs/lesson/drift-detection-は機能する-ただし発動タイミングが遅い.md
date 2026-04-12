# drift-detection は機能する — ただし発動タイミングが遅い

**カテゴリ**: lesson  
**タグ**: forge,drift-detection,meta,2026-04-10  
**登録日**: 2026-04-10 14:59:10  

---

2026-04-10 forge v1.2 の Phase 4 Round 2 批判者視点が、Phase 3 で発生した意図解釈の drift（代表の『データベーステーブル』を比喩と解釈してディレクトリ分離型を選択）を検出した。代表に確認した結果、本当に SQLite を想定していたことが判明し、Phase 1 巻き戻し → 候補 B 採用で救済された。

学び:
1. forge v1.2 の二役自己レビューは機能する。ただしより早期（Phase 1.2）で確認できればコストが安い
2. 実装者は『今日完了可能性』を過剰に重視し、代表の真の意図から乖離するバイアスを持つ
3. 代表がメタファー的な語（『データベーステーブル』『フォルダ』『箱』）を使った場合、リテラル解釈か比喩かを確認する質問テンプレートが必要 → forge v1.3 への学び

なぜ重要: 構造的批判（P4: 別軸評価）が機能した実証例。intent_graph 凍結 → 下流判断 → drift-detection → 巻き戻しのループは、組織再構築のような大規模意思決定で実際に救われる

---

## 先行概念チェック

**判定**: 🔀 部分的に新規  
**独自性スコア**: 65/100  
**検証日**: 2026-04-12T15:47:52+00:00  

### 先行概念の概要

drift detection はAI分野で認知された概念。ARMO、Adopt AI、designative.info 等が intent drift や specification drift を解説。ただし「凍結された intent-graph からの drift を Phase 4 の二役レビューで検出し Phase 1 に巻き戻す」という具体的パターンは先行なし。

### この概念の独自部分

forge v1.2 の実装に基づく具体的な drift 検出→巻き戻しループの実証事例。intent-graph 凍結という仕組みと、drift の発動タイミングが遅いという実務的教訓の組み合わせが独自。

### 参考ソース

- https://www.armosec.io/blog/detecting-intent-drift-in-ai-agents-with-runtime-behavioral-data/
- https://www.designative.info/2026/03/08/preventing-agent-drift-designing-ai-systems-that-stay-aligned-with-human-intent/
- https://www.adopt.ai/glossary/agent-drift-detection
