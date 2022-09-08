import React, { useState } from "react";
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Celulares']);
    //console.log(categories);

    const onAddCategory = ( newCategory ) =>{
        //setCategories([...categories, 'Computadores']);
        if ( categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
        //setCategories( cat => [...cat, 'Computadores']);
    };
    return(
        <>
        {/* Titulo */}
        <h1>Gif Expert APP</h1>
        {/* Input */}
        <AddCategory 
            //setCategories={ setCategories } 
            //event => onAddCategory(event)
            onNewCategory = { onAddCategory }
        />
        {/* Listado Items */}
        <button onClick={ onAddCategory }>Agregar</button>
        { categories.map((category) =>(
                <GifGrid 
                    key={ category }
                    category = { category }/>
            ))
        }

        {/* Gif Item */}
        </>
    )
};

