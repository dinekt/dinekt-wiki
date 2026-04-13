---
tags:
  - mcp
  - integration
  - push-notification
  - claude-code
---

# LLM エージェントに push 通知チャネルを組み込む際の落とし穴

<div class="dnk-meta" markdown>
<span class="pill cat">Case Studies</span>
<span class="pill">#mcp</span>
<span class="pill">#integration</span>
<span class="pill">#push-notification</span>
<span class="pill">#claude-code</span>
<span class="pill">updated 2026-04-13</span>
<span class="pill">1 min read</span>
</div>

Claude Code 等の対話型 LLM エージェントに Telegram などの外部チャネルを連携する際、MCP サーバーの設定だけでは不十分という教訓。

### 観察された問題

- **受信が無音で止まる**: 送信は正常だが受信だけ止まる現象。長時間セッション中に、ポーリング型ボット（grammy 等）がメッセージを消費する一方で、本体プロセスへの stdio 配信が詰まるケースがある。セッション再起動が最短の回復手段。
- **キープアライブでは解決しない**: Cron で定期的にセッションを起こしても、stdio パイプの詰まりはアイドルが原因ではないので直らない。
- **MCP 定義だけでは割り込みが発生しない**: `.mcp.json` でツールを登録しても、リアルタイム push 通知にはチャネル登録（harness ごとの別フラグ）が必要。2層の設定が必要と理解しないと同じ問題を繰り返す。

### 学び

- 双方向チャネルは「送信経路」と「受信経路」を別々に検証する
- アイドル対策とパイプ詰まり対策は別問題として扱う
- MCP のツール登録と push 購読は設定レイヤが違うことを前提にする
- チャネル変更で再起動する前に、セッションログを外部ファイルに残すルールを決めておく（記憶消失による議論のやり直しを防ぐ）



## 関連エントリ

- [CLAUDE.md 肥大化を ADR 分離で回復した事例](claudemd-肥大化を-adr-分離で回復した事例.md)
- [Claude Code を使った効率的な不具合調査](claude-code-を使った効率的な不具合調査.md)
- [LLM エージェントに大規模リファクタリングを安全に任せる手順](llm-エージェントに大規模リファクタリングを安全に任せる手順.md)


<div class="dnk-prev-next" markdown>
  <div class="prev">← [評価駆動で LLM 機能をゼロから作った 5 日間の流れ](評価駆動で-llm-機能をゼロから作った-5-日間の流れ.md)</div>
  <div class="next">[LLM エージェントに大規模リファクタリングを安全に任せる手順](llm-エージェントに大規模リファクタリングを安全に任せる手順.md) →</div>
</div>
