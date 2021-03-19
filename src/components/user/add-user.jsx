import React from "react";
import Joi from "joi-browser";
import userService from "../../services/userService";

import Form from "../common/form";
import PageHeader from "../utils/pageHeader";
import LoadingPage from "../utils/loadingPage";


class AddUser extends Form {
  state = {
    data: { identity: "", name: "", mobile: "", address: "" },
    userType: "3",
    errors: {},
    loading: false,
  };

  schema = {
    identity: Joi.number().label("رقم الهوية").error(() => {
      return {
        message: 'أدخل رقم صحيح',
      };
    }),
    name: Joi.string().required().label("الاسم").error(() => {
      return {
        message: 'عليك ادخال الأسم',
      };
    }),
    mobile: Joi.number().required().label("الهاتف").error(() => {
      return {
        message: 'أدخل رقم الهاتف مكون من ارقام',
      };
    }),
    address: Joi.string().required().label("العنوان").error(() => {
      return {
        message: 'عليك ادخال العنوان',
      };
    }),
  };

  handleSelect = (event) => {
    let userType = event.target.value;
    this.setState({ userType });
  };

  doSubmit = async () => {
    try {
      let { loading } = this.state;
      const { data } = this.state;
      const { userType } = this.state;
      loading = true;
      this.setState({loading});
      userService.registerUser(data, userType);
      this.props.history.replace("/add-product")
      
    }catch (ex) {
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
    const {loading} = this.state;
    return (

      <section id="addUser">
                <div className="wrapper rounded">
                    <div className="Lcontainer">
                    <PageHeader titleText="أدخل معلوماتك الخاصة" />
                    {!loading && (
                      <form method="POST" className="Lform" onSubmit={this.handleSubmit} autoComplete="off">
                        {this.renderInput("identity", "رقم الهوية")}
                        {this.renderInput("name", "الأسم الكامل")}
                        {this.renderInput("mobile", "رقم الهاتف")}
                        {this.renderInput("address", "العنوان")}
                        {this.renderButton("أكمل")}
                      </form>
                    )}

                    {loading && (<LoadingPage/>)}
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
