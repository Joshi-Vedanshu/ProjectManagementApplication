import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserSearchByEmailWithAPI = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch all users from API on component mount
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/users');
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // Perform search logic here and set searchResults state
    const filteredUsers = users.filter((user) =>
      user.email.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchResults(filteredUsers);
  };

  return (
    <div>
      <input type="text" placeholder="Search for a user by email" value={searchTerm} onChange={handleSearch} />
      <ul>
        {searchResults.map((result) => (
          <li key={result.lastName}>{result.firstName} ({result.email})</li>
        ))}
      </ul>
    </div>
  );
};

export default UserSearchByEmailWithAPI;
