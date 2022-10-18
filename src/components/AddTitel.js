import React from 'react'


export default function AddTitel() {

    return (

        <fieldset>
            <label htmlFor='titel'>Titel:</label>
            <input id='titel' type='text'></input>

            <label htmlFor='categorie'>Categorie:</label>
            <select id='categorie' type='text'>
                <option value='avondeten'>Avondeten</option>
                <option value='dessert'>Dessert</option>
                <option value='bakken'>Bakken</option>
            </select>
        </fieldset>
    )
}
