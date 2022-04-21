import React from 'react'
// styles
import './CharacterCard.css'

const CharacterCard = ({key, name, image, handleClick, character}) => {

  return (
    <>
    <div className='characterCard--container' key={key}>
        <div className='characterCard--image'>
            <img src={image} alt={`rick and morty charachter: ${name}`} />
        </div>
        <div className='characterCard--name'>
            <p>{name}</p>
            <button type='button' onClick={()=>handleClick(character)}>Agregar a favoritos</button>
        </div>
    </div>
    </>
  )
}

export {CharacterCard}