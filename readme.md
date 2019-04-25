# Google Apps Script LibraryのTypeScript用 typeファイル

## 概要

GASをClasp環境で作成する場合に、GASのライブラリを使うと自動補完が効きません。

そこで、自動補完用のtypeファイルを作成しました。

typeファイルをダウンロードしたうえで適切な場所（私の環境だとプロジェクト配下の@typesフォルダ）に配置すると、自動補完が効くようになります。


## 注意点

- TypeScript、JavaScriptともに、よくわからないままテキトーに作っている
- （特にOAuth2について）使っていないメソッドはテキトーに作っている

ため、型情報が正しくない可能性が非常に高いです。

また、今のところ「clasp push」によるトランスパイルでは不具合は出ていませんが、tscを使ったトランスパイルはしていないのでうまく動くかはわかりません。


## お願い

- 不具合を発見した
- 他のライブラリについてtypeファイルを作成した

などあれば、pull requestを送って頂けるとありがたいです。


特に、下記のライブラリのtypeファイルがあれば、ありがたいです。

```

"dependencies": {
    "libraries": [{
      "userSymbol": "Moment",
      "libraryId": "15hgNOjKHUG4UtyZl9clqBbl23sDvWMS8pfDJOyIapZk5RBqwL3i-rlCo",
      "version": "9"
    }, {
      "userSymbol": "parser",
      "libraryId": "1Jrnqmfa6dNvBTzIgTeilzdo6zk0aUUhcXwLlQEbtkhaRR-fi5eAf4tBJ",
      "version": "5"
    }, {
      "userSymbol": "SlackApp",
      "libraryId": "1on93YOYfSmV92R5q59NpKmsyWIQD8qnoLYk-gkQBI92C58SPyA2x1-bq",
      "version": "22"
    }, {
      "userSymbol": "Underscore",
      "libraryId": "1PcEHcGVC1njZd8SfXtmgQk19djwVd2GrrW1gd7U5hNk033tzi6IUvIAV",
      "version": "2"
    }, {
      "userSymbol": "NCMB",
      "libraryId": "1yWnb7GfYsBCR-MZvi6r-TOYv_y-AV4le5P7kaG5B3iZ5VNnSk9Q55pSJ",
      "version": "29"
    }, {
      "userSymbol": "ChatWorkClient",
      "libraryId": "1nf253qsOnZ-RcdcFu1Y2v4pGwTuuDxN5EbuvKEZprBWg764tjwA5fLav",
      "version": "18"
    }, {
      "userSymbol": "GSApp",
      "libraryId": "1wkfv_Mm0IyruEZyPZsrctcSmc1T9y0-bArl2gIzMd6RVYJAwWeJ5gpDu",
      "version": "8"
    }]
```
