import React  from 'react'
import Form from '../common/form';
import Joi from "joi-browser";
import http from "../../services/httpService";
import {apiUrl} from "../../config.json";

import PageHeader from "../utils/pageHeader";


class AddNewProduct extends Form{

    state={
        data:{
            categorie_id:"",
            product_title:"",
            product_description:"",
            product_price:"",
            uploadImage:null, 
        },
        errors:{},
        categories:[],
    };

    async componentDidMount(){
        const {data}  = await http.get(`${apiUrl}/categories`);
        this.setState({categories:data});
    }

    schema={
        categorie_id: Joi.required().label("Category").error(() => {
            return {
              message: 'خطأ',
            };
          }),
        product_title: Joi.string().required().label("Title").error(() => {
            return {
              message: 'خطأ',
            };
          }),
        product_description: Joi.string().required().label("Description").error(() => {
            return {
              message: 'خطأ',
            };
          }),
        product_price: Joi.string().required().label("Price").error(() => {
            return {
              message: 'خطأ',
            };
          }),
        uploadImage:Joi.required().label("uploadImage").error(() => {
            return {
              message: 'خطأ',
            };
          }), 
    };

    handleSelect = (event) => {
        let categorie_id = event.target.value;
        const {data} = this.state;
        data.categorie_id = categorie_id;
        this.setState({data});
    };

    doSubmit = async () => {
        var { data } = this.state;
        
        var bodyFormData = new FormData();
        for(const uploadImage of data.uploadImage){
            bodyFormData.append('uploadImages[]',uploadImage);
        }
        
        bodyFormData.append('categorie_id',data.categorie_id);
        bodyFormData.append('product_title',data.product_title);
        bodyFormData.append('product_description',data.product_description);
        bodyFormData.append('product_price',data.product_price);
        
        bodyFormData.forEach(elem=>console.log(elem));    
        console.log(bodyFormData);
        //console.log(data.uploadImage);
        await http.post(`${apiUrl}/seller-products`,bodyFormData);
        //this.props.history.replace("/thank-you");
       
    }

    handleFileSelected=(event)=>{
        let {data} = this.state;
        data.uploadImage = event.target.files;
        this.setState({data});
    }


    render(){
        const {categories} = this.state;

        return (
            <section >
                <div className="wrapper rounded">
                    <div className="Lcontainer">
                        <PageHeader titleText="Welcome To Our Card Web App" />
                        <form className="Lform" onSubmit={this.handleSubmit} autoComplete="off" method="POST" encType="multipart/form-data">
                            <select
                                name="categorie_id"
                                id="categorie_id"
                                className="custom-select"
                                onChange={this.handleSelect}
                                
                                >
                                <option defaultValue="">أختار التصنيف</option> 
                                    {categories.map((category)=>(
                                        <option key={category.id} value={category.id}>{category.categorie_title}</option> 
                                    ))} 
                            </select>
                            
                            {this.renderInput("product_title", "عنوان المنتج")}
                            {this.renderInput("product_description", "شرح وتفصيل عن المنتج")}
                            {this.renderInput("product_price", "السعر")}
                            <input  name="file" type="file" onChange={this.handleFileSelected} multiple/>
                            {this.renderButton("أنتهاء")} 
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
    )}
}

export default AddNewProduct;