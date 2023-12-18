import React, { useState } from 'react';
import axios from 'axios';
import {effect, signal} from '@preact/signals-react';

const token = signal('');
const customer = signal(null);

effect(()=>{

  const config={headers: {
    Autohrization: 'Bearer ' + token.value
  }}

  axios.get('http://localhost:3001/customer', config)
  .then(resp => console.log(resp.data))
  .catch(error => console.log(error.message))
});


function Customerinfo(){


  return(
    <div>

    </div>
  )
}


function Login() {

    const [username, setUsername] = useState('');
    const [pw, setPw] = useState('');
    
    function login(){
        axios.post('http://localhost:3001/login', {username, pw})
        .then(resp => token.value = resp.data.jwtToken)
        .catch(error => console.log(error.message))
    }

  return (
    <div>
        <input value={username} onChange={e=> setUsername(e.target.vakue)}/>
        <input value={pw} onChange={e => setPw(e.target.value)}/>
        <button onClick={login}>login</button>
    </div>
  )
}

export default Login