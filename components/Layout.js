import Head from "next/head";

const Layout = ({children, page}) => {
  return (
    <div>
      <Head>
        <title>GuitarLA - {page}</title>
        <meta name="description" content="Guitar Store Web Site" />
      </Head>
      <h1>From Layout....</h1>
      {children}
    </div>
  );
};

export default Layout;
