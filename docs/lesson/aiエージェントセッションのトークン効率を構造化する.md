---
tags:
  - ai-agent
  - token-efficiency
  - model-routing
  - architecture
---

# AIエージェントセッションのトークン効率を構造化する

<div class="dnk-meta" markdown>
<span class="pill cat">Lesson</span>
<span class="pill">#ai-agent</span>
<span class="pill">#token-efficiency</span>
<span class="pill">#model-routing</span>
<span class="pill">#architecture</span>
<span class="pill">updated 2026-04-14</span>
<span class="pill">2 min read</span>
</div>

AIエージェント（Claude Code等）を使った開発で週次トークン上限に早期到達する場合、原因は『最高性能モデルでルーチン作業を実行』『同じファイルを複数回フルRead』『サブエージェントの完成原稿を主コンテキストに丸ごと注入』『デバッグ往復で会話履歴肥大』の組み合わせであることが多い。これは個人の意識ではなく、ルールベースの構造で抑制する必要がある。

## なぜ重要か

2026年4月のセッションで週次トークン上限に早期到達した。CLAUDE.mdに『Sonnet主体、Opusは深い推論時のみ』と書いてあったが守られていなかった。1ファイル600行のCSSを複数回フルRead、テックニュースエージェントの完成原稿（数千トークン）を主コンテキストに丸ごと受領、Mermaidデバッグの5往復で履歴肥大、などが重なった。

人間の意識（ドキュメントを読んで覚える）に頼ると守れない。3層構造で強制する必要がある。

## 3層強制アーキテクチャ

### 第1層: メモリ自動ロード

セッション開始時に必ずロードされる場所（CLAUDE Code でいう MEMORY.md）にトークン効率ルールを置く。会話開始時に文字どおり目に入るので無視できない。

### 第2層: ルールファイル

~/.claude/rules/performance.md のような恒常的なルールファイルに、判断基準を表形式で明記する。あいまいな指針ではなく『200行超は offset/limit 必須』『3クエリ以上は Explore 委譲』等の閾値で書く。

### 第3層: 強制停止条件

『同じ root cause を3往復で潰せなかったら立ち止まる』『Opus×ルーチン3連続でモデル切替を進言』など、自動的に発動する停止条件を入れる。意識的判断を必要としない構造。

## 具体的な閾値

| 場面 | ルール |
|------|--------|
| Read | 200行超は offset/limit 必須、同一ファイル2回禁止 |
| 検索 | 3クエリ以上見込まれたら Explore サブエージェント |
| 長文生成 | 500行超はサブエージェントに Write させパス受領 |
| デバッグ | 同 root cause 3往復で停止、観察コマンド要請 |
| モデル | Opus×ルーチン3連続で次セッション Sonnet 進言 |

## 関連する反パターン

- 『気をつけます』レベルの抽象的な意識ベース対策
- ルールを書いて満足し、判断時に参照しない
- 上限到達してから慌てて短期対処


## 関連エントリ

- [フレームワーク既定値は最後の手段として触る](フレームワーク既定値は最後の手段として触る.md)
- [LLM アプリの 5 つの典型アーキテクチャパターン](../concepts/llm-アプリの-5-つの典型アーキテクチャパターン.md)
- [観察を先に、修正は後に — ランタイム挙動デバッグの鉄則](観察を先に修正は後に-ランタイム挙動デバッグの鉄則.md)


<div class="dnk-prev-next">
  <a class="next" href="../フレームワーク既定値は最後の手段として触る/"><span class="dnk-pn-title">フレームワーク既定値は最後の手段として触る</span><span class="dnk-pn-arrow">→</span></a>
</div>
