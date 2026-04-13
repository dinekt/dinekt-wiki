<div class="dnk-hero" markdown>

# Dinekt Knowledge Wiki

<p class="dnk-hero-tagline">Dinekt が Claude Code を用いた AI 開発・エージェント設計の過程で得た、再利用可能な知見を公開するナレッジベース。</p>

<div class="dnk-hero-meta">
  <span>:material-database-outline: 6 entries</span>
  <span>:material-tag-multiple-outline: 1 categories</span>
  <span>:material-update: 自動生成</span>
</div>

</div>

## ピックアップ

<div class="grid cards" markdown>

-   :material-lightbulb-on-outline: __[LLM エージェントに push 通知チャネルを組み込む際の落とし穴](lesson/llm-エージェントに-push-通知チャネルを組み込む際の落とし穴.md)__

    ---

    Claude Code 等の対話型 LLM エージェントに Telegram などの外部チャネルを連携する際、MCP サーバーの設定だけでは不十分という教訓。 観察された問題  受信が無音で止まる: 送信は正常だが受信だ…

-   :material-lightbulb-on-outline: __[エージェント運用の15失敗モードと対策マップ](lesson/エージェント運用の15失敗モードと対策マップ.md)__

    ---

    単一エージェント運用の典型的な 7 アンチパターンと、マルチエージェント運用で頻出する 8 失敗モードに対する、実装可能な対策の対応表。個別の解説は各エントリを参照。 単一エージェント運用    アンチパターン  筆者的…

-   :material-lightbulb-on-outline: __[意図の比喩/リテラル解釈が実装を狂わせる — 二役レビューで救われた事例](lesson/意図の比喩リテラル解釈が実装を狂わせる-二役レビューで救われた事例.md)__

    ---

    ユーザの指示に含まれる比喩的な語彙を、実装者（LLM）がリテラルに解釈することで発生する仕様 drift と、それを検出・巻き戻す仕組みの実証例。 発生した事象 設計セッションで、ユーザが「データベーステーブル」という語…

</div>

## カテゴリ別

### :material-lightbulb-on-outline: Lesson

_実体験から得た学び・失敗と対策_ — **6 entries**

<div class="grid cards" markdown>

-   __[LLM エージェントに push 通知チャネルを組み込む際の落とし穴](lesson/llm-エージェントに-push-通知チャネルを組み込む際の落とし穴.md)__

    ---

    Claude Code 等の対話型 LLM エージェントに Telegram などの外部チャネルを連携する際、MCP サーバーの設定だけでは不十分という教訓。 観察された問題  受…

-   __[エージェント運用の15失敗モードと対策マップ](lesson/エージェント運用の15失敗モードと対策マップ.md)__

    ---

    単一エージェント運用の典型的な 7 アンチパターンと、マルチエージェント運用で頻出する 8 失敗モードに対する、実装可能な対策の対応表。個別の解説は各エントリを参照。 単一エージェ…

-   __[マルチエージェントの8つの失敗モード](lesson/マルチエージェントの8つの失敗モード.md)__

    ---

    1. Context Compression Amnesia コンテキスト圧縮時にエージェントが重要な知識を忘れる。  症状: 前のターンで決めた方針を圧縮後に覆す  対策: ME…

-   __[マルチエージェント組織の4つの設計教訓](lesson/マルチエージェント組織の4つの設計教訓.md)__

    ---

    AI エージェントを複数ロールで運用する際に得た設計上の教訓。 1. レビュー役は「対等な同僚」の口調で 上から目線でも卑屈でもなく、忌憚なく指摘する同僚のトーンを指示する。同調バ…

-   __[単一エージェントの7つのアンチパターン](lesson/単一エージェントの7つのアンチパターン.md)__

    ---

    1. CLAUDE.mdを200行以上書く 指示予算（実質100〜150命令）を超えると指示無視が発生する。  対策: 30〜60行に収める。詳細はADR（docs/decisio…

-   __[意図の比喩/リテラル解釈が実装を狂わせる — 二役レビューで救われた事例](lesson/意図の比喩リテラル解釈が実装を狂わせる-二役レビューで救われた事例.md)__

    ---

    ユーザの指示に含まれる比喩的な語彙を、実装者（LLM）がリテラルに解釈することで発生する仕様 drift と、それを検出・巻き戻す仕組みの実証例。 発生した事象 設計セッションで、…

</div>

---

## 関連リンク

- :material-book-open-variant: [用語集](glossary.md)
- :material-web: [Dinekt 公式サイト](https://dinekt.com)
- :simple-zenn: [Zenn](https://zenn.dev/dinekt)
