import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  wrapper: {
    display: 'flex',
    padding: '16px',
    backgroundColor: '#333',
    height: '64px',
    width: '100%',
  },
  title: {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '32px',
    alignSelf: 'center',
  },
};

const AppBar: React.FC = () => {
  return (
    <div style={styles.wrapper}>
      <Link to="/" style={styles.title}>
        Todo List Boilerplate
      </Link>
    </div>
  );
};

export default AppBar;
