import { useState, useEffect } from 'react'
import '../styles/normalize.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [car, setCar] = useState([])

  useEffect(() => {
    const carLS = JSON.parse(localStorage.getItem('car')) ?? []
    setCar(carLS)
  }, [])

  useEffect(() => {
    localStorage.setItem("car", JSON.stringify(car))
  }, [car])

  const addToCar = product => {
    if(car.some( item => item.id === product.id)){
      console.log('Duplicated product')
      const updatedCar = car.map( item => {
        if(item.id === product.id){
          item.quantity = product.quantity
        }
        return item
      })
      setCar(updatedCar)
    }else{
      console.log('New Product')
      setCar([...car, product])
    }
  }

  const updateQuantity = product => {
      const updatedCar = car.map( item => {
        if(item.id === product.id){
          item.quantity = product.quantity
        }
        return item
      })
      setCar(updatedCar)
  }

  return <Component 
            {...pageProps} 
            car={car}
            addToCar={addToCar}
            updateQuantity={updateQuantity}
          />
}

export default MyApp
