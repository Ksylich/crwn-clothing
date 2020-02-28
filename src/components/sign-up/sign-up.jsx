import React from "react";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import CustomButton from "../custom-button";
import FormInput from "../form-input";

import "./sign-up.scss";

class SignUp extends React.Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  handleSubmit = async event => {

    event.preventDefault();


    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("password don`t match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

     await createUserProfileDocument(user, {displayName});

     this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
     })
    } catch (error) {
        console.log(error);
    }
  };

  handleChange = event => {
      const {name, value} = event.target;

      this.setState({[name]: value});
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className="sign-up">
        <h2 className="title"> I do not have a account</h2>
        <span> Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Dispaly Name"
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="email"
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="password"
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="confirm password"
          />
          <CustomButton type="submit"> SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;