import { useState } from "react";
import styles from "./searchBar.module.css"

export default function SearchBar(props) {
   const [id, setId] = useState("");
   const handleChange = (character) => {
      const{ value } = character.target;
      setId(value)
   }

   return (
      <div>
         <input 
         className={styles.barInput} 
         type="search"
         name="search" 
         id="" 
         onChange={handleChange} 
         />
         <button 
         className={styles.barSubmmit} 
         onClick={() => props.onSearch(id)}>Agregar</button>
      </div>
   );
}
