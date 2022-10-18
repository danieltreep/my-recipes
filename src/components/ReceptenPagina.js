import React, { useState } from 'react'
import AddRecipe from './AddRecipe'
import Recept from './Recept'
import ReceptenContainer from './ReceptenContainer'

export default function ReceptenPagina({receptenLijst}) {

    const [show, setShow] = useState(false)
    const [selected, setSelected] = useState(null)

    function showRecept(index) {
        console.log(`clicked ${index}`)
        setSelected(receptenLijst[index]);
        setShow(true);
    }

    function handleReturn() {
        setShow(false);
    }
    return (
        <section className='receptenPagina'>

            {/* {show ? <Recept recept={selected} handleReturn={handleReturn}/> : <ReceptenContainer showRecept={showRecept} receptenLijst={receptenLijst}/>} */}
            <AddRecipe />
        </section>
    )
}
