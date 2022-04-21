import React, {useState, useEffect, useReducer, useMemo} from 'react'
// Components
import { CharacterCard } from '../CharacterCard/CharacterCard';
import { FavoriteCard } from '../FavoriteCard/FavoriteCard';
// Styles
import './Characters.css'

// initialState para useReducer
const initialState = {
  favorites:[]
};

const favoriteReducer = (state, action) =>{
  switch (action.type){
    case 'ADD_TO_FAVORITE':
      return{
        ...state,
        favorites: [...state.favorites, action.payload]
      }
      default:
        return state;
  }
}

const Characters = () => {

    // useState
    const [characters, setCharacters] = useState([])
    const [search, setSearch] = useState('');

    // useReducer
    const [state, dispatch] = useReducer(favoriteReducer, initialState);

    const handleClick = (favorite) => dispatch({type: 'ADD_TO_FAVORITE', payload: favorite});

    const handleSearch = (event) =>{
      setSearch(event.target.value)
    }

    const filteredUsers = useMemo(()=>
      characters.filter((user)=>{
        return user.name.toLowerCase().includes(search.toLowerCase())
    }), [characters, search]
    )

    // Fetch de personajes
    useEffect(() => {
          fetch('https://rickandmortyapi.com/api/character')
          .then(response => response.json())
          .then(responseJson => setCharacters(responseJson.results))
    }, []);

  return (
    <div className='Characters'>

        <div className="search">
          <label htmlFor="searchInput">Busca a tu personaje favorito.</label>
          <input type="text" id={'searchInput'} placeholder={'Buscar'} value={search} onChange={handleSearch} />
        </div>

        {state.favorites.map(favorite=>
        <FavoriteCard
          key={favorite.id}
          name={favorite.name}
          image={favorite.image}
        />
          )}

        {filteredUsers.map(character=>
        <CharacterCard 
          key={character.id}
          name={character.name}
          image={character.image}
          handleClick={handleClick}
          character={character}
        />)}
    </div>
  )
}

export {Characters}