// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/Login/LoginPage';
import DashboardPage from './pages/Dashboard/DashboardPage';
import AddSubscriptionPage from './pages/AddSubscription/AddSubscriptionPage';
import EditSubscriptionPage from './pages/EditSubscription/EditSubscriptionPage';
// (Opcional) import RegisterPage from './pages/Register/RegisterPage';
import PrivateRoute from './utils/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/register" element={<RegisterPage />} /> */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/subscription/add"
          element={
            <PrivateRoute>
              <AddSubscriptionPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/subscription/edit/:id"
          element={
            <PrivateRoute>
              <EditSubscriptionPage />
            </PrivateRoute>
          }
        />
        {/* Para cualquier ruta no definida, redirigir a login o dashboard */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
