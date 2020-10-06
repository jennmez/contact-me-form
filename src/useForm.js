import React, { useState, useEffect } from 'react';

const useForm = (validate) => {
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
    setErrors(validate(values));
  };

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
