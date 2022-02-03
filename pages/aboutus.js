import Image from 'next/image'
import Layout from "../components/Layout"
import styles from '../styles/Aboutus.module.css'

const Aboutus = () => {
  return (
    <Layout
      page={'About Us'}
    >
      <main className="contenedor">
        <h2 className="heading">About Us</h2>
       
        <div className={styles.content}>

          <Image layout='responsive' width={600} height={450} src="/img/nosotros.jpg" alt="Image About Us" />

          <div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
              been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of 
              type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the 
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
              been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of 
              type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the 
            </p>
          </div>
          
        </div>
      </main>
    </Layout>
  );
};

export default Aboutus;
