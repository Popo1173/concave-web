

# scss install
```
npm install sass
```
公式：[https://nextjs.org/docs/basic-features/built-in-css-support#sass-support](https://nextjs.org/docs/basic-features/built-in-css-support#sass-support) 

# reset.css 
modern-css-resetをaddする  
```
yarn add modern-css-reset
```
_app.jsに、以下を追記  
```
import 'modern-css-reset/dist/reset.min.css' 
```

# CSS 書き方

## CSS in JS

### styled-jsx
Next.jsではデフォルトでstyled-jsxがデフォルトでロードされていて、no configで実装が開始できます。  
```
export default () => (
  <div>
    Welcome to next.js!
    <style jsx>{`
      div {
        background: red;
      }
    `}</style>
  </div>
);
```

### component内にスタイルを描く
```
.heading {
  color: green;
}

export default function Home() {
  return (
    <div>
      <h1 className="heading">Hello Next.js</h1>
    </div>
  );
}
```

### module.cssファイルによりCSSの適用   
XXXX.module.cssファイルはコンポーネントでimportを行う。  
```
import styles from “../styles/Home.module.css”; 

    export default function Home() { 
        return ( <div> <h1 className={styles.heading}>Hello Next.js</h1> </div> ); 
        }
```

## globals.scss
next.jsのインストール時から存在する、pagesディレクトリの下にある「_app.js」ファイルの中でimportが行われています。  
[_app.js]
```
//これでgloabal.scss読み込み
//変数とか使えない。。。
import '../styles/globals.s
````

### 変数をまとめた.scssを作り各modul.scssで読み込む
variables.scss作る  
mixinで各変数を定義  
```
[variables.scss]
$pc: 1024px; // PC
$sp: 768px;  // スマホ

$breakpoints: (
  'pc': 'screen and (max-width: #{$pc})',
  'sp': 'screen and (max-width: #{$sp})'
);

@mixin mq($size) {
    @media #{map-get($breakpoints, $size)} {
      @content;
    }
  }
```
読み込む
```
[xxx.module.scss]
// インポート
@import 'variables';

    .logo {
        max-width: 200px;
        width: 100%;
        @include mq(sp) {
            width: 100%;
            max-width: 100px !important;
        }
    }  
```

インポートは相対パスで書くのは手間のため、  
next.config.jsのsassOptionsをいじって対応。以下のようにstylesディレクトリをincludePathsに追加する。
```
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  experimental: {
    optimizeFonts: true,
  }
};
```




## layout.js
すべてのページで共有されるレイアウトコンポーネント
内部にcomponents、layout.js次の内容で呼び出されるファイルを作成します。
  
書き方1  
```
import Header from './Header'

 const layoutStyle = {
     margin: 20,
     padding: 20,
     border: '1px solid #DDD'
   }

const Layout = (props) => (
    <>
      <Header />
      <section>
      //親からデータを引き継ぐ
      {props.children}
        </section>
      
    </>
  )
  
  export default Layout
```
書き方2
```
import Head from 'next/head';
import Header from './Header';
import Image from 'next/image';
import Link from 'next/link';

//関数コンポーネント<Layout></Layout>で挟んだ部分がchildrenの部分に入るから、ページがレイアウトでラッピングされる。
export default function Layout({ children, home }) {
    return (
        <>
        <Head>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        //home ? () : ()  条件分岐で「A」がtrueの場合
        //<Layout home>がある場合がtrue　→　 <h1>dddd</h1>
        //<Layout home>がばい場合がfalse　→　 <h2>ssss</h2>
        {home ? (
            <h1>dddd</h1>

        ) : (

            <h2>sss</h2>

        )}
        //<Layout></Layout>の中身を受け取る
        <div>{children}</div>
        </>
    )
}
````






## バーガー
[参考](https://qiita.com/kohei_abe/items/1dec093fc8ed41eee5a7)


## 画像
静的に読み込む場合は、
public 
└ 画像.png  
publicを省略できる. 
```
<Image src="画像.png" alt="Picture of the author" width={1850} height={670} />
```

## memo
_app.jsに全て共通で利用する物を入れる

