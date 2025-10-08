// src/routes/AdminRoute.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminLogin from '../pages/admin/AdminLogin';
import AdminDashboard from '../pages/admin/AdminDashboard';
import ProtectedRoute from './ProtectedRoute';

function AdminRoute() {
  return (
    <Routes>
      <Route path='/admin-login' element={<AdminLogin />} />
      <Route
        path='/admin-dashboard'
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default AdminRoute;
