import React from 'react'

export default function Ingredienten({ingredienten}) {
    return (
        <section  className='ingredientenContainer'>
            
            <h4>Ingredienten</h4>
            <div className='personenContainer'>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 0c-3.31 0-6.291 1.353-8.459 3.522l-2.48-2.48-1.061 7.341 7.437-.966-2.489-2.488c1.808-1.808 4.299-2.929 7.052-2.929 5.514 0 10 4.486 10 10s-4.486 10-10 10c-3.872 0-7.229-2.216-8.89-5.443l-1.717 1.046c2.012 3.803 6.005 6.397 10.607 6.397 6.627 0 12-5.373 12-12s-5.373-12-12-12z"/></svg>
                <div className='personenHoeveelheid'>
                    <svg width="20" height="20" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.3438 5.25C13.3438 6.82056 12.0705 8.09375 10.5 8.09375C8.92946 8.09375 7.65625 6.82056 7.65625 5.25C7.65625 3.67944 8.92946 2.40625 10.5 2.40625C12.0705 2.40625 13.3438 3.67944 13.3438 5.25Z" stroke="#1B1B1B" strokeWidth="1.5"/>
                        <path d="M15.9688 14.875C15.9688 15.8162 15.4358 16.7302 14.4496 17.4345C13.4647 18.1381 12.0704 18.5938 10.5 18.5938C8.92964 18.5938 7.53533 18.1381 6.55041 17.4345C5.56422 16.7302 5.03125 15.8162 5.03125 14.875C5.03125 13.9338 5.56422 13.0198 6.55041 12.3154C7.53533 11.6119 8.92964 11.1562 10.5 11.1562C12.0704 11.1562 13.4647 11.6119 14.4496 12.3154C15.4358 13.0198 15.9688 13.9338 15.9688 14.875Z" stroke="#1B1B1B" strokeWidth="1.5"/>
                    </svg>
                    <p>2</p>
                </div>
            </div>
            <div>
                {ingredienten?.map((ingredient, index) => {
                    return(
                        <div key={index} className='ingredient'>
                            <div className='ingredientTitel'>
                                <input type='checkbox' value={ingredient.naam}></input>
                                <p >{ingredient.naam}</p>
                            </div>
                            
                            <div className='ingredientHoeveelheid'>
                                <p>{ingredient.hoeveelheid}</p>
                                <p>{ingredient.eenheid}</p>
                            </div>
                        </div>
                    )}
                )}
            </div>
        </section>
    )
}
