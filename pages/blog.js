import Layout from "../components/Layout";
import BlogList from "./BlogList";

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
  
  return (
    <Layout
      page={'Blog'}
    >
      <main className="contenedor">
        <BlogList 
          feeds={feeds}
        />
      </main>
    </Layout>
  );
};

export async function getServerSideProps(){

  const url = `${process.env.API_URL}blogs?populate=*`
  const response = await fetch(url)
  const feeds = await response.json()

  return {
    props: {
      feeds: feeds.data
    }
  }
}

export default Blog;