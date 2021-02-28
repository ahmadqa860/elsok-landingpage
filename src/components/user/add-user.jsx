import React from "react";
import Joi from "joi-browser";
import userService from "../../services/userService";


import Form from "../common/form";
import PageHeader from "../utils/pageHeader";


class AddUser extends Form {
  state = {
    data: { identity: "", name: "", mobile: "", address: "" },
    userType: "",
    errors: {},
  };

  schema = {
    identity: Joi.string().required().label("Identity").error(() => {
      return {
        message: 'خطأ',
      };
    }),
    name: Joi.string().required().label("Name").error(() => {
      return {
        message: 'خطأ',
      };
    }),
    mobile: Joi.string().required().label("Mobile").error(() => {
      return {
        message: 'خطأ',
      };
    }),
    address: Joi.string().required().label("Address").error(() => {
      return {
        message: 'خطأ',
      };
    }),
  };

  handleSelect = (event) => {
    let userType = event.target.value;
    this.setState({ userType });
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      const { userType } = this.state;
      userService.registerUser(data, userType);
      this.props.history.replace("/add-product");
    } catch (e) {
      const { data } = e.response;
      console.log(data.errors);
    }
  };

  render() {
    return (

      <section id="addUser">
                <div className="wrapper rounded">
                    <div className="Lcontainer">
                    <PageHeader titleText="Welcome To Our Card Web App" />
                      <form method="POST" className="Lform" onSubmit={this.handleSubmit} autoComplete="off">
                        {this.renderInput("identity", "رقم الهوية")}
                        {this.renderInput("name", "الأسم الكامل")}
                        {this.renderInput("mobile", "رقم الهاتف")}
                        {this.renderInput("address", "العنوان")}
                        {this.renderButton("أكمل")}
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

export default AddUser;
