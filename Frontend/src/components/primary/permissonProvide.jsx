import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SprintAndStoryPermissions = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [sprintReadAccess, setSprintReadAccess] = useState(false);
  const [sprintWriteAccess, setSprintWriteAccess] = useState(false);
  const [storyReadAccess, setStoryReadAccess] = useState(false);
  const [storyWriteAccess, setStoryWriteAccess] = useState(false);

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

  const handleUserSelect = (e) => {
    const selectedUserId = parseInt(e.target.value);
    setSelectedUser(selectedUserId);
  };

  const handleSprintReadAccessChange = (e) => {
    setSprintReadAccess(e.target.checked);
  };

  const handleSprintWriteAccessChange = (e) => {
    setSprintWriteAccess(e.target.checked);
  };

  const handleStoryReadAccessChange = (e) => {
    setStoryReadAccess(e.target.checked);
  };

  const handleStoryWriteAccessChange = (e) => {
    setStoryWriteAccess(e.target.checked);
  };

  const handleSavePermissions = async () => {
    try {
      const response = await axios.post(`/users/${selectedUser}/permissions`, {
        sprintReadAccess,
        sprintWriteAccess,
        storyReadAccess,
        storyWriteAccess,
      });
      console.log(response.data); // Handle success
    } catch (error) {
      console.error(error); // Handle error
    }
  };

  return (
    <div>
      <label htmlFor="user-select">Select a user:</label>
      <select id="user-select" onChange={handleUserSelect}>
        <option value="">-- Select a user --</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>

      {selectedUser && (
        <div>
          <h2>Permissions for {users.find((user) => user.id === selectedUser)?.name}</h2>

          <div>
            <label>
              <input type="checkbox" checked={sprintReadAccess} onChange={handleSprintReadAccessChange} />
              Sprint Read Access
            </label>
          </div>

          <div>
            <label>
              <input type="checkbox" checked={sprintWriteAccess} onChange={handleSprintWriteAccessChange} />
              Sprint Write Access
            </label>
          </div>

          <div>
            <label>
              <input type="checkbox" checked={storyReadAccess} onChange={handleStoryReadAccessChange} />
              Story Read Access
            </label>
          </div>

          <div>
            <label>
              <input type="checkbox" checked={storyWriteAccess} onChange={handleStoryWriteAccessChange} />
              Story Write Access
            </label>
          </div>

          <button onClick={handleSavePermissions}>Save Permissions</button>
        </div>
      )}
    </div>
  );
};

export default SprintAndStoryPermissions;
