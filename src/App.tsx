import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/admin/Dashboard';
import { AuthProvider } from './context/AuthContext';
import { BlogDetail } from './components/BlogDetail';
import AdminLayout from './layout/AdminLayout';
import ManageUsers from './pages/admin/ManageUsers';
import ManageBlogs from './pages/admin/ManageBlogs';
import UserDetails from './pages/admin/UserDetails';
const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'blog/:id',
          element: <BlogDetail />
        }
      ]
    },
    {
      path: '/admin',
      element: <AdminLayout />,
      children: [
        {
          path: 'dashboard',
          element: <Dashboard />
        },
        {
          path: 'users',
          element: <ManageUsers />
        },
        {
          path: 'blogs',
          element: <ManageBlogs />
        },
        {
          path: 'user/:id',
          element: <UserDetails />
        }
      ]
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    }
  ]);

  return (
    <AuthProvider> 
        <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;