import React from 'react'
// styles
import './FavoriteCard.css'

const FavoriteCard = ({name, image}) => {

  return (
    <>
    <div className='favoriteCard--container'>
        <div className='favoriteCard--image'>
            <img src={image} alt={`rick and morty character: ${name}`} />
        </div>
        <div className='favoriteCard--name'>
            <p>{name}</p>
        </div>
    </div>
    </>
  )
}

export {FavoriteCard}