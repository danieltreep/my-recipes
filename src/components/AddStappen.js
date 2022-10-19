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
                <h2>Stappen</h2>
                {stappen.map((stap, index) => {
                    return(
                        <div className='stap' key={index}>
                            <div className='stapTitel'>
                                <svg onClick={(e) => handleRemove(e, index)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 10L10 14" stroke="#1B1B1B" strokeWidth="1.5" strokeLinecap="round"/>
                                    <path d="M14 14L10 10" stroke="#1B1B1B" strokeWidth="1.5" strokeLinecap="round"/>
                                    <path d="M21.25 12C21.25 6.89137 17.1086 2.75 12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12Z" stroke="#1B1B1B" strokeWidth="1.5"/>
                                </svg>
                                <h3><span>{index +1}.</span> {stap.titel}</h3>
                            </div>
                            
                            <p className='beschrijving'>{stap.beschrijving}</p>
                            
                                
                            
                        </div>
                    )
                })}
            </div>
            
            
            <input id='stapTitel' type='text' placeholder='Titel'></input>
            
            <textarea id='beschrijving' placeholder='Beschrijving' rows='10'></textarea>
            <button onClick={() => addStep()}>Voeg stap toe</button>
            
        </fieldset>
    )
}
