import { connect } from "react-redux"
import { Card } from "../card/Card"

export function Favorites({myFavorites}) {
    
    return(
        <div>
            {myFavorites.length ? myFavorites.map((character, index) => {
                <Card
                character={character.id}
                key={index}
                name={character.name}
                species={character.species}
                gender={character.gender}
                image={character.image}
                onClose={character.onClose}
                />
            }) : null}
        </div>
    )
}

export function mapStateToProps(state) {
    return{
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps,null)(Favorites)