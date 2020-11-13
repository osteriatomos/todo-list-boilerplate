import React from 'react';
import { Link } from 'react-router-dom';

const AppBar: React.FC = () => {
  return (
    <Link to="/">
      <div
        style={{
          height: '64px',
          width: '100%',
          backgroundColor: '#333',
          color: '#fff',
          fontSize: '32px',
        }}
      >
        Todo List Boilerplate
      </div>
    </Link>
  );
};

export default AppBar;
