import React, { useState, useEffect } from 'react';
import axios from 'axios';

function IssueList() {
  const [issues, setIssues] = useState([]);

//   useEffect(() => {
//     async function fetchIssues() {
//       const response = await axios.get(
//         'https://your-jira-instance/rest/api/2/search?jql=project=YOUR-PROJECT-KEY'
//       );
//       setIssues(response.data.issues);
//     }
//     fetchIssues();
//   }, []);

  return (
    <div>
      <h1>Issue List</h1>
      <ul>
        {issues.map(issue => (
          <li key={issue.id}>{issue.key} - {issue.fields.summary}</li>
        ))}
      </ul>
    </div>
  );
}

export default IssueList;