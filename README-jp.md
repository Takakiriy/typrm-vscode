# typrm 拡張機能

Visual Studio Code 用 typrm 拡張機能。

## 機能

[typrm](https://github.com/Takakiriy/typrm/) は自分がよく参照するドキュメントや自分が使いやすいスニペットが書かれたテキスト形式のファイルを検索して表示します。また、コマンドのパラメーターを現在の状況に合わせて置き換えることができ、コピー＆ペーストするだけでコマンドを実行できるようになります。

![typrm](https://raw.githubusercontent.com/Takakiriy/typrm/master/example/figure_1.png)

## Search Tag Paste コマンド

`typrm: Paste Search Tag` コマンドは、クリップボードに入っている `#keyword:` タグを `#search:` タグに置き換えて貼り付けます。

### サンプル

もし、以下のテキストをコピーしたら、

        Example: #keyword: typrm Example

`typrm: Paste Search Tag` コマンドは以下のテキストを貼り付けます。

        Example: #search: typrm Example

推奨するキーの割り当ては、`Shift + Ctrl + V` です.

## 開発

./specifications.yaml ファイルを参照。

## リリースノート

### 0.0.2

search tag paste コマンドに、/home/____/ を ~ に置き換える機能を追加。

### 0.0.1

最初のリリース。search tag paste コマンド。
