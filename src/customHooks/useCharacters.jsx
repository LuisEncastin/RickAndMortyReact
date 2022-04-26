import {useState, useEffect} from 'react'

const useCharacters = (url) => {

    const [characters, setCharacters] = useState([]);
    useEffect(()=>{

      async function fetchCharacters () {
        const response = await fetch(url);
        const data = await response.json(); 
        setCharacters(data.results);
      }

      fetchCharacters();

    }, [url])

  return characters;
}

export {useCharacters}