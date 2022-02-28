import Layout from "../components/Layout";
import Feed from "../components/Feed";
import styles from '../styles/Blog.module.css'

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
        <h2 className="heading">Blog</h2>

        <div className={styles.blog}>
          {feeds.map(feed => (
            <Feed
              key={feed.id}
              feed={feed}
            />
          ))}
        </div>

      </main>
    </Layout>
  );
};

export async function getServerSideProps(){

  const url = "http://localhost:1337/api/blogs?populate=*"
  const response = await fetch(url)
  const feeds = await response.json()

  return {
    props: {
      feeds: feeds.data
    }
  }
}

export default Blog;