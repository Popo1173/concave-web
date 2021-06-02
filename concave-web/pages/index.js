import Head from 'next/head'
import Layout from '../components/Layout.js'
import Image from 'next/image'

export default function Home() {
  return (
    
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout home>
        <Image className="mainVisual"　src="/main_visual.png" alt="Picture of the author" width={1850} height={670} />
      </Layout>
      <main>
        
        <h1></h1>
      </main>

      <footer>

      </footer>
    </div>
  )
}
