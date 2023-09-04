import React from 'react';

function EmailInput() {
  return (
    <div className="email-input">
      <h1>Create the software<br /> Your business needs</h1>
      <p>Describe a platform that encloses you to design, develop, and manage<br /> your web exactly the way you want</p>
      <div className="input-button-container">
        <input type="email" placeholder="Enter your email" />
        <button className="start-button">Start Free Trial</button>
      </div>
    </div>
  );
}

export default EmailInput;
