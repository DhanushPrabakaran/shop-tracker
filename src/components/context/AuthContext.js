// // src/context/AuthContext.jsx

// import { createContext, useState, useEffect } from 'react';
// import { getCurrentUser, login, logout } from '../services/authService';

// export const AuthContext = createContext();

// // eslint-disable-next-line react/prop-types
// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const user = await getCurrentUser();
//         setUser(user);
//       } catch (error) {
//         console.error('Error fetching user:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUser();
//   }, []);

//   const handleLogin = async (credentials) => {
//     const user = await login(credentials);
//     setUser(user);
//   };
// // 
//   const handleLogout = async () => {
//     await logout();
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, loading, handleLogin, handleLogout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
