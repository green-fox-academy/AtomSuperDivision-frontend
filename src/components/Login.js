import React, { useState } from "react";
import { useHistory } from 'react-router-dom';


import UserInput from './UserInput';


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');
  const history = useHistory();
  

  const submit = async e => {
    e.preventDefault();

    if (username && password !== '') {
      try {
        const loginUser = await fetch(
          `${process.env.REACT_APP_BACKENDURL}/login`,
          {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          }
        );

        const response = await loginUser.json();

        if (loginUser.status === 200) {
          setToken(response);
          history.push('/');
        } else {
          setShowMessage(true);
          setMessage('Username or password incorrect');
          setUsername('');
          setPassword('');
        }
      } catch (error) {
        console.log(error);
      }
    } else if(username == null || username === ""){
      setShowMessage(true);
      setMessage(
        'Please Enter Your Username'
      );
    } else if (password == null || password === "") {
      setShowMessage(true);
      setMessage(
        'Please Enter Your  Password'
      );
    }
  };

  return (
    <form className="loginForm" onSubmit={submit}>
    <div className="loginFormInput">
      <UserInput
        divClass="login-input"
        labelClass="form-label"
        inputClass="form-input"
        title="Username"
        id="input-username"
        type="text"
        value={username}
        whenChange={e => {
          setUsername(e.target.value);
        }}
      />
        <UserInput
          divClass="login-input"
          labelClass="form-label"
          inputClass="form-input"
          title="Password"
          id="input-password"
          type="password"
          value={password}
          whenChange={e => setPassword(e.target.value)}
        />
      </div>
      <div className="buttonContainer">
        <div>
          {showMessage ? (
            <div className="login-form-message">{message}</div>
          ) : (
            <div> </div>
          )}
        </div>
        <button className="loginButton" type="submit">
          Login
        </button>
      </div>
    </form>
  );
}

function setToken(response) {
  console.log(response);
  localStorage.setItem('X-meme-token', response.token);
}

export default Login;
