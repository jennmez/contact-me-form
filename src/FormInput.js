import React from 'react';
import './FormInput.scss';
import useForm from './useForm';
import validate from './utility';

const FormInput = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(validate);
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Tell me your name!</legend>
        <div className="field-outlined">
          <input
            id="visitorName"
            name="visitorName"
            type="text"
            className={`input ${errors.visitorName && 'error'}`}
            placeholder=" "
            value={values.visitorName}
            onChange={handleChange}
            required
          />
          {errors.visitorName && <p className="error">{errors.visitorName}</p>}
          <label htmlFor="visitorName" className="label">
            Name
          </label>
        </div>
      </fieldset>
      <fieldset>
        <legend>What's your email?</legend>
        <div className="field-outlined">
          <input
            id="email"
            name="email"
            type="text"
            className={`input ${errors.email && 'error'}`}
            placeholder=" "
            value={values.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}
          <label htmlFor="email" className="label">
            Email
          </label>
        </div>
      </fieldset>
      <fieldset>
        <legend>Write me a note...or not. That's up to you!</legend>
        <div className="field-outlined">
          <textarea
            id="message"
            name="message"
            className="textarea"
            rows="10"
            placeholder=" "
            value={values.message}
            onChange={handleChange}
          />
          <label htmlFor="message" className="label">
            Message
          </label>
        </div>
      </fieldset>
      <button type="submit">Send</button>
    </form>
  );
};

export default FormInput;
