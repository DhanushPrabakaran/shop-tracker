// src/utils/validators.js

export const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };
  
  export const validatePassword = (password) => {
    // Password must be at least 8 characters long and contain at least one number and one special character
    const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return re.test(password);
  };
  
  export const validateRequired = (value) => {
    return value !== undefined && value !== null && value.trim() !== '';
  };
  
  export const validateForm = (fields, validators) => {
    const errors = {};
  
    Object.keys(validators).forEach((field) => {
      const value = fields[field];
      const fieldValidators = validators[field];
  
      fieldValidators.forEach((validator) => {
        if (!validator(value)) {
          errors[field] = true;
        }
      });
    });
  
    return errors;
  };
  