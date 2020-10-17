import React from 'react';
import './FormSuccess.scss';

const FormSuccess = (props) => {
  const { returnToForm } = props;

  const handleClick = (e) => {
    returnToForm();
  };

  return (
    <>
      <div className="success">
        <div className="icon">
          <span className="material-icons">check</span>
        </div>
        <h2>Thanks for your email!</h2>
        <button onClick={handleClick}>Back to the contact form</button>
      </div>
    </>
  );
};

export default FormSuccess;
