import React from "react";
import Joi from "joi-browser";
//import { apiUrl } from "../config.json";
import userService from "../../services/userService";
//import http from "../services/httpService";


import Form from "../common/form";

class Signup extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().min(6).label("Password"),
    password_confirmation: Joi.string()
      .required()
      .min(2)
      .label("confirm password"),
  };

  doSubmit = async () => {
    const { data } = this.state;
    
    try {
      //await userService.register(data);
      window.location = "/add-user#addUser";
     
    } catch (ex) {
      const { data } = ex.response;
      const errors = data.errors;
      const err = {};
      for (const error in errors) {
        err[error] = errors[error][0];
      }
      this.setState({ errors: err });

      if (ex.response && ex.response.status === 400) {
      }
    }
  };

  render() {
    return (
      <div className="container" id="formData">
        <div className="row">
          <div className="col-12 mt-4">
            <h1>Signup for Real App</h1> 
          </div>
          <div className="col-12">
            <p>You can open new account for free!</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <form onSubmit={this.handleSubmit} autoComplete="off" method="POST">
              {this.renderInput("email", "عنوان البريد الالكتروني:", "email")}
              {this.renderInput("password", "ادخل كلمة المرور:", "password")}
              {this.renderInput(
                "password_confirmation",
                "اعد كلمة المرور:",
                "password"
              )}
              {this.renderButton("تسجيل")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
