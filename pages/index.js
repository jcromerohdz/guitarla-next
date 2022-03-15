import Layout from '../components/Layout'
import GuitarList from '../components/GuitarList'
import Course from '../components/Course'
import BlogList from './BlogList'

export default function Home({guitars, course, posts}) {
  console.log(guitars)
  console.log(course)
  console.log(posts)
  return (
    <div >
      <Layout
        page={'Home'}
      >
        <main className='contenedor'>
          <h1 className='heading'>Our Collection</h1>
          <GuitarList
            guitars={guitars}
          />
        </main>

        <Course 
          course={course}
        />

        <sections className='contenedor'>
          <BlogList 
            feeds={posts}
          />
        </sections>

      </Layout>
    </div>
  )
}

export async function getServerSideProps() {
  const urlGuitars = `${process.env.API_URL}guitars?populate=*`
  const urlCourses = `${process.env.API_URL}course?populate=*`
  const urlBlog = `${process.env.API_URL}blogs?populate=*&pagination[limit]=3`


  const [resGuitars, resCourses, resBlog] = await Promise.all([
    fetch(urlGuitars),
    fetch(urlCourses),
    fetch(urlBlog)
  ])

  const [guitars, course, posts] = await Promise.all([
    resGuitars.json(),
    resCourses.json(),
    resBlog.json(),
  ])

  console.log(urlBlog)

  return {
    props: {
      guitars,
      course,
      posts
    }
  }
}