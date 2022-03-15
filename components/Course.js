import Link from 'next/link'
import styles from '../styles/Course.module.css'

const Course = ({course}) => {
  const {title, content, image} = course.data.attributes
  const imageURL = `http://localhost:1337${image.data.attributes.url}`

  return (
    <section>
      <div className={`contenedor ${styles.grid}`}>
        <div className={styles.content}>
          <h2 className='heading'>{title}</h2>
          <p className={styles.text}>{content}</p>

          <a className={styles.link} href='#'>More Info</a>
        </div>
      </div>

      <style jsx>{`
        section {
          padding: 10rem 0;
          margin-top: 10rem;
          background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(${imageURL});
          background-size: cover;
          background-position: 50%;
        } 
      `}</style>
      


    </section>
  )
}

export default Course