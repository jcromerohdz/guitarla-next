import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Guitar.module.css'

const Guitar = ({guitar}) => {
  const { description, image, name, price, url} = guitar.attributes
  const imageURL = `http://localhost:1337${image.data.attributes.url}`
  return (
    <div className={styles.guitar}>
      <Image layout='responsive' width={180} height={350} src={imageURL} alt={`Guitar Image ${name}`}/>
      <div className={styles.content}>
        <h3>{name}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>${price}</p>
        <Link href={`/guitars/${url}`}>
          <a className={styles.link}>
            Show Guitar
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Guitar