import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ title = null, children }) => (
  <div className="flex flex-col h-screen justify-between">
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>{title ? `${title} | ` : null} WebBook</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <div className="h-screen">{children}</div>
    <Footer />
  </div>
);

export default Layout;
