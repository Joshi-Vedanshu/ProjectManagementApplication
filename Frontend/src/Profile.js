import React, {useContext, useState } from 'react';
import {context} from './Context';

function Profile(props) {
  

  const {userName, setShowProfile} = useContext(context);


  
  return (
    <div>
      <h1>UserName: {userName}!</h1>
      <button onClick={() =>{setShowProfile(false)}}>Log out</button>
    </div>
  );
}
export default Profile