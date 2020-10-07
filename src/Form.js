import React, { useState } from 'react';
// import './Form.scss';
import FormInput from './FormInput';
import FormSuccess from './FormSuccess';

function Form() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      {!isSubmitted ? <FormInput submitForm={submitForm} /> : <FormSuccess />}
    </>
  );
}

export default Form;
