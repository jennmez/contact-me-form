import React, { useState } from 'react';
import './FormContainer.scss';

function FormContainer() {
  const [name, setName] = useState(undefined);

  function handleChange(event) {
    let name = event.target.bal;
    setName(name);
    console.log('hC', name);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let name = event;
    console.log('hS', name);
    // setName('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Tell me your name!</legend>
        <div className="field-outlined">
          <input
            id="name"
            name="name"
            type="text"
            className="input"
            placeholder=" "
            value={name}
            // ref={inputRef}
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
            // ref={inputRef}
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
}

export default FormContainer;
