import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const TopPage: React.FC = () => {
  return (
    <React.Fragment>
      <Link to="todos">Go to Todo</Link>
    </React.Fragment>
  );
};

export default TopPage;
