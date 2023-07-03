import React, { useState } from 'react';
import './styles/contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    // You can access the form values using the state variables (name, email, message)
    console.log('Form submitted:', { name, email, message });
    // Reset the form after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact">
      <h2 className="h2">Contact Me</h2>
      <p>
        You can reach out to me via email or connect with me on GitHub:
      </p>
      <ul>
        <li>Email: sewstrait@gmail.com</li>
        <li>
          GitHub: <a href="https://github.com/strait2thepoint">https://github.com/strait2thepoint</a>
        </li>
      </ul>

      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
