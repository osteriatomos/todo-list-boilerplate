import React from 'react';
import { Navigate } from 'react-router-dom';
import MainLayout from 'layouts';
import NotFoundPage from 'components/pages/NotFoundPage';
import TodoBoardPage from 'components/pages/TodoBoardPage';

export const routes = [
  {
    path: 'app',
    element: <MainLayout />,
    children: [
      { path: 'todos', element: <TodoBoardPage /> },
      { path: '/', element: <Navigate to="/app/todos" /> },
      { path: '*', element: <Navigate to="/404" /> },
    ],
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '404', element: <NotFoundPage /> },
      { path: '/', element: <Navigate to="/app/todos" /> },
      { path: '*', element: <Navigate to="/404" /> },
    ],
  },
];

export default routes;
