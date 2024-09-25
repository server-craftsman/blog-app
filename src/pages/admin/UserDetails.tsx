import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { IUser } from '../../models/Users';
import api from '../../services/api';

const UserDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editedUser, setEditedUser] = useState<IUser | null>(null);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const navigate = useNavigate();

  const fetchUser = async () => {
    try {
      const response = await api.get<IUser>(`/users/${id}`, {
        headers: {
          'Access-Control-Allow-Origin': '*', // Allow CORS
        },
      });
      setUser(response.data);
    } catch (err) {
      setError('Failed to fetch user details');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [id]);

  const handleEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editedUser) {
      const formData = new FormData();
      formData.append('username', editedUser.username);
      formData.append('email', editedUser.email);
      formData.append('role', editedUser.role);
      if (editedUser.userImage) {
        const reader = new FileReader();
        if (editedUser.userImage instanceof File) {
          reader.readAsDataURL(editedUser.userImage);
          reader.onloadend = async () => {
            const base64data = reader.result;
            formData.append('userImage', base64data as string);
            formData.append('userUpdatedAt', Date.now().toString()); // Update userUpdatedAt with current time

            try {
              await api.put(`/users/${id}`, formData, {
                headers: {
                  'Access-Control-Allow-Origin': '*', // Allow CORS
                },
              });
              setShowEditPopup(false);
              fetchUser(); // Refresh user data after edit
            } catch {
              setError('Failed to update user');
            }
          };
        } else {
          console.error("userImage is not a File");
        }
      } else {
        formData.append('userUpdatedAt', Date.now().toString()); // Update userUpdatedAt with current time
        try {
          await api.put(`/users/${id}`, formData, {
            headers: {
              'Access-Control-Allow-Origin': '*', // Allow CORS
            },
          });
          setShowEditPopup(false);
          fetchUser(); // Refresh user data after edit
        } catch {
          setError('Failed to update user');
        }
      }
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await api.delete(`/users/${id}`, {
          headers: {
            'Access-Control-Allow-Origin': '*', // Allow CORS
          },
        });
        navigate('/admin/users');
      } catch (err) {
        setError('Failed to delete user');
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (editedUser) {
      if (name === 'userImage' && files) {
        setEditedUser({ ...editedUser, [name]: files[0] }); // Handle file upload
      } else {
        setEditedUser({ ...editedUser, [name]: value });
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-extrabold mb-10 text-gray-800 text-center">User Profile</h1>
      <Link to="/admin/users" className="bg-indigo-500 text-white px-4 py-2 rounded mb-4 inline-block">Back to Users</Link>
      <button onClick={() => { setShowEditPopup(true); setEditedUser(user); }} className="bg-yellow-500 text-white px-4 py-2 rounded mb-4 inline-block">Edit User</button>
      {showEditPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Edit User</h2>
            <form onSubmit={handleEdit}>
              <div className="mb-4">
                <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username</label>
                <input type="text" id="username" name="username" value={editedUser?.username || ''} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-light focus:outline-none focus:shadow-outline" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input type="email" id="email" name="email" value={editedUser?.email || ''} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-light focus:outline-none focus:shadow-outline" />
              </div>
              <div className="mb-4">
                <label htmlFor="role" className="block text-gray-700 font-bold mb-2">Role</label>
                <input type="text" id="role" name="role" value={editedUser?.role || ''} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-light focus:outline-none focus:shadow-outline" />
              </div>
              <div className="mb-4">
                <label htmlFor="userImage" className="block text-gray-700 font-bold mb-2">User Image</label>
                <input type="file" id="userImage" name="userImage" onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-light focus:outline-none focus:shadow-outline" />
              </div>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
              <button type="button" onClick={() => setShowEditPopup(false)} className="bg-red-500 text-white px-4 py-2 rounded ml-2">Close</button>
            </form>
          </div>
        </div>
      )}
      <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded mb-4 inline-block">Delete User</button>
      <div className="bg-white shadow-lg rounded-lg p-8">
        <div className="flex items-center mb-6">
          <img 
            src={typeof user.userImage === 'string' ? user.userImage : undefined} 
            alt="User Avatar" 
            className="w-24 h-24 rounded-full border-2 border-gray-300 mr-6" 
          />
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">{user.username}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <p className="text-lg"><strong className="text-gray-700">ID:</strong> <span className="text-gray-900">{user.id}</span></p>
          <p className="text-lg"><strong className="text-gray-700">Role:</strong> <span className="text-gray-900">{user.role}</span></p>
          <p className="text-lg"><strong className="text-gray-700">Created At:</strong> <span className="text-gray-900">{new Date(user.userCreatedAt).toLocaleDateString()}</span></p>
          <p className="text-lg"><strong className="text-gray-700">Updated At:</strong> <span className="text-gray-900">{new Date(user.userUpdatedAt).toLocaleDateString()}</span></p>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;