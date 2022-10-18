import React from 'react'
import '../css/recept.css'
import Stappen from './Stappen'
import Ingredienten from './Ingredienten'
import ReceptHeader from './ReceptHeader'
import food from '../images/food.jpg'

export default function Recept({recept, handleReturn}) {

  console.log('recept rendered');

  return (
    <div className='recept'>
      <div className='receptHero'>
        <img src={food} alt={recept.titel} className='receptImage'></img> 
        <h3 className='receptTitel'>{recept.titel}</h3>
      </div>
      
      
      <ReceptHeader duur={recept.duur} handleReturn={handleReturn}/>
      <Ingredienten ingredienten={recept.ingredienten} categorie={recept.categorie}/>
      <Stappen stappen={recept.stappen}/>
    </div>
  )
}
