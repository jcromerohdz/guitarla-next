import Layout from "../components/Layout";
import GuitarList from "../components/GuitarList";

const Shop = ({guitars}) => {
  return (
    <Layout
      page={'Virtual Shop'}
    >
      <main className="contenedor">
        <h1 className="heading">Our Collection</h1>

        <GuitarList 
          guitars={guitars}
        />
      </main>
    </Layout>
  );
};

export async function getServerSideProps() {
  const url = `${process.env.API_URL}guitars?populate=*`
  console.log(url)
  const response = await fetch(url)
  const guitars = await response.json()
  console.log(guitars)

  return {
    props: {
      guitars
    }
  }
}


export default Shop;
