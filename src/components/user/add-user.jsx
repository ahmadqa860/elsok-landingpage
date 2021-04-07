import React from "react";
import Joi from "joi-browser";
import userService from "../../services/userService";
import {apiUrl} from "../../config.json";
import http from "../../services/httpService";

import Form from "../common/form";
import PageHeader from "../utils/pageHeader";
import LoadingPage from "../utils/loadingPage";


class AddUser extends Form {
  
  state = {
    data: { name: "", mobile: "", address: "", city_id: "" },
    userType: "3",
    cities: [],
    errors: {},
    loading: false,
  };
  
  async componentDidMount(){
    const {data}  = await http.get(`${apiUrl}/cities`);
    this.setState({cities:data});
  }

  schema = {
    city_id: Joi.required().label("المدينة").error(() => {
      return {
        message: 'عليك أختيار التصنيف',
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
    const {data} = this.state;
    data.city_id = event.target.value;
    console.log(data);
    this.setState({ data });
  };

  doSubmit = async () => {
    try {
      let { loading } = this.state;
      const { data } = this.state;
      const { userType } = this.state;
      console.log(data);
      loading = true;
      this.setState({loading});
      await userService.registerUser(data, userType);
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
    const {cities} = this.state;
    return (

      <section id="addUser">
                <div className="wrapper rounded">
                    <div className="Lcontainer">
                    <PageHeader titleText="أدخل معلوماتك الخاصة" />
                    {!loading && (
                      <form method="POST" className="Lform" onSubmit={this.handleSubmit} autoComplete="off">
                        {this.renderInput("name", "الأسم الكامل")}
                        {this.renderInput("mobile", "رقم الهاتف")}
                        <div className="form-group">
                          <label>أختار البلد</label>
                          <select
                            name="categorie_id"
                            id="categorie_id"
                            className="custom-select"
                            onChange={this.handleSelect}
                          >
                            <option defaultValue="">أختار التصنيف</option> 
                              {cities.map((city)=>(
                                <option key={city.id} value={city._id}>{city.arb_name}</option> 
                              ))} 
                          </select>
                        </div>
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
