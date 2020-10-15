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
    setSubmitting(true);
    let { email, visitorName, message } = values;
    let trimmedMsg = message.trim();
    try {
      await axios
        .post('/api/contact', { email, visitorName, trimmedMsg })
        .then((res) => {
          console.log('this:', res.data);
        });
    } catch (err) {
      console.error('error msg sent from server', err);
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
