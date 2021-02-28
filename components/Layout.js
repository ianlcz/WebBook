import Head from "next/head";

const Layout = ({ title = null, children }) => (
  <div className="flex flex-wrap content-center h-screen bg-blue-100">
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>{title ? `${title} | ` : null} WebBook</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    {children}
  </div>
);

export default Layout;
