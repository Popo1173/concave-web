import Head from 'next/head';
import Header from './Header';
import Styles from '../styles/layout.module.scss';
import homeStyles from '../styles/Home.module.scss';
import Image from 'next/image';
import Link from 'next/link';

//<Layout></Layout>で挟んだ部分がchildrenの部分に入るから、ページがレイアウトでラッピングされる。
export default function Layout({ children, home }) {
    return (
        <>
        <Head>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        {/* /<Layout></Layout>の中身を受け取る/ */}
        <section className={Styles.wrapper}>
            <div className={Styles.icatchVisual}>
               
                {/* homeと下層の分岐 */}
                {home ? (
                    <>
                    <div className={Styles.mainVisual}>
                        <h1 className={homeStyles.main_copy}>CATCH THE WAVE</h1>
                        <p className={homeStyles.main_readText}>お客様のビジネスをWebで表現します。<br />ターゲットを捉えた分析を行い、Webサイトやシステムの立ち上げから改善までをサポートします。</p>
                    </div>
                  
                    </>
                    ) : 
                    (
                    <h2>sss</h2>
                    )
                }
            </div>
            <section className={Styles.inner}>{children}</section>
        </section>
        </>
    )
}








// const Layout = (props) => (
//     <>
//       <Header />
//       <section>
//       {props.children}
//         </section>
      
//     </>
//   )
  
//   export default Layout