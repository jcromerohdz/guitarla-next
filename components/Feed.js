import Link from 'next/link'
import Image from 'next/image'
import { dateFormat } from '../helpers'
import styles from '../styles/Feed.module.css'

const Feed = ({feed}) => {
  console.log(feed)
  const {title, summary, image, publishedAt} = feed.attributes
  const { id } = feed
  const imgURL = `http://localhost:1337${image.data.attributes.url}`
  
  return (
    <article>
      <Image 
        layout='responsive'
        width={800}
        height={600}
        src={imgURL}
        alt={`blog image ${title}`}
      />
      <div className={styles.content}>
        <h3>{title}</h3>
        <p className={styles.date}>{dateFormat(publishedAt)}</p>
        <p>{summary}</p>
        <Link href={`blog/${id}`}>
          <a className={styles.link}>
            Read Feed
          </a>
        </Link>
      </div>
    </article>
  )
}

export default Feed