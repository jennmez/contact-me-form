import React, { useState } from 'react';

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
    <div className="contact">
      <h1 className="contact-header">Let's Talk</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
        </label>
        <label>
          Message:
          <input
            as="textarea"
            name="message"
            value={message}
            onChange={handleMessageChange}
          />
        </label>
        <button type="submit" disabled={disabled}>
          Send
        </button>

        {emailSent === true && <p>Email Sent</p>}
        {emailSent === false && <p>Email Not Sent</p>}
      </form>
    </div>
  );
}

export default Contact;
