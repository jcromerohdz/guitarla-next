import Link from "next/link";
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`contenedor ${styles.content}`} >
        <nav className={styles.navigation}>
          <Link href="/">Home</Link>
          <Link href="/aboutus">About Us</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/store">Store</Link>
        </nav>

        <p className={styles.copyright}>All rights reserved</p>
      </div>


    </footer>
  );
};

export default Footer;
