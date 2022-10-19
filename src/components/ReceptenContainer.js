import React, { useState } from 'react'
import AddRecipe from './AddRecipe';
import Recept from './Recept';
import ReceptenThumbnails from './ReceptenThumbnails';
import Thumbnail from './Thumbnail'


export default function ReceptenContainer({receptenLijst, showModal}) {

  console.log('ReceptenContainer rendered');

  const [show, setShow] = useState(false)
  const [selected, setSelected] = useState(null)

  function showRecept(index) {
    console.log(`clicked ${index}`)
    setSelected(receptenLijst[index]);
    setShow(true);
  }
  
  return (
    <div className='receptenContainer'>
      
      {show ? <Recept recept={selected} handleReturn={() => setShow(false)}/> : <ReceptenThumbnails showModal={showModal} receptenLijst={receptenLijst} showRecept={showRecept}/>}
      
    </div>
  )
}
