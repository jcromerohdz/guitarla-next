import Image from "next/image"
import Layout from "../../components/Layout"
import { dateFormat } from '../../helpers'
import styles from '../../styles/Feed.module.css'

const BlogFeed = ({feed}) => {
  const { content, title, publishedAt, image } = feed.data[0].attributes
  const imgURL = `http://localhost:1337${image.data.attributes.url}`
  
  return (
    <Layout>
      <main className="contenedor">
        <h1 className="heading">{title}</h1>
        <article className={styles.feed}>
          <Image layout="responsive"
            width={800}
            height={600}
            src={imgURL}
            alt={`Feed image ${title}`}
          />
          <div className={styles.content}> <p className={styles.date}>{dateFormat(publishedAt)}</p> <p className={styles.text}>{content}</p>
          </div>
        </article>
      </main>
    </Layout>
  )
}

export async function getStaticPaths(){
  const urlBlog = `${process.env.API_URL}blogs?populate=*`
  const response = await fetch(urlBlog)
  const feeds = await response.json()

  const paths = feeds.data.map(feed => ({
    params: { url: feed.attributes.url}
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params: {url}}) {
  //"http://localhost:1337/api/blogs?populate=*&filters[url][$eq]=Steps-to-play-the-guitar"
  console.log(url)

  const urlBlog = `${process.env.API_URL}blogs?populate=*&filters[url][$eq]=${url}`
  //const urlBlog = `${process.env.API_URL}blogs?url=${url}`
  console.log(urlBlog)
  const response = await fetch(urlBlog)
  const feed = await response.json()
  return {
    props: {
      feed: feed
    }
  }
}

// export async function getServerSideProps({query: {id}}) {
//   const url = `http://localhost:1337/api/blogs/${id}?populate=*`
//   const response = await fetch(url)
//   const feed = await response.json()
//   console.log(feed)
//   return {
//     props: {
//       feed: feed
//     }
//   }
// }

export default BlogFeed 