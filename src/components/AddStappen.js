import React, { useState } from 'react'

export default function AddStappen() {

    const [stappen, setSteps] = useState([]);

    function addStep() {
        const titel = document.getElementById('stapTitel');
        const beschrijving = document.getElementById('beschrijving');

        const stap = {
            titel: titel.value,
            beschrijving: beschrijving.value,
            voltooid: false
        }

        setSteps(prevState => {
            return(
                [...prevState, stap]
            )
        });

        titel.value = '';
        beschrijving.value = ''
    }

    function handleRemove(e, index) {
        e.preventDefault();

        const stappenCopy = [...stappen];
        const removedStap = stappenCopy.splice(index, 1);

        setSteps(stappenCopy);
    }

    return (
        <fieldset>
            <div>
                {stappen.map((stap, index) => {
                    return(
                        <div className='stap' key={index}>

                            <h3><span>{index +1}.</span> {stap.titel}</h3>
                            <p className='beschrijving'>{stap.beschrijving}</p>
                            <button onClick={(e) => handleRemove(e, index)}>X</button>
                        </div>
                    )
                })}
            </div>
            
            <label htmlFor='stapTitel'>Titel</label>
            <input id='stapTitel' type='text'></input>
            <label htmlFor='beschrijving'>Beschrijving</label>
            <textarea id='beschrijving'></textarea>
            <button onClick={() => addStep()}>Voeg stap toe</button>
            
        </fieldset>
    )
}
