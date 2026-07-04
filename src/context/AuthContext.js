import React, { createContext, useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode(token);

setUser({

token,

username:decoded.username,

id:decoded.userId

}); // You may decode and store user info
    }
  }, []);

  const login = (token) => {
    const decoded = jwtDecode(token);
    
    setUser({ token,  username: decoded.username});
    localStorage.setItem('token', token);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};