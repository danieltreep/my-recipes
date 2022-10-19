
import React, { useEffect, useState } from 'react'

export default function AddIngredienten() {
    const [ingredienten, setIngredienten] = useState([]);

    function handleAddIngredient(e) {

        e.preventDefault();

        const ingredient = document.getElementById('ingredient');
        const hoeveelheid = document.getElementById('hoeveelheid');
        const eenheid = document.getElementById('eenheid');

        const volledigIngredient = {
            naam: ingredient.value,
            hoeveelheid: hoeveelheid.value,
            eenheid: eenheid.value,
        }

        setIngredienten(prevState => {
            return(
                [...prevState, volledigIngredient]
            )
        });
        
        ingredient.value = '';
        hoeveelheid.value = '';
        eenheid.value = '';
    }
    
    function handleRemove(index, e) {
        e.preventDefault();

        const ingredientenCopy = [...ingredienten];
        const removedIngredient = ingredientenCopy.splice(index, 1);

        setIngredienten(ingredientenCopy)
        
    }

    useEffect(() => {
        console.log(ingredienten)
    }, [ingredienten])

    return (
        <fieldset>
            <h2>Ingredienten</h2>
            <div>
                {ingredienten.map((ingredient, index) => {
                    return(
                        <div key={index} className='ingredient'>
                            <div>
                                <svg onClick={(e) => handleRemove(index, e)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 10L10 14" stroke="#1B1B1B" strokeWidth="1.5" strokeLinecap="round"/>
                                    <path d="M14 14L10 10" stroke="#1B1B1B" strokeWidth="1.5" strokeLinecap="round"/>
                                    <path d="M21.25 12C21.25 6.89137 17.1086 2.75 12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12Z" stroke="#1B1B1B" strokeWidth="1.5"/>
                                </svg>
                                <p>{ingredient.naam}</p>
                            </div>
                            <div>
                                <p>{ingredient.hoeveelheid}</p>
                                <p>{ingredient.eenheid}</p>
                            </div>
                            
                        </div>
                    )   
                })}
            </div>
            
            <div>
                <input type='text' placeholder='Ingredient' id='ingredient'></input>
                <div className='addIngredients'>
                    <input type='number' placeholder='Hoeveelheid' id='hoeveelheid'></input>
                    <select id='eenheid' defaultValue={''}>
                        <option disabled></option>
                        <option>x</option>
                        <option>mg</option>
                        <option>g</option>
                        <option>kg</option>
                        <option>ml</option>
                        <option>l</option>
                        <option>tl</option>
                        <option>el</option>
                    </select>
                    <button onClick={(e) => handleAddIngredient(e)} className='add'>+</button>
                
                </div>
                
            </div>   
        </fieldset>
    )
}
