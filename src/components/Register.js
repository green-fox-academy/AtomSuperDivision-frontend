  
import React from 'react';


function Register() {
    return (

      <form className="form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <input type="email" placeholder="Email" />
        <button type="submit">Register</button>
      </form>

    );

}

export default Register;