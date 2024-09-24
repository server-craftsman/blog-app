import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const SidebarAdmin = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <aside className="w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col shadow-lg">
        <div className="p-6 border-b border-gray-700 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
        </svg>
          <h1 className="text-3xl font-extrabold text-center">Admin Panel</h1>
        </div>
        <nav className="flex-1 p-6">
          <ul>
            <li className="mb-4">
              <Link to="/admin/dashboard" className="block py-3 px-5 rounded-lg transition duration-300 transform hover:bg-gray-700 hover:scale-105">
                <svg className="icon-admin" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 13h2v8H3v-8zm4 0h2v8H7v-8zm4 0h2v8h-2v-8zm4 0h2v8h-2v-8zm4 0h2v8h-2v-8zM3 3h18v2H3V3zm0 4h18v2H3V7z" />
                </svg>
                Dashboard
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/admin/users" className="block py-3 px-5 rounded-lg transition duration-300 transform hover:bg-gray-700 hover:scale-105">
                <svg className="icon-admin" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.31 0-10 1.67-10 5v2h20v-2c0-3.33-6.69-5-10-5z" />
                </svg>
                Users
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/admin/blogs" className="flex items-center py-3 px-5 rounded-lg transition duration-300 transform hover:bg-gray-700 hover:scale-105">
                <svg className="icon-admin" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
                </svg>
                Blogs
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/admin/settings" className="flex items-center py-3 px-5 rounded-lg transition duration-300 transform hover:bg-gray-700 hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon-admin">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
                </svg>
                Settings
              </Link>
            </li>
          </ul>
        </nav>
        <div className="p-6">
          <button
            onClick={handleLogout}
            className="w-full py-3 px-5 bg-indigo-600 rounded-lg transition duration-300 transform hover:bg-indigo-700 hover:scale-105"
          >
            Logout
          </button>
        </div>
      </aside>
  )
}

export default SidebarAdmin
