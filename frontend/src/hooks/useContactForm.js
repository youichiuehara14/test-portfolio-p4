import { useState } from 'react';

const useContactForm = () => {
  const emptyUserData = {
    name: '',
    email: '',
    message: '',
    category: '',
  };

  const [userData, setUserData] = useState(emptyUserData);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!userData.name.trim()) errors.name = 'Name is required.';
    if (!userData.email.trim()) {
      errors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
      errors.email = 'Email is invalid.';
    }
    if (!userData.message.trim()) errors.message = 'Message is required.';
    if (!userData.category) errors.category = 'Please select a category.';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    alert('Your form has been submitted successfully!');
    setUserData(emptyUserData);
  };

  const handleInputChange = (e) => {
    setUserData((currData) => {
      return { ...currData, [e.target.name]: e.target.value };
    });
  };

  return {
    userData,
    setUserData,
    errors,
    handleSubmit,
    handleInputChange,
  };
};

export default useContactForm;
