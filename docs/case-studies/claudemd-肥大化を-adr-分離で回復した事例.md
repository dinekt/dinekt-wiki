---
tags:
  - claude-code
  - context
  - adr
---

# CLAUDE.md 肥大化を ADR 分離で回復した事例

<div class="dnk-meta" markdown>
<span class="pill cat">Case Studies</span>
<span class="pill">#claude-code</span>
<span class="pill">#context</span>
<span class="pill">#adr</span>
<span class="pill">updated 2026-04-13</span>
</div>

Claude Code のシステムプロンプト（CLAUDE.md）が肥大化して指示遵守率が下がった状況を、ADR パターンの導入で回復させたケース。

### 発生した事象

プロジェクトが成長するにつれ、CLAUDE.md にルール・履歴・判断基準・コーディング規約を次々と追記していった結果、**116 行**に達した。この時点で以下の症状が現れた。

- 新しい指示を書いても、過去の行数の長い指示に埋もれて無視されやすい
- 後半の指示ほど遵守率が下がる
- 「前に決めたはずの方針」が次セッションで守られない

### 採った対策

CLAUDE.md を「索引」に徹させ、個別の意思決定は ADR（Architecture Decision Record）として外出しした。

    docs/decisions/
      001-xxxx.md
      002-xxxx.md
      003-xxxx.md
    CLAUDE.md  ← 索引のみ。ADR の存在を示すだけ

作業開始時に関連 ADR だけを読むようにすることで、コンテキスト消費を抑えつつ過去の判断を参照できる。

### 結果

- CLAUDE.md は **69 行**まで縮小（約 40% 削減）
- 指示遵守率が体感で向上
- 過去の判断を後から追跡できるようになった
- セッションが変わっても同じ判断基準で動けるようになった

### 学び

- **システムプロンプトは「索引」、判断根拠は「参照先」**という分離が効く
- ファイルを増やしてコンテキストを減らすのは一見逆だが、LLM にとっては「必要なときだけ読む」方が扱いやすい
- CLAUDE.md の行数には実質的な上限（150 命令前後）がある。超えたら分離を検討する合図

### 関連

- ADR の運用パターンは Tools カテゴリで詳しく扱う



## 関連エントリ

- [ADR 参照コマンドによる意思決定の継承](../tools/adr-参照コマンドによる意思決定の継承.md)
- [LLM エージェントに push 通知チャネルを組み込む際の落とし穴](llm-エージェントに-push-通知チャネルを組み込む際の落とし穴.md)
- [forge — ハーネス設計フレームワーク](../tools/forge-ハーネス設計フレームワーク.md)
