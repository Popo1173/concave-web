import Head from 'next/head';
import Header from './Header';
import Styles from '../styles/layout.module.scss'
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
        {/* {home ? (
           <Image className="mainVisual"　src="/main_visual.png" alt="Picture of the author" width={1850} height={670} />
        ) : (
            <h2>sss</h2>
        )} */}


        {/* /<Layout></Layout>の中身を受け取る/ */}
        <section className={Styles.wrapper}>
            {children}
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