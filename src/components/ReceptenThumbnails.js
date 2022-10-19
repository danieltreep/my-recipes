import React from 'react'
import Thumbnail from './Thumbnail'

export default function ReceptenThumbnails({receptenLijst, showModal, showRecept}) {

    console.log('receptenThumbnails')
  return (
    <div className='receptenThumbnails'>
        {receptenLijst.map((recept, index) => <Thumbnail recept={recept} key={index} index={index} showRecept={showRecept}/>) }
        <button className='addRecept' onClick={() => showModal(true)}>+</button>
    </div>
    
  )
}
