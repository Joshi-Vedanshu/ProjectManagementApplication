import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateIssueForm = ({ issueKey }) => {
  const [issue, setIssue] = useState({
    summary: '',
    description: ''
  });

  useEffect(() => {
    axios.get(`/rest/api/3/issue/${issueKey}`, {
      headers: {
        'Authorization': 'Basic <your-authentication-token>',
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        const { summary, description } = response.data.fields;
        setIssue({ summary, description });
      })
      .catch(error => {
        console.error(error);
        alert('Failed to fetch issue data');
      });
  }, [issueKey]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setIssue(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`/rest/api/3/issue/${issueKey}`, {
      fields: {
        summary: issue.summary,
        description: issue.description
      }
    }, {
      headers: {
        'Authorization': 'Basic <your-authentication-token>',
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        console.log(response);
        alert('Issue updated successfully!');
      })
      .catch(error => {
        console.error(error);
        alert('Issue update failed!');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
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

      <button type="submit">Update Issue</button>
    </form>
  );
};

export default UpdateIssueForm;
