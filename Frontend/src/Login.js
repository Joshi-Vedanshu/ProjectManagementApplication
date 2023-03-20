import React, { useContext, useState } from 'react';
import {context} from './Context';
function Login(props) {
  const {setUserName, setShowProfile} = useContext(context);
  return (
    <form>
      <label>
        Username:
        <input type="text"/>
      </label><p>stay logged in</p>
      <input type ="checkbox"></input>
      <button type="submit" onClick={() =>{setShowProfile(true)}}>Log in</button>
    </form>
  );
}

export default Login