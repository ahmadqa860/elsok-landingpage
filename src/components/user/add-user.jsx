import React from "react";
import Joi from "joi-browser";
import userService from "../../services/userService";


import Form from "../common/form";


class AddUser extends Form {
  state = {
    data: { identity: "", name: "", mobile: "", address: "" },
    userType: "",
    errors: {},
  };

  schema = {
    identity: Joi.string().required().label("Identity"),
    name: Joi.string().required().label("Name"),
    mobile: Joi.string().required().label("Mobile"),
    address: Joi.string().required().label("Address"),
  };

  handleSelect = (event) => {
    let userType = event.target.value;
    this.setState({ userType });
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      const { userType } = this.state;
      //userService.registerUser(data, userType);
      this.props.history.replace("/add-product");
    } catch (e) {
      const { data } = e.response;
      console.log(data.errors);
    }
  };

  render() {
    return (
      <div className="container" id="addUser">
        <div className="row">
          <div className="col-12 mt-4">
            <h1>User Info Page</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p>Content example text for User page here.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <form method="POST" onSubmit={this.handleSubmit} autoComplete="off">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <label className="input-group-text" htmlFor="userType">
                    Type
                  </label>
                </div>
                <select
                  name="userType"
                  id="userType"
                  className="custom-select"
                  onChange={this.handleSelect}
                >
                  <option defaultValue="">Choose...</option>
                  <option value="seller">Seller</option>
                  <option value="owner">Shop Owner</option>
                </select>
              </div>

              {this.renderInput("identity", "رقم الهوية")}
              {this.renderInput("name", "الأسم الكامل")}
              {this.renderInput("mobile", "رقم الهاتف")}
              {this.renderInput("address", "العنوان")}
              {this.renderButton("أكمل")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddUser;
