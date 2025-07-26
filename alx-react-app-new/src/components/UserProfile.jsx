// src/components/UserProfile.jsx
import React from 'react';

const UserProfile = (props) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '20px',
      borderRadius: '10px',
      maxWidth: '300px',
      margin: '20px auto',
      textAlign: 'center',
      backgroundColor: '#f9f9f9'
    }}>
      <h2 style={{ color: 'blue', fontSize: '1.5rem' }}>{props.name}</h2>
      <p><strong>Age: </strong> {props.age}</p>
      <p><strong>Bio:</strong> {props.bio}</p>
    </div>
  );
};

export default UserProfile;
