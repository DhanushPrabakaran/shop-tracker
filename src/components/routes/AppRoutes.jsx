// src/routes/AppRoutes.jsx


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/ProfilePage';
// import { AuthProvider } from '../context/AuthContext';

const AppRoutes = () => {
  return (
    // <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Router>
    // </AuthProvider>
  );
};

export default AppRoutes;
