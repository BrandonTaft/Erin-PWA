import Head from "next/head";
import Layout from '../src/components/Layout';
import "../src/css/global.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Are You Smarter Than Erin</title>
        <meta name="description" content="The hottest insurance tracking trivia app on the scene" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta name="keywords" content="game, trivia, insurance tracking" />
        <meta property="og:type" content="app" />
        <link href="/favicon.ico" type="image/x-icon" rel="shortcut icon" />
      </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </>
  )
}
