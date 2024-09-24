import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { IBlog } from '../../models/Blogs';
import NotificationList from '../../components/NotificationList';

interface Notification {
  id: string;
  message: string;
  createdAt: string;
}

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [userBlogs, setUserBlogs] = useState<IBlog[]>([]);
  const [totalViews, setTotalViews] = useState(0);
  const [totalComments, setTotalComments] = useState(0);
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        try {
          const response = await fetch(`/blogs?userId=${user.id}`);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const contentType = response.headers.get('content-type');
          if (!contentType || !contentType.includes('application/json')) {
            const text = await response.text();
            console.error('Received non-JSON response:', text);
            throw new TypeError("Received non-JSON response");
          }
          const blogsData = await response.json();
          setUserBlogs(blogsData);

          // For this example, we'll use random numbers for views and comments
          setTotalViews(Math.floor(Math.random() * 1000));
          setTotalComments(Math.floor(Math.random() * 100));

          // Fetch notifications (mock data for now)
          const mockNotifications = [
            { id: '1', message: '✨ New comment on your blog', createdAt: new Date().toISOString() },
            { id: '2', message: '🚀 Your blog post is trending', createdAt: new Date().toISOString() },
          ];
          setNotifications(mockNotifications);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    fetchUserData();
  }, [user]);

  if (!user) {
    return <div className="text-center text-lg text-gray-700">Please log in to view the dashboard.</div>;
  }

  return (
    <div className="container mx-auto px-6 py-10 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">User Activity</h2>
          <p className="text-lg">Total Blogs: <span className="font-bold">{userBlogs.length}</span></p>
          <p className="text-lg">Total Views: <span className="font-bold">{totalViews}</span></p>
          <p className="text-lg">Total Comments: <span className="font-bold">{totalComments}</span></p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Recent Blogs</h2>
          <ul className="list-disc pl-5">
            {userBlogs.slice(0, 5).map((blog) => (
              <li key={blog.id} className="mb-2 text-lg text-gray-600">
                {blog.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-10">
        <NotificationList notifications={notifications} />
      </div>
    </div>
    
  );
};

export default Dashboard;