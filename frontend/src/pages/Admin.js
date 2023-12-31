import React, { useState } from 'react'
import axios from 'axios'

export default function Admin() {

    const params = {
        categoryName: '', description: '' ,

    }

    const [category, setCategory] = useState(params);

    const handleChange = (event) => {
        setCategory({ ...category, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Lähetettävä kategoria:', category); 
        try {
            await axios.post('http://localhost:3001/categories', category);    
        console.log('TOIMIi');
        } catch (error) {
            console.log(error.message);
        }
    };



  return (
    <div>
        <h1>Ylläpito</h1>
        <div>
            <h3>Lisää tuoteryhmä</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Nimi:
                    <input type='text' name='categoryName' value={category.categoryName} onChange={handleChange} />
                </label>
                <label>
                    Kuvaus:
                    <textarea name='description' value={category.description} onChange={handleChange} />
                </label>
                <button type='submit'>Lisää tuoteryhmä</button>
            </form>
        
        
        </div>


    </div>
  )
}
