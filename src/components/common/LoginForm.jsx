// src/components/LoginForm/LoginForm.jsx

import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { validateEmail, validatePassword, validateRequired } from '../../utils/validators';
import { ERROR_MESSAGES } from '../../utils/constants';

const LoginForm = () => {
  const { handleLogin } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!validateRequired(email)) {
      newErrors.email = ERROR_MESSAGES.REQUIRED_FIELD;
    } else if (!validateEmail(email)) {
      newErrors.email = ERROR_MESSAGES.INVALID_CREDENTIALS;
    }

    if (!validateRequired(password)) {
      newErrors.password = ERROR_MESSAGES.REQUIRED_FIELD;
    } else if (!validatePassword(password)) {
      newErrors.password = ERROR_MESSAGES.INVALID_CREDENTIALS;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      try {
        await handleLogin({ email, password });
        // Redirect or show success message
      } catch (error) {
        setErrors({ form: ERROR_MESSAGES.NETWORK_ERROR });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {errors.form && <div className="error">{errors.form}</div>}
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <div className="error">{errors.email}</div>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <div className="error">{errors.password}</div>}
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
