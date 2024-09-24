import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { IBlog } from '../models/Blogs';

import NotificationList from '../components/NotificationList';

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
          const blogs = await fetch(`/blogs?userId=${user.id}`);
          const blogsData = await blogs.json();
          setUserBlogs(blogsData);

          // For this example, we'll use random numbers for views and comments
          setTotalViews(Math.floor(Math.random() * 1000));
          setTotalComments(Math.floor(Math.random() * 100));

          // Fetch notifications (mock data for now)
          const mockNotifications = [
            { id: '1', message: 'New comment on your blog', createdAt: new Date().toISOString() },
            { id: '2', message: 'Your blog post is trending', createdAt: new Date().toISOString() },
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
    return <div>Please log in to view the dashboard.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">User Activity</h2>
          <p>Total Blogs: {userBlogs.length}</p>
          <p>Total Views: {totalViews}</p>
          <p>Total Comments: {totalComments}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Blogs</h2>
          <ul>
            {userBlogs.slice(0, 5).map((blog) => (
              <li key={blog.id} className="mb-2">
                {blog.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-8">
        <NotificationList notifications={notifications} />
      </div>
    </div>
  );
};

export default Dashboard;