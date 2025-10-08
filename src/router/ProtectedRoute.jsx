/* eslint-disable no-unused-vars */

import  { useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const role = localStorage.getItem("role");

  useEffect(() => {
    const path = location.pathname;
    // Auto logout if admin navigates to unauthorized pages
    if (role && allowedRoles && !allowedRoles.includes(role)) {
      localStorage.removeItem("role");
      localStorage.removeItem("token");
      navigate("/admin-login");
    }
    if (!role) navigate("/admin-login");
  }, [location, navigate, role, allowedRoles]);

  if (!role || !allowedRoles.includes(role)) return null;
  return children;
};

export default ProtectedRoute;
