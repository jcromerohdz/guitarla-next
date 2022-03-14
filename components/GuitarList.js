import Guitar from "./Guitar"
import styles from "../styles/GuitarList.module.css"

const GuitarList = ({guitars}) => {
  console.log(guitars)
  const guitarsList = guitars.data
  return (
    <div className={styles.list}>
      {guitarsList.map( guitar => (
        <Guitar 
          key={guitar.id}
          guitar={guitar}
        />
      ))}
    </div>
  )
}

export default GuitarList