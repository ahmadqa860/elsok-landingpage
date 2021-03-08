import React from "react";
import Joi from "joi-browser";
import userService from "../../services/userService";

import Form from "../common/form";
import PageHeader from "../utils/pageHeader";

class Signup extends Form {
  state = {
    data: { email: "", password: "", password_confirmation: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().required().email().label("Email").error(() => {
      return {
        message: 'خطأ',
      };
    }),
    password: Joi.string().required().min(6).label("Password").error(() => {
      return {
        message: 'خطأ',
      };
    }),
    password_confirmation: Joi.string()
      .required()
      .min(6)
      .label("confirm password").error(() => {
        return {
          message: 'خطأ',
        };
      }),
  };

  doSubmit = async () => {
    const { data } = this.state;
    
    try {
      await userService.register(data);
      window.location = "/add-user#addUser";
     
    } catch (ex) {
      const { data } = ex.response;
      const errors = data.errors;
      const err = {};
      for (const error in errors) {
        err[error] = errors[error][0];
      }
      this.setState({ errors: err });

      
    }
  };

  render() {
    return (
      
      <section id="signup">
        
      <div className="wrapper rounded">
          <div className="Lcontainer">
          <PageHeader titleText="قم بتسجيل حسابك الخاص" />
            <form className="Lform" onSubmit={this.handleSubmit} autoComplete="off" method="POST">
              {this.renderInput("email", "عنوان البريد الالكتروني:", "email")}
              {this.renderInput("password", "ادخل كلمة المرور:", "password")}
              {this.renderInput(
                "password_confirmation",
                "اعد كلمة المرور:",
                "password"
              )}
              {this.renderButton("تسجيل")}
            </form>
            <ul className="bg-bubbles">
                                  <li></li>
                                  <li></li>
                                  <li></li>
                                  <li></li>
                                  <li></li>
                                  <li></li>
                                  <li></li>
                                  <li></li>
                                  <li></li>
                                  <li></li>
                        </ul>
                    </div>
                </div>
            </section>

    );
  }
}

export default Signup;
