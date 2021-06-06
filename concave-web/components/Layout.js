import Head from 'next/head';
import Header from './Header';
import Styles from '../styles/layout.module.scss'
import homeStyles from '../styles/Home.module.scss'
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
                {children}
                {/* homeと下層の分岐 */}
                {home ? (
                    <p className={homeStyles.mainVisual}>
                        <span>ssss</span>
                    </p>
                    ) : 
                    (
                    <h2>sss</h2>
                    )
                }
            </div>
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