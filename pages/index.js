import Layout from '../components/Layout'
import GuitarList from '../components/GuitarList'

export default function Home({guitars}) {
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
      </Layout>

    </div>
  )
}

export async function getServerSideProps() {
  const url = `${process.env.API_URL}guitars?populate=*`
  const response = await fetch(url)
  const guitars = await response.json()

  return {
    props: {
      guitars
    }
  }
}