import React from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from './AppBar';

const styles = {
  root: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  },
  wrapper: {
    display: 'flex',
    flex: 'auto',
    overflow: 'hidden',
  },
  content: {
    flex: 'auto',
    height: '100%',
    overflow: 'auto',
    padding: '16px',
  },
};

const MainLayout: React.FC = () => {
  return (
    <div style={styles.root}>
      <AppBar />
      <div style={styles.wrapper}>
        <div style={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
