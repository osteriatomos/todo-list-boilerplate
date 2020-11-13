import React from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from './AppBar';
import App from './AppBar';

const styles = {
  root: {
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%',
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto',
  },
};

const MainLayout: React.FC = () => {
  return (
    <div style={styles.root}>
      <AppBar />
      <div style={styles.wrapper}>
        <div style={styles.contentContainer}>
          <div style={styles.content}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
