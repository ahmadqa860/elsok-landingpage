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
              Sign in to our site and get all the Business Cards that you need,
              our service is to connect you for all your needs
            </h6>
          </div>

          <hr className="clearfix w-100 d-md-none" />

          <div className="col-md-4 mx-auto">
            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
              Business User
            </h5>
            <h6>
              In our site you can manage your Business Card, also you can share
              your card with others, Open a new account as business and start,
              you can add, edit, and send your cards for other users
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
