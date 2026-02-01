// Mock Authentication Service for Development
import { mockUsers } from './mockData';

export const mockAuthService = {
  // Mock login function
  signIn: async (email, password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Find user in mock data
        const user = Object.values(mockUsers).find(
          u => u.email === email && u.password === password
        );

        if (user) {
          resolve({
            success: true,
            user: {
              uid: user.id.toString(),
              email: user.email,
              displayName: user.name,
              photoURL: null,
              emailVerified: true
            }
          });
        } else {
          resolve({
            success: false,
            error: 'Invalid email or password'
          });
        }
      }, 1000); // Simulate network delay
    });
  },

  // Mock user data fetch
  getUserData: async (userId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const user = Object.values(mockUsers).find(u => u.id.toString() === userId);
        
        if (user) {
          resolve({
            success: true,
            data: {
              name: user.name,
              email: user.email,
              role: user.role,
              phone: user.phone,
              familyCircle: user.familyCircle || '',
              photoURL: user.photoURL || '',
              createdAt: new Date().toISOString(),
              authProvider: 'mock',
              isEmailVerified: true,
              dateOfBirth: user.dateOfBirth || '',
              address: user.address || ''
            }
          });
        } else {
          resolve({
            success: false,
            error: 'User not found'
          });
        }
      }, 500);
    });
  }
};

export default mockAuthService;
