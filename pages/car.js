import Layout from '../components/Layout'
import styles from '../styles/Car.module.css'

const Car = ({car}) => {
  return (
    <Layout page={'Shoping Car'}>
      <h1 className='heading'>Shoping Car</h1>
      <main className={`${styles.content} contenedor`}>
        <div>1</div>
        <div>2</div>
      </main>
    </Layout>
  )
}

export default Car