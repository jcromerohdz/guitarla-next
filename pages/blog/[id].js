
const BlogFeed = ({feed}) => {
  console.log(feed)
  return (
    <div>
      <h1>From Blog Feed</h1>
    </div>
  )
}

export async function getStaticPaths(){
  const url = "http://localhost:1337/api/blogs?populate=*"
  const response = await fetch(url)
  const feeds = await response.json()

  const paths = feeds.data.map(feed => ({
    params: { id: feed.id.toString()}
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params: {id}}) {
  const url = `http://localhost:1337/api/blogs/${id}?populate=*`
  const response = await fetch(url)
  const feed = await response.json()
  console.log(feed)
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