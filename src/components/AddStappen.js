import React, { useState } from 'react'

export default function AddStappen() {

    const [stappen, setStappen] = useState([]);

    return (
        <fieldset>
            {stappen?.map((stap, index) => {
                return(
                    <div className='stap' key={index}>

                        <h3><span>{index +1}.</span> {stap.titel}</h3>
                        <p className='beschrijving'>{stap.beschrijving}</p>
                        
                    </div>
                )
            })}
            <fieldset>
                <label htmlFor='titel'>Titel</label>
                <input id='titel' type='text'></input>
                <label htmlFor='beschrijving'>Beschrijving</label>
                <textarea id='beschrijving'></textarea>
            </fieldset>
        </fieldset>
    )
}
