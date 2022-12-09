import Card from '../components/card/Card';
import '../App.css'
// import characters from '../data';

export default function Cards(props) {
   const { characters } = props;
   return ( 
   <div className='cards'>
      {characters.map(character => (
         <Card
            character={character.id}
            key={character.name}
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
            onClose={props.onClose}
         />
      ))}
   </div>
   );
}
