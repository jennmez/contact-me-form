import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <form action="">
        <fieldset>
          <legend>Write in your name</legend>
          <div className="field-outlined">
            <input id="name" type="text" className="input" required />
            <label htmlFor="name" className="label">
              Name
            </label>
            {/* <span className="line"></span> */}
          </div>
        </fieldset>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
