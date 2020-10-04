import React, { useState } from 'react';
import './contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [disabled, updateButton] = useState(false);
  const [emailSent, sendEmailMessage] = useState(null);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleMessageChange(e) {
    setMessage(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('submitting...');
    console.log(name, email, message);
    setName('');
    setEmail('');
    setMessage('');
  }
  return (
    // <div className="contact">
    //   <h1 className="contact-header">Let's Talk</h1>
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <label for="name" className="contact-label">
          Name
        </label>
        <input
          id="name"
          className="contact-input"
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
          required
        />
      </div>
      <div className="input-group">
        <label for="email" className="contact-label">
          Email
        </label>
        <input
          id="email"
          className="contact-input"
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      {/* <label for="message" className="contact-label">
        Message
      </label>
      <textarea
        id="message"
        className="contact-input"
        name="message"
        rows={5}
        value={message}
        onChange={handleMessageChange}
        required
      /> */}
      <button type="submit" disabled={disabled}>
        Send
      </button>

      {emailSent === true && <p>Email Sent</p>}
      {emailSent === false && <p>Email Not Sent</p>}
    </form>
    // {/* </div> */}
  );
}

export default Contact;
