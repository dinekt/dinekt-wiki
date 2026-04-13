# 用語集

AI・LLM・エージェント開発に関わる用語を、基礎から固有概念まで収録しています。

## :material-brain: LLM 基礎

| 用語 | 説明 |
|------|------|
| LLM | Large Language Model（大規模言語モデル）。大量のテキストで学習された、自然言語を理解・生成できるニューラルネットワーク |
| トークン | LLM が文字を扱う最小単位。英語で約 4 文字、日本語で約 1〜2 文字に相当 |
| コンテキストウィンドウ | LLM が 1 回のリクエストで扱える最大トークン数。モデルによって異なる（数千〜数百万） |
| プロンプト | LLM に対する入力指示全体。システムプロンプト + ユーザー入力 + 履歴など |
| システムプロンプト | 会話全体の前提・役割・方針を指示する冒頭のテキスト |
| 推論（Inference） | 学習済みモデルに入力を渡して出力を得る処理 |
| ファインチューニング | 事前学習済みモデルを特定タスクのデータで追加学習させる手法 |
| 基盤モデル | 様々なタスクに応用できる汎用的な大規模モデル。GPT、Claude、Gemini 等 |

## :material-tune: サンプリングと出力制御

| 用語 | 説明 |
|------|------|
| Temperature | 出力のランダム性を制御するパラメータ。0 に近いほど決定的、1 以上で創造的 |
| Top-p (Nucleus Sampling) | 累積確率 p までのトークン候補から選ぶ手法。Temperature と併用される |
| Top-k | 確率が高い上位 k 個のトークン候補から選ぶ手法 |
| max_tokens | 生成する出力の最大トークン数。超えたら途中で切れる |
| Stop Sequences | 生成を止めるトリガーとなる文字列 |
| ストリーミング | 出力を 1 トークンずつ段階的に返す方式。SSE が一般的 |
| Zero-shot | 例を示さずに指示だけで回答させる手法 |
| Few-shot | いくつかの例（3〜5 件程度）を示して形式や挙動を学習させる手法 |

## :material-lightbulb: 推論パターン

| 用語 | 説明 |
|------|------|
| Chain-of-Thought (CoT) | 推論過程を段階的に書かせる手法。複雑な問題で精度が上がる |
| Tree-of-Thoughts (ToT) | 複数の推論経路を並列展開し、途中で評価して選別する手法 |
| ReAct | Reasoning + Acting。推論と行動（ツール利用）を交互に行うパターン |
| Self-consistency | 同じ問いに複数回答させ、多数決で決める手法 |

## :material-database: 外部知識とツール

| 用語 | 説明 |
|------|------|
| RAG | Retrieval-Augmented Generation。関連文書を検索してコンテキストに含めて回答させる手法 |
| Embedding | テキストを数値ベクトルに変換した表現。類似度検索に使う |
| Vector DB | Embedding を高速に検索できるデータベース。Pinecone、Weaviate、Qdrant 等 |
| Chunking | 長い文書を検索しやすい単位に分割する処理 |
| Tool Use / Function Calling | LLM に外部関数を呼び出させる機能。API 取得・計算・DB クエリ等を LLM 経由で実行できる |
| MCP | Model Context Protocol。LLM エージェントに外部ツールを接続する標準プロトコル |
| JSON Mode | LLM に JSON 形式で出力させる機能。プレーンテキストより構造化されたデータを扱いやすい |

## :material-robot: エージェント

| 用語 | 説明 |
|------|------|
| AI エージェント | 目的達成のために複数ステップの行動・判断を行う LLM ベースのシステム |
| Autonomous Agent | ユーザーの介入なしに自律的に動くエージェント |
| マルチエージェント | 複数の専門化されたエージェントが協調して動くアーキテクチャ |
| Orchestrator | 複数エージェントを統括し、タスクを振り分ける役割 |
| Critic / Reviewer | 実装者エージェントとは別の視点からレビューする役割 |
| Subagent | メインエージェントから呼び出される専門エージェント |
| Hook | 特定のイベント（ツール実行前後等）で自動起動する処理 |
| Checkpointing | エージェントの中間状態を保存し、死亡時に復帰可能にする仕組み |

## :material-alert: 失敗と品質

| 用語 | 説明 |
|------|------|
| ハルシネーション | LLM が事実に基づかない内容を自信を持って生成する現象 |
| Drift | エージェントの動作が、当初の意図や仕様から徐々に乖離する現象 |
| プロンプトインジェクション | ユーザー入力や外部データに仕込まれた悪意ある指示で LLM を操る攻撃 |
| Jailbreak | LLM の安全機構を回避して禁止された出力を引き出す試み |
| Self-Review Blindness | 同一モデルが自己レビューした際、バイアスで自分の問題を見逃す現象 |
| Context Compression Amnesia | コンテキスト圧縮で過去の重要決定を忘れる現象 |
| Token Waste | 無意味な操作・繰り返しで LLM のトークンを浪費する現象 |

## :material-check-circle: 評価と運用

| 用語 | 説明 |
|------|------|
| Eval / Evaluation | LLM 出力の品質を測定する一連の仕組み |
| Eval Set | 評価用の入力ケース集。本番運用の前後で回して品質を定量化 |
| EDD | Eval-Driven Development。評価セットを先に作り、合格を目指して実装する開発手法 |
| LLM-as-Judge | 別の LLM を評価者として使い、出力品質を自動採点する手法 |
| Rubric | 評価の基準表。軸ごとに定義と満点基準を明示する |
| Golden Test | 期待される入出力を固定値として記録したテスト |
| Red Teaming | 意図的に攻撃を試みて安全性を検証する工程 |
| Regression | 変更により以前動いていた機能が壊れること |

## :material-flash: 最適化

| 用語 | 説明 |
|------|------|
| プロンプトキャッシュ | 同じ先頭プロンプトを再利用してレイテンシ・コストを下げる仕組み |
| Batch API | 複数のリクエストをまとめて非同期で処理する API。50% 程度安い |
| Rate Limit | API の単位時間あたりリクエスト/トークン数の上限 |
| Backoff | エラー時に待機時間を指数的に増やしながらリトライする戦略 |
| Token Bucket | リクエスト数を一定ペースに保つレート制御アルゴリズム |
| 冪等性 (Idempotency) | 同じ操作を何度実行しても結果が変わらない性質 |

## :material-shield: セキュリティ

| 用語 | 説明 |
|------|------|
| API キー | プロバイダーに認証するための秘密鍵。漏洩すると不正利用される |
| Secret Scanning | リポジトリに誤コミットされた秘密情報を検出する仕組み |
| Rotation | 定期的に API キーを新しいものに切り替える運用 |
| Guardrails | LLM の出力・動作に対する安全制御機構 |
| PII | Personally Identifiable Information。個人を特定できる情報 |
| Output Filtering | LLM の出力から不適切・機密情報を検出・除去する処理 |

## :material-microsoft-visual-studio-code: Claude Code 関連

| 用語 | 説明 |
|------|------|
| Claude Code | Anthropic の CLI/IDE 統合エージェント開発環境 |
| CLAUDE.md | プロジェクト単位で Claude Code に常時参照させるシステムプロンプトファイル |
| settings.json | Claude Code の権限・hooks・環境変数・MCP を管理する設定ファイル |
| Slash Command | `/` で始まる専用コマンド。一部はスキル起動の別表記 |
| Skill | 特定用途に特化した組み込み機能（/loop, /schedule 等） |

## :material-file-document: ドキュメント体系

| 用語 | 説明 |
|------|------|
| ADR | Architecture Decision Record。アーキテクチャ上の意思決定とその根拠を残す形式 |
| README | プロジェクトの概要・使い方を示すドキュメント |
| CHANGELOG | 変更履歴を時系列で記録する文書 |
| MEMORY.md | エージェントがセッションをまたいで記憶すべき内容を書き出す外部ファイル |

## :material-cog: Dinekt 固有概念

| 用語 | 説明 |
|------|------|
| forge | Dinekt が設計した Claude Code 向けハーネス設計フレームワーク |
| intent-graph | 意図を構造化した YAML 形式の中間表現。凍結することで drift を検出できる |
| drift-detection | 実装が凍結された intent-graph から乖離する現象を検出する機構 |
| Phase 1〜5 | forge.md の実行フェーズ。1=ヒアリング、2=選好蒸留、3=設計、4=二役自己レビュー、5=改善 |
| dinekt-query | knowledge.db を全文検索する CLI |
| Knowledge Wiki パイプライン | SQLite に蓄積したナレッジを MkDocs 静的サイトとして自動公開する仕組み |

## :material-web: プロトコル / 技術

| 用語 | 説明 |
|------|------|
| SSE | Server-Sent Events。サーバーから一方向にデータをストリーミング送信する仕様 |
| WebSocket | クライアントとサーバー間で双方向通信を行うプロトコル |
| REST API | HTTP ベースのリソース指向 API スタイル |
| Webhook | 特定イベント発生時に外部サーバーに HTTP POST で通知する仕組み |
| FTS5 | SQLite の全文検索エンジン |
| trigram tokenizer | 3 文字単位で分割するトークナイザ。日本語のような分かち書きのない言語に有効 |
