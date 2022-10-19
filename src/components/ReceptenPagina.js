import React, { useState } from 'react'
import AddRecipe from './AddRecipe'
import Recept from './Recept'
import ReceptenContainer from './ReceptenContainer'

export default function ReceptenPagina({receptenLijst}) {

    
    
    const [showModal, setShowModal] = useState(false)

    

    function handleReturn() {
        setShowModal(false);
    }

    return (
        <section className='receptenPagina'>

            {showModal ?  <AddRecipe handleReturn={handleReturn}/> : <ReceptenContainer showModal={setShowModal} receptenLijst={receptenLijst}/>}
        </section>
    )
}
