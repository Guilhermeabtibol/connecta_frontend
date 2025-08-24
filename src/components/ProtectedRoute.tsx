// src/components/ProtectedRoute.tsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const token = localStorage.getItem('token');
  
  // Se o token existe, renderiza a rota filha (Outlet),
  // caso contrário, redireciona para a página de login.
  return token ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;