import React, { useState, useEffect } from 'react';

const useForm = () => {
  const [values, setValues] = useState({
    visitorName: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return { handleChange, handleSubmit, values };
};

export default useForm;
