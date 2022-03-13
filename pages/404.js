import Link from "next/link"
import Layout from "../components/Layout"
import styles from "../styles/NotFound.module.css"

const NotFound = () => {
  return (
    <Layout>
      <div className={styles.notFound}>
        <h1 className="heading">Page not Found!</h1>
        <Link href="/">Back to Home</Link>
      </div>
    </Layout>
  )
}

export default NotFound