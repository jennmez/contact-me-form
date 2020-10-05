import React, { useRef } from 'react';
// import './App.css';
import './App.scss';

function App() {
  const inputRef = useRef(null);

  return (
    <div className="App">
      <form action="">
        <fieldset>
          <legend>Tell me your name!</legend>
          <div className="field-outlined">
            <input
              id="name"
              name="name"
              type="text"
              className="input"
              placeholder=" "
              ref={inputRef}
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
              required
            />
            <label htmlFor="name" className="label">
              Email
            </label>
          </div>
        </fieldset>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
