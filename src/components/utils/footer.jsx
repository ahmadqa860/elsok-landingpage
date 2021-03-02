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
            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
              Visitor
            </h5>
            <h6>
            قم بتسجيل الدخول إلى موقعنا,حتى تتيح لنفسك العديد من خدمات الإعلان والتسويق الإلكتروني لمحتوى متخصص بالخدمات ومختلف المجالات التي تتعلّق بالبحث عن وظائف وبيع وشراء السلع والمنتجات كافة بالتواصل المباشر مع الفئات المستهدفة عن طريق رسائل الدردشة والاتصال الهاتفي والتعليقات.
            </h6>
          </div>

          <hr className="clearfix w-100 d-md-none" />

          <div className="col-md-4 mx-auto">
            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
              Business User
            </h5>
            <h6>
            في موقعنا يمكنك إدارة بطاقة العمل الخاصة بك ، كما يمكنك مشاركة بطاقتك مع الآخرين ، وفتح حساب جديد كعمل تجاري والبدء ، يمكنك إضافة وتحرير وإرسال بطاقاتك للمستخدمين الآخرين مما يفتح لك مجال للبيع اكبر

            </h6>
          </div>

          <hr className="clearfix w-100 d-md-none" />
        </div>
      </div>

      <hr />

      <ul className="list-unstyled list-inline text-center py-2">
        <li className="list-inline-item">
          <h5 className="mb-1">Register for free</h5>
        </li>
        <li className="list-inline-item">
          <Link to="/signup" className="btn btn-danger btn-rounded">
            Sign up!
          </Link>
        </li>
      </ul>

      <hr />

      <ul className="list-unstyled list-inline text-center">
        <li className="list-inline-item">
          <Link to="#" className="btn-floating btn-fb mx-1">
            <i className="fab fa-facebook-f"> </i>
          </Link>
        </li>
        <li className="list-inline-item">
          <Link to="#" className="btn-floating btn-tw mx-1">
            <i className="fab fa-twitter"> </i>
          </Link>
        </li>
        <li className="list-inline-item">
          <Link to="#" className="btn-floating btn-gplus mx-1">
            <i className="fab fa-google-plus-g"> </i>
          </Link>
        </li>
        <li className="list-inline-item">
          <Link to="#" className="btn-floating btn-li mx-1">
            <i className="fab fa-linkedin-in"> </i>
          </Link>
        </li>
        <li className="list-inline-item">
          <Link to="#" className="btn-floating btn-dribbble mx-1">
            <i className="fab fa-dribbble"> </i>
          </Link>
        </li>
      </ul>

      <div className="footer-copyright text-center py-3">© 2020 Copyright:</div>
    </footer>
    </React.Fragment>
  );
};

export default Footer;
