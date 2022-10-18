import React from 'react'
import food from '../images/food.jpg'

export default function Thumbnail({recept, index, showRecept}) {
    return (
        <div className='thumbnail' onClick={() => showRecept(index)}>
            <img src={food} alt='food'></img>
            <div>
                <p className='categorie'>{recept.categorie}</p>
                <p className='handlee'>{recept.titel}</p>
            </div>
        </div>
    )
}
