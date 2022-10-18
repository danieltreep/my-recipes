
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
            <label>Ingredienten</label>
            <div className='ingredientenContainer'>
                {ingredienten.map((ingredient, index) => {
                    return(
                        <div key={index} className='ingredient'>
                        <button onClick={(e) => handleRemove(index, e)}>x</button>
                            <p>{ingredient.naam}</p>
                            <p>{ingredient.hoeveelheid}</p>
                            <p>{ingredient.eenheid}</p>
                        </div>
                    )   
                })}
            </div>
            
            <div>
                <input type='text' placeholder='Ingredient' id='ingredient'></input>
                <input type='number' placeholder='Hoeveelheid' id='hoeveelheid'></input>
                <label htmlFor='eenheid'></label>
                <select id='eenheid' defaultValue={''}>
                    <option></option>
                    <option>mg</option>
                    <option>g</option>
                    <option>kg</option>
                    <option>ml</option>
                    <option>l</option>
                    <option>tl</option>
                    <option>el</option>
                </select>
                <button onClick={(e) => handleAddIngredient(e)}>Add ingredient</button>
            
            </div>   
        </fieldset>
    )
}
