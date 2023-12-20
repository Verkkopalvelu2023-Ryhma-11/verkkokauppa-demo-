import React, { useState } from 'react'
import axios from 'axios'

export default function Admin() {

    const params = {
        name: '', description: '' ,

    }

    const [category, setCategory] = useState(params);

    const handleChange = (event) => {
        setCategory({ ...category, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:3001/', category);
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
                    <input type='text' name='name' value={category.name} onChange={handleChange} />
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
