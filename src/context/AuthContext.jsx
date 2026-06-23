import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user info is stored in localStorage
    const savedUser = localStorage.getItem('hv_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Mock successful login
    const mockUser = {
      id: 1,
      name: 'Pranjal Modi',
      email: email,
      phone: '9876543210',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
      role: 'Premium Buyer'
    };
    localStorage.setItem('hv_user', JSON.stringify(mockUser));
    setUser(mockUser);
    setIsAuthenticated(true);
    return true;
  };

  const register = (name, email, phone, password) => {
    // Mock successful registration
    const mockUser = {
      id: Date.now(),
      name: name,
      email: email,
      phone: phone,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
      role: 'General User'
    };
    localStorage.setItem('hv_user', JSON.stringify(mockUser));
    setUser(mockUser);
    setIsAuthenticated(true);
    return true;
  };

  const logout = () => {
    localStorage.removeItem('hv_user');
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
