import Head from "next/head";
import Layout from '../src/components/Layout';
import "../src/css/global.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>QuizWiz</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta name="keywords" content="game, trivia, mobile game" />
        <meta property="og:type" content="app" />
        <link href="/favicon.ico" type="image/x-icon" rel="shortcut icon" />
      </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </>
  )
}
