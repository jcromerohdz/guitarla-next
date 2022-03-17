import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({children, page, guitar}) => {
  return (
    <div>
      <Head>
        <title>GuitarLA - {page}</title>
        <meta name="description" content="Guitar Store Web Site" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap" rel="stylesheet" />
      </Head>

      <Header 
        guitar={guitar}
      />

      {children}

      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  guitar: null
}

export default Layout;
