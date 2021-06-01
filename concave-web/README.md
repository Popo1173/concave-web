

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

## バーガー
[参考](https://qiita.com/kohei_abe/items/1dec093fc8ed41eee5a7)


## 画像
静的に読み込む場合は、
public 
└ 画像.png  
publicを省略できる. 
````
<Image src="画像.png" alt="Picture of the author" width={1850} height={670} />
```



## memo
_app.jsに全て共通で利用する物を入れる

