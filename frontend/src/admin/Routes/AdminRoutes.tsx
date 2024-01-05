import React, { Component } from 'react'
import { useRoutes } from 'react-router-dom';
import Dashboard from '../layout/Dashboard';

interface Route {
    path: string;
    element: React.ReactElement;
}

interface RouteWithChildren {
    element: React.ReactElement;
    children: Route[];
}

const AdminRoutes = () => {
  const routes: (Route | RouteWithChildren)[] = [
    { path: '/admin',  element: <Dashboard /> },
  ]

  return useRoutes(routes)
}

export default AdminRoutes
