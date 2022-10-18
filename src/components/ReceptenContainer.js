import React from 'react'
import Thumbnail from './Thumbnail'


export default function ReceptenContainer({receptenLijst, showRecept}) {

  console.log('ReceptenContainer rendered');
  
  return (
    <div className='receptenContainer'>
      {receptenLijst.map((recept, index) => <Thumbnail recept={recept} key={index} index={index} showRecept={showRecept}/>) }
      <button className='addRecept'>+</button>
    </div>
  )
}
