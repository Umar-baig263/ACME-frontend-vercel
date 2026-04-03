// src/routes/AdminRoutes.jsx
import { createBrowserRouter } from "react-router-dom";
import React from "react";
// Layouts
import AdminLayout from "../components/AdminLayout.jsx";
import GuestLayout from "../components/GuestLayout.jsx";
import ProtectedRoute from "../components/ProtectedRoute.jsx";
import Login from "../views/Admin/pages/Login/Login.jsx";
import Dashboard from "../views/Admin/pages/Dashboard/Dashboard.jsx";

// import BlogCreation from "./views/AdminPanel/AdminPages/BasicFunctionPages/BlogCreationPage.jsx";

// Helper function to simplify the protected route wrapping
const protectedRoute = (Component, permission) => (
  <ProtectedRoute requiredPermission={permission}>{Component}</ProtectedRoute>
);

const adminRoutes = [
  // Admin Panel Routes
  {
    path: "/admin/",
    element: <AdminLayout />,
    children: [
      {path : "dashboard", element: <Dashboard />},
      // { path: "dashboards", element: protectedRoute(<AdminDashboard />, "/admin/dashboards") },
    ],
  },

  // Guest Routes (Login/Register)
  {
    path: "/admin/",
    element: <GuestLayout />,
    children: [{ index: true, element: <Login /> }],
  },
];

export default adminRoutes;
