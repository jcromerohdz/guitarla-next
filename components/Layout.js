import Head from "next/head";
import Header from "./Header";

const Layout = ({children, page}) => {
  return (
    <div>
      <Head>
        <title>GuitarLA - {page}</title>
        <meta name="description" content="Guitar Store Web Site" />
      </Head>

      <Header />

      {children}
    </div>
  );
};

export default Layout;
