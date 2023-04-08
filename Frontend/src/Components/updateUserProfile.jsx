import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserProfileUpdate({ userId }) {
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    async function fetchUser() {
      const response = await axios.get(`https://api.example.com/users/${userId}`);
      setUser(response.data);
      setName(response.data.name);
      setEmail(response.data.email);
      setPhone(response.data.phone);
    }
    fetchUser();
  }, [userId]);

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePhoneChange(event) {
    setPhone(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const updatedUser = { name, email, phone };
    const response = await axios.put(`https://api.example.com/users/${userId}`, updatedUser);
    setUser(response.data);
    alert('Profile updated successfully!');
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Update Profile</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <label>
          Phone:
          <input type="tel" value={phone} onChange={handlePhoneChange} />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default UserProfileUpdate;
