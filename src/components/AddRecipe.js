import React, { useEffect, useState } from 'react'
import AddIngredienten from './AddIngredienten'
import AddStappen from './AddStappen'
import AddTitel from './AddTitel'

export default function AddRecipe() {

    const [recept, setRecept] = useState(
        {
            titel: '',
            afbeeldingURL: '/images/food.jpg',
            categorie: '',
            duur: {
                aantal: null,
                eenheid: ''
            },
            personen: null,
            ingredienten: [
                {
                    naam: '',
                    hoeveelheid: null,
                    eenheid: '',
                    toegevoegd: false
                }
            ],
            stappen: [
                {
                    titel: 'null',
                    beschrijving: '',
                    voltooid: false
                }
            ]
        },
    )

    useEffect(() => {
        console.log(recept);
    }, [recept])

    function updateRecept(key, value) {
        setRecept(prevState => {
            return({...prevState, [key]: value})
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        
        
        <form onSubmit={(e) => handleSubmit(e)}>
        
            <AddTitel />
        
            <AddIngredienten />
        
            <AddStappen />

            <button type='submit'>Voeg recept toe aan collectie</button>
        </form>
        
       
    )
}
