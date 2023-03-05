import React, { useState } from 'react';
import "../css/Signup.css"


const Signup = ({ onSignup }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSignup({ username, password });
    };
  
    return (
      <form onSubmit={handleSubmit} className='formm'>
        <div className='form-group'>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className='form-group'>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        
        
        <button type="submit">Signup</button>
      </form>
    );
  };

  export default Signup;