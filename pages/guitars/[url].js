import Image from 'next/image'
import Layout from '../../components/Layout'
import styles from '../../styles/Guitar.module.css'

const Product = ({guitar}) => {
  const {name, price, image, description} = guitar.data[0].attributes
  const guitarImageURL = `http://localhost:1337${image.data.attributes.url}`
  return (
    <Layout 
      page={`Guitar ${name}`}
    >
      <div className={styles.guitar}>
        <Image layout='responsive' width={180} height={350} src={guitarImageURL} alt={`Guitar Image ${name}`}/>
        <div className={styles.content}>
          <h3>{name}</h3>
          <p className={styles.description}>{description}</p>
          <p className={styles.price}>${price}</p>

          <form className={styles.form}>
            <label>Quantity:</label>
            <select>
              <option value="">-- Select --</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
            <input 
              type="submit"
              value="Add to cart"
            />
          </form>
        </div>

      </div>
    </Layout>
  )
}

export async function getServerSideProps({query: {url}}){

  console.log(url)
  const urlGuitar = `${process.env.API_URL}guitars?populate=*&filters[url][$eq]=${url}`
  const response = await fetch(urlGuitar)
  const guitar = await response.json()


  return {
    props: {
      guitar
    }
  }
}

export default Product 