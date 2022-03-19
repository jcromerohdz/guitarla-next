import Layout from '../components/Layout'
import Image from 'next/dist/client/image'
import styles from '../styles/Car.module.css'

const Car = ({car}) => {
  console.log('Carrito', car.length)
  return (
    <Layout page={'Shoping Car'}>
      <h1 className='heading'>Shoping Car</h1>
      <main className={`${styles.content} contenedor`}>
        <div className={styles.car}>
          {car.length === 0 ? 'Empty Car' : (
            car.map(product => (
              <div key={product.id} className={styles.product}>
                <div>
                  <Image layout='responsive' width={240} height={480} src={product.image} alt={product.name}/>

                </div>

                <div>
                  <p className={styles.name}>{product.name}</p>
                  <p className={styles.quantity}>Quantity: {product.quantity}</p>
                  <p className={styles.price}>$<span>{product.price}</span></p>
                  <p className={styles.subtotal}>Subtotal: $ <span>{product.price * product.quantity}</span></p>
                </div>
              </div>
            ))
          )}
        </div>
        <div>2</div>
      </main>
    </Layout>
  )
}

export default Car