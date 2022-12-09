import styles from "./card.module.css";
import { Link } from "react-router-dom";
import { addFavorites, deleteFavorites } from "../redux/actions";
import { connect } from "react-redux";
import { useEffect, useState } from "react";

export function Card(props) {

   const [isFav, setIsFav] = useState(false)

   useEffect(() => {
      props.myFavorites?.forEach((fav) => {
         if (fav.id === props.character) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);

   function handleFavorite() {
      if(isFav){
         setIsFav(false)
         props.deleteFavorites(props.character)
      }else{
         setIsFav(true)
         props.deleteFavorites(props.character)
      }
   }

   return (
      <div className={styles.card}>
         <div>

            { isFav ? (
               <button className={styles.button} onClick={handleFavorite}>❤️</button>
               ) : (
               <button className={styles.button} onClick={handleFavorite}>🤍</button>
               )
            }

            <button className={styles.button} onClick={props.onClose}>X</button>

         </div>
         <Link to={`/detail/${props.character}`}>
            <h2 className={styles.h2}>{props.name}</h2>
            <img className={styles.img} src={props.image} alt="" />
            <div className={styles.data}>
               <h2>Specie:{props.species}</h2>
               <h2>Gender:{props.gender}</h2>
            </div>
         </Link>
      </div>
   );
}

export function mapDispatchToProps(dispatch){
   return {
      addFavorites: function(id) {
         dispatch(addFavorites(id))
      },
      deleteFavorites: function(id) {
         dispatch(deleteFavorites(id))
      }
   }
}

export function mapStateToProps(state) {
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
