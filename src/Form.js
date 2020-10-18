import React, { useState } from 'react';
import './Form.scss';
import FormInput from './FormInput';
import FormSuccess from './FormSuccess';

function Form() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  function returnToForm() {
    setIsSubmitted(false);
  }
  return (
    <>
      <div className="form-container">
        {!isSubmitted ? (
          <FormInput submitForm={submitForm} />
        ) : (
          <FormSuccess returnToForm={returnToForm} />
        )}
      </div>
    </>
  );
}

export default Form;
