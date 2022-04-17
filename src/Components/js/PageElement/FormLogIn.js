import React from 'react'

export default function FormLogIn() {
  return (
    
    <form className="login-form">
      <input type="text" placeholder="username"/>
      <input type="password" placeholder="password"/>
      <button>login</button>
      <p className="message">Not registered? <span>Create an account</span></p>
    </form>
    
  )
}
