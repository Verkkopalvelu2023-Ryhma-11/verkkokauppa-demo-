import React, { useState } from 'react';
import axios from 'axios';
import {signal} from '@preact/signals-react';

const token = signal('');


function Login() {

    const [username, setUsername] = useState('');
    const [pw, setPw] = useState('');

    
    function login(){
        axios.post('http://localhost_3001/login', {username, pw})
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