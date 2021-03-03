import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ title = null, children }) => (
  <div className="flex flex-col h-screen justify-between">
    <Head>
      <title>{title ? `${title} | ` : null} WebBook</title>
      <link rel="icon" type="image/png" href="/assets/images/favicon.png" />
      <link rel="apple-touch-icon" href="/assets/images/apple-touch-icon.png" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Read books everywhere !" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="WebBook" />
      <meta property="og:description" content="Read books everywhere !" />
      <meta property="og:url" content="https://webbook.iandev.fr" />
      <meta property="og:site_name" content="WebBook" />
      <meta
        property="og:image"
        content="https://webbook.iandev.fr/assets/images/cover-webbook.png"
      />
      <meta
        property="og:image:secure_url"
        content="https://webbook.iandev.fr/assets/images/cover-webbook.png"
      />
    </Head>
    <Header />
    <div className="container mx-auto h-screen">{children}</div>
    <Footer />
  </div>
);

export default Layout;
