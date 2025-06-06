// src/utils/PrivateRoute.jsx
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

export default function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <p>Cargando...</p>; // <-- NO redirige hasta que termine

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
