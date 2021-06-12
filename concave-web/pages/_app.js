import React from "react";
import App, { Container } from "next/app";
import 'modern-css-reset/dist/reset.min.css'
import '../styles/globals.scss'
import '../styles/parts.scss'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
//   return (
//     <Head>
//       <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap" />
//     </Head>
//   )
// }
export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap" />
      </Container>
    );
  }
}


