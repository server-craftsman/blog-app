import axios from 'axios';
import { IUser } from '../models/Users';
import api from './api'; // Changed from import { api } to import api

const API_URL = '/api/users'; // This is the mock API endpoint

export const login = async (email: string, password: string): Promise<IUser> => {
  try {
    // Fetch all users from the mock API
    const response = await axios.get(API_URL);
    const users: IUser[] = response.data;

    // Find the user with matching email and password
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      // If user is found, return the user data
      return user;
    } else {
      // If user is not found, throw an error
      throw new Error('Invalid email or password');
    }
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export const logout = async (): Promise<void> => {
  await api.post('/logout');
};

export const register = async (username: string, email: string, password: string): Promise<IUser> => {
  const response = await api.post('/register', { username, email, password });
  return response.data;
};