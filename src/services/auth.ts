import { IUser } from '../models/Users';
import api from './api';

export const login = async (email: string, password: string): Promise<IUser> => {
  try {
    const response = await api.get<IUser[]>('/users'); // Use api instance
    const users = response.data;
    const user = users.find(user => user.email === email && user.password === password);
    if (!user) {
      throw new Error('Invalid email or password');
    }
    return user;
  } catch (error) {
    throw new Error('Failed to fetch users');
  }
};

export const logout = async (): Promise<void> => {
  // No network request needed for logout
  localStorage.removeItem('user'); // Remove user data from local storage
};

export const register = async (username: string, email: string, password: string): Promise<IUser> => {
  try {
    const response = await api.post<IUser>('/users', { // Use api instance
      username,
      email,
      password,
      role: 'user', // Default role
      userCreatedAt: Date.now(),
      userUpdatedAt: Date.now(),
      userImage: 'path/to/image',
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to register user');
  }
};