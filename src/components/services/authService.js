// src/services/authService.js

export const login = async (credentials) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      if (!response.ok) {
        throw new Error('Login failed');
      }
      return await response.json();
    } catch (error) {
      console.error('Error during login:', error);
      throw error;
    }
  };
  
  export const logout = async () => {
    try {
      const response = await fetch('/api/logout', { method: 'POST' });
      if (!response.ok) {
        throw new Error('Logout failed');
      }
    } catch (error) {
      console.error('Error during logout:', error);
      throw error;
    }
  };
  
  export const getCurrentUser = async () => {
    try {
      const response = await fetch('/api/me');
      if (!response.ok) {
        throw new Error('Failed to fetch current user');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching current user:', error);
      throw error;
    }
  };
  