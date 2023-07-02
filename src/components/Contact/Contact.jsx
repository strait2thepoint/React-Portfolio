import React from 'react';
import './styles/contact.css'

const Contact = () => {
  return (
    <div className="contact">
      <h2 class = 'h2'>Contact Me</h2>
      <p>
        You can reach out to me via email or connect with me on GitHub:
      </p>
      <ul>
        <li>Email: sewstrait@gmail.com</li>
        <li>
          GitHub: <a href="https://github.com/strait2thepoint">https://github.com/strait2thepoint</a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
