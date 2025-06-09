# 宗像・福津習い事ナビ

宗像市・福津市で開催されている様々な習い事・教室・サークル活動の情報を集約したウェブサイトです。

## 概要

このウェブサイトは、宗像市と福津市の習い事情報を一元化し、市民の皆様が簡単に情報を見つけられるようにすることを目的としています。サイトには以下の機能があります：

- 習い事情報の閲覧（エリア、カテゴリー、年齢層でフィルタリング可能）
- 掲載申請フォーム（Google Formへのリンク）
- お問い合わせフォーム
- 地域情報の紹介

## ファイル構成

- `index.html` - トップページ（習い事一覧、フィルター機能）
- `about.html` - サイトについての説明ページ
- `contact.html` - お問い合わせページ
- `privacy.html` - プライバシーポリシーページ
- `styles.css` - スタイルシート
- `script.js` - JavaScriptファイル（データと機能）

## 使い方

1. このウェブサイトはHTMLとCSSとJavaScriptで構成されており、特別なサーバー環境は必要ありません。
2. ファイルをWebサーバーにアップロードするだけで公開できます。
3. ローカルで確認する場合は、`index.html`をブラウザで開いてください。

## カスタマイズ方法

### 習い事データの追加・変更

`script.js`ファイル内の`activities`配列を編集することで、表示される習い事情報を変更できます。各項目には以下の情報を設定します：

```javascript
{
    id: ユニークID（数値）,
    name: "習い事の名前",
    category: "カテゴリー（sports, music, art, study, culture, other）",
    area: "エリア（munakata または fukutsu）",
    ageGroup: ["対象年齢（kids, teens, adults, seniors）"],
    description: "説明文",
    location: "開催場所",
    schedule: "開催日時",
    contact: "連絡先",
    email: "メールアドレス",
    image: "画像URL"
}
```

### Google Formの設定

1. 掲載申請用のGoogle Formを作成します。
2. `script.js`ファイル内の以下の行を編集して、実際のGoogle FormのURLに変更します：
   ```javascript
   document.getElementById('registration-button').href = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform";
   ```

## デプロイ方法

### Netlifyを使用する場合

1. GitHubなどのリポジトリにコードをプッシュします。
2. Netlifyにログインし、「New site from Git」を選択します。
3. リポジトリを連携し、デプロイ設定を行います。
4. デプロイが完了すると、URLが発行されます。

### レンタルサーバーを使用する場合

1. FTPクライアントなどを使用して、すべてのファイルをサーバーにアップロードします。
2. ドメインの設定を行います。

## 今後の改善点

- バックエンド連携による動的なデータ管理
- 地図表示機能の追加
- ユーザーレビュー機能の追加
- 検索機能の強化

## ライセンス

このプロジェクトは個人利用のために作成されました。
