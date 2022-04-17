import React from "react";



export default function FormSingup() {
  
  return (
    <form className="register-form">
      <input type="text" placeholder="User name" />
      <input type="password" placeholder="Password" />
      <input type="email" placeholder="Email" />
      <button>Create</button>
      <p className="message">Do you have account?
        <span> Log in</span>
      </p>
  </form>
  );
}
