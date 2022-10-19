import React from 'react'


export default function AddTitel({handleReturn}) {

    return (

        <fieldset>
            <button onClick={handleReturn} className='terugNaarRecepten'>
                <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.6355 7.28333L7.96924 10.5801M16.4888 7.28333H4.6355H16.4888ZM4.6355 7.28333L7.96924 4.29102L4.6355 7.28333Z" stroke="#1B1B1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Terug
            </button>
            <h2>Informatie</h2>
            <input id='titel' type='text' placeholder='Titel'></input>
            <div className='categories'>
            
                <select id='categorie' type='text' defaultValue='categorie'>
                    <option disabled>Categorie</option>
                    <option value='avondeten'>Avondeten</option>
                    <option value='dessert'>Dessert</option>
                    <option value='bakken'>Bakken</option>
                </select>
                
                <input id='duur' type='number' placeholder='Duur'></input>
                <p>min</p>
            </div>
            
        </fieldset>
    )
}
