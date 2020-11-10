import React from 'react';
import TopPage from '../pages/TopPage';
import TodoBoardPage from '../pages/TodoBoardPage';

export const rootPath = [
  {
    path: '/',
    element: <TopPage />,
  },
  { path: 'todos', element: <TodoBoardPage /> },
];

export default rootPath;
