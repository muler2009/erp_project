import React, { Component } from 'react'
import { useRoutes } from 'react-router-dom';
import Dashboard from '../layout/Dashboard';
import RoleLayout from '../submodules/managment/role/rolelayout/RoleLayout';

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
    { path: 'user_management',  element: <h1>User Management</h1> },
    { path: 'role_management',  element: <RoleLayout /> },

  ]

  return useRoutes(routes)
}

export default AdminRoutes
