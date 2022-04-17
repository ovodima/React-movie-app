import React from "react";
import FormSingup from "../PageElement/FormSingup";
import '../PageElement/Account.css'
import FormLogIn from "../PageElement/FormLogIn";


export default function Account() {
  return (
    <div className="login-page">
      <div className="form">
        <FormSingup />

        <FormLogIn />
      </div>
    </div>
  )
}
