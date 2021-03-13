import React from "react";
import { Link } from "react-router-dom";
import "../css/footer.css";

const Footer = () => {
  return (
    <React.Fragment>
      
    <footer className="page-footer font-small stylish-color-dark page-section footerBgColor">
      <div className="container text-center text-md-left">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <h5 className="font-weight-bold text-uppercase mt-3 mb-4 middleSection-Standardfont">
              عزيزي المستخدم
            </h5>
            <h6 className="middleSection-Standardfont">
            قم بتسجيل الدخول إلى موقعنا,حتى تتيح لنفسك العديد من خدمات الإعلان والتسويق الإلكتروني لمحتوى متخصص بالخدمات ومختلف المجالات التي تتعلّق بالبحث عن وظائف وبيع وشراء السلع والمنتجات الكافة بالتواصل المباشر مع الفئات المستهدفة عن طريق رسائل الدردشة والاتصال الهاتفي .
            </h6>
          </div>

          <hr className="clearfix w-100 d-md-none" />

          <div className="col-md-4 mx-auto">
            <h5 className="font-weight-bold text-uppercase mt-3 mb-4 middleSection-Standardfont">
            طموحاتنا المستقبلية 
            </h5>
            <h6 className="middleSection-Standardfont"> 
            في موقعنا يمكنك إدارة حانوتك الخاصة بك ، كما يمكنك مشاركة موقعك الإلكتروني مع الآخرين ، وفتح حساب جديد كعمل تجاري والبدء ، يمكنك إضافة وتحرير وإرسال بطاقاتك للمستخدمين الآخرين مما يفتح لك مجال للبيع اكبر
            </h6>
          </div>

          <hr className="clearfix w-100 d-md-none" />
        </div>
      </div>

      <hr />
      
      <ul className="list-unstyled list-inline text-center">
        <li className="list-inline-item">
          <Link to="#" className="btn-floating btn-fb mx-1">
            <i className="fab fa-facebook-f"></i>
          </Link>
          يمكنك التواصل معنا في صفحتنا على الفيسبوك او البريد الالكتروني 
        </li>
      </ul>

      <div className="footer-copyright text-center py-3 middleSection-Standardfont" >جميع الحقوق محفوظة لموقع السوق © 2021 </div>
    </footer>
    </React.Fragment>
  );
};

export default Footer;
