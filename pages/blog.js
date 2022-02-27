import { useEffect } from "react";
import Layout from "../components/Layout";

const Blog = ({feeds}) => {

  // useEffect(() => {
  //   const queryBlogs = async () => {
  //     const url = "http://localhost:1337/api/blogs?populate=*"
  //     const response = await fetch(url)
  //     const result = await response.json()

  //     console.log(result)
  //   }

  //   queryBlogs()

  // }, [])
  console.log(feeds)

  return (
    <Layout
      page={'Blog'}
    >
      <h1>From Blog</h1>
    </Layout>
  );
};

export async function getServerSideProps(){

  const url = "http://localhost:1337/api/blogs?populate=*"
  const response = await fetch(url)
  const feeds = await response.json()

  console.log(feeds)
  return {
    props: {
      feeds: feeds
    }
  }
}

export default Blog;