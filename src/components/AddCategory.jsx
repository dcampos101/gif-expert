import { useState } from "react";

export const AddCategory = ({ onNewCategory }) =>{

    const [inputValue, setinputValue] = useState('')
    //const [categories, setCategories] = useState(['Celulares', 'Televisores']);
    const onInputChanged = (event) =>{
        setinputValue(event.target.value);
    };

    const onSubmit = (event) =>{
        event.preventDefault();
        console.log(inputValue);
        if (inputValue.trim().length <=1) return;
        //setCategories( categories => [...categories, inputValue]);
        setinputValue('');
        onNewCategory(inputValue.trim());
    };

    //onChange={ (event) => onInputChanged(event) }
    //onSubmit={ ( event ) => onSubmit (event) }>
    return(
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar producto"
                value={ inputValue}
                onChange={ onInputChanged }
            />
        </form>
    )
};