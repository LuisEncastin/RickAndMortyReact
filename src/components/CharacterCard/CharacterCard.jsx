import React from 'react'
// styles
import './CharacterCard.css'

const CharacterCard = ({name, image}) => {
  return (
    <>
    <div className='characterCard--container'>
        <div className='characterCard--image'>
            <img src={image} alt={`rick and morty charachter: ${name}`} />
        </div>
        <div className='characterCard--name'>
            <p>{name}</p>
        </div>
    </div>
    </>
  )
}

export {CharacterCard}