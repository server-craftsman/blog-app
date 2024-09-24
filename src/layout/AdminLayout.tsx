import React from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import SidebarAdmin from './SidebarAdmin';
const AdminLayout: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <SidebarAdmin />

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        <header className="mb-4 p-6 bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-lg shadow-lg">
          <h2 className="text-4xl font-extrabold text-white text-center">Welcome, {user?.username}</h2>
        </header>
        <section>
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default AdminLayout;