import Link from "next/link";
import Image from "next/image";
import {useRouter} from 'next/router'
import styles from "../styles/Header.module.css"

const Header = ({guitar}) => {
  const router = useRouter()
  console.log("router", router)
  return (
    <header className={styles.header}>
      <div className='contenedor'>
        <div className={styles.bar}>
          <Link href="/">
            <a>
              <Image width={400} height={100} src="/img/logo.svg" alt="logo" />
            </a>
          </Link>

          <nav className={styles.navigation}>
            <Link href="/">Home</Link>
            <Link href="/aboutus">About Us</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/car">
              <a>
                <Image layout='fixed' width={30} height={25} src="/img/carrito.png" alt="Car Image"/>
              </a>
            </Link>

          </nav>
        </div>

        {guitar && (
          <div className={styles.model}>
            <h2>Model {guitar.attributes.name}</h2>
            <p>{guitar.attributes.description}</p>
            <p className={styles.price}>${guitar.attributes.price}</p>
            <Link 
              href={`/guitars/${guitar.attributes.url}`}>
              <a className={styles.link}>
                Show guitar
              </a>
            </Link>
          </div>
        )}

      </div>

      {router.pathname === '/' && (
        <img 
          className={styles.guitar}
          src="/img/header_guitarra.png" alt="image header guitar" 
        />
      )}
    </header>
  );
};

export default Header;
