import React, {useState, useEffect} from 'react'
// Components
import { CharacterCard } from '../CharacterCard/CharacterCard';
// Styles
import './Characters.css'

const Characters = () => {

    const [characters, setCharacters] = useState([])

    useEffect(() => {
          fetch('https://rickandmortyapi.com/api/character')
          .then(response => response.json())
          .then(responseJson => setCharacters(responseJson.results))
    }, []);
    
  return (
    <div className='Characters'>
        {characters.map(character=>
        <CharacterCard 
        name={character.name}
        image={character.image}
        />)}
    </div>
  )
}

export {Characters}