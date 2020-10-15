import React, { useState, useEffect } from 'react';

import axios from 'axios';

const useForm = (submitForm, validate) => {
  const [values, setValues] = useState({
    visitorName: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validate(values));
    try {
      console.log(values);
      await axios.post('/contact', values).then(function (response) {
        setSubmitting(true);
        console.log('you did it!', response.data);
      });
    } catch (err) {
      console.error('this is axios err:', err);
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      submitForm();
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
