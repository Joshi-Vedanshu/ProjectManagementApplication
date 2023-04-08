import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserView({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const response = await axios.get(`https://api.example.com/users/${userId}`);
      setUser(response.data);
    }
    fetchUser();
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Address: {user.address.street}, {user.address.city} {user.address.zipcode}</p>
    </div>
  );
}

export default UserView;
