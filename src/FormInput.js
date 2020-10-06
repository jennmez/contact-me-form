import React, { useState } from 'react';
import './FormInput.scss';
import useForm from './useForm';

const FormInput = () => {
  const { handleChange, handleSubmit, values } = useForm();
  // const [name, setName] = useState('');

  // function handleChange(event) {
  //   let name = event.target.value;
  //   setName(name);
  //   console.log('hC', name);
  // }

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   console.log('hS', name);
  //   // setName('');
  // }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Tell me your name!</legend>
        <div className="field-outlined">
          <input
            id="visitorName"
            name="visitorName"
            type="text"
            className="input"
            placeholder=" "
            value={values.visitorName}
            onChange={handleChange}
            required
          />
          <label htmlFor="name" className="label">
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
            className="input"
            placeholder=" "
            value={values.email}
            onChange={handleChange}
            required
          />
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
            required
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
