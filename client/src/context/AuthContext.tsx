/**
 * @description: 
 * @author: 
 */

// client/src/context/AuthContext.tsx
import { createContext, useContext, useState, useEffect, useCallback } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  token: string | null;
  login: (token: string, remember: boolean) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const logout = useCallback(() => {
    console.log("Logging out");
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    setToken(null);
    setIsAuthenticated(false);
  }, []);

  const verifyToken = async (token: string) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/verify', {
        method: 'GET',
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      const data = await response.json();
      return response.ok && data.valid;
    } catch (error) {
      console.error('Token verification failed:', error);
      return false;
    }
  };

  const login = async (newToken: string, remember: boolean) => {
    const storage = remember ? localStorage : sessionStorage;
    
    const isValid = await verifyToken(newToken);
    if (isValid) {
      storage.setItem('token', newToken);
      setToken(newToken);
      setIsAuthenticated(true);
    } else {
      throw new Error('Invalid token');
    }
  };

  useEffect(() => {
    const initAuth = async () => {
      const storedToken = localStorage.getItem('token') || sessionStorage.getItem('token');
      if (storedToken) {
        const isValid = await verifyToken(storedToken);
        if (isValid) {
          setToken(storedToken);
          setIsAuthenticated(true);
        } else {
          logout();
        }
      }
      setIsLoading(false);
    };

    initAuth();
  }, [logout]);

  return (
    <AuthContext.Provider value={{ 
      isAuthenticated, 
      token, 
      login, 
      logout, 
      isLoading 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};