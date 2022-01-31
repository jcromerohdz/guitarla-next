import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({children, page}) => {
  return (
    <div>
      <Head>
        <title>GuitarLA - {page}</title>
        <meta name="description" content="Guitar Store Web Site" />
      </Head>

      <Header />

      {children}

      <Footer />
    </div>
  );
};

export default Layout;
