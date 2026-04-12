# Dinektの対策マトリクス

**カテゴリ**: lesson  
**登録日**: 2026-04-10 14:39:31  

---

| # | パターン | 対策状況 |
|---|---------|---------|
| 単1 | CLAUDE.md肥大化 | ✅ ADRで69行に |
| 単2 | 否定表現 | △ 一部残存 |
| 単3 | タイムスタンプ | ✅ CLAUDE.mdに日時なし |
| 単4 | MCP過多 | ✅ 6本（上限内） |
| 単5 | チェックポイントなし | ✅ 対策追加 |
| 単6 | フラットTODO | ✅ フェーズ分離済み |
| 単7 | 自己レビュー | ✅ 批判者エージェント |
| マ1 | Context Amnesia | △ MEMORY.md+ADRで補完 |
| マ2 | Self-Review Blindness | ✅ 批判者 |
| マ3 | Mid-Task Failure | ✅ 対策追加 |
| マ4 | File Conflicts | ✅ 対策追加 |
| マ5 | Flat Tasks | ✅ フェーズ分離 |
| マ6 | Cross-Session Memory | ✅ MEMORY.md |
| マ7 | Knowledge Death | ✅ ADR |
| マ8 | Token Waste | ✅ 15分制限 |

---

## 先行概念チェック

**判定**: 🔀 部分的に新規  
**独自性スコア**: 55/100  
**検証日**: 2026-04-12T15:47:52+00:00  

### 先行概念の概要

エージェント失敗モードへの対策パターン自体は多くの記事で論じられているが、単一+マルチの両方を統合した「対策マトリクス」形式は少ない。

### この概念の独自部分

単一エージェント7パターンとマルチエージェント8パターンを横断して対策を対応付けた一覧表形式は独自。ただし個々の対策自体は先行知見と重複が多い。

### 参考ソース

- https://cogentinfo.com/resources/when-ai-agents-collide-multi-agent-orchestration-failure-playbook-for-2026
- https://www.mindstudio.ai/blog/ai-agent-failure-pattern-recognition
