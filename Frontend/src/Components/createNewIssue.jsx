import React, { useState } from 'react';
import axios from 'axios';

const CreateIssueForm = () => {
  const [issue, setIssue] = useState({
    summary: '',
    description: '',
    project: { key: 'PROJ' }, // replace PROJ with your project key
    issuetype: { name: 'Bug' } // replace Bug with your issue type
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setIssue(prevState => ({ ...prevState, [name]: value }));
  };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     axios.post('/rest/api/3/issue', issue, {
//       headers: {
//         'Authorization': 'Basic <your-authentication-token>',
//         'Content-Type': 'application/json'
//       }
//     })
//       .then(response => {
//         console.log(response);
//         alert('Issue created successfully!');
//       })
//       .catch(error => {
//         console.error(error);
//         alert('Issue creation failed!');
//       });
//   };

  return (
    <form>
      <label htmlFor="summary">Summary:</label>
      <input type="text" name="summary" value={issue.summary} onChange={handleChange} />

      <label htmlFor="description">Description:</label>
      <textarea name="description" value={issue.description} onChange={handleChange} />

      <label htmlFor="Asignee">Assignee:</label>
      <textarea name="Assignee" value={issue.Assignee} onChange={handleChange} />

      <label htmlFor="Duration">Duration:</label>
      <input type="text" id="duration" name="duration" placeholder="Enter duration in hours"></input>

      <select name="priority">
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
    </select>



      <button type="submit">Create Issue</button>
    </form>
  );
};

export default CreateIssueForm;
