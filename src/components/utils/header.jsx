import React from "react";
import "../css/header.css";

const Header = () => {
  return (
    <header className="masthead">
            <div className="container h-100">
                <div className="row h-100 align-items-center justify-content-center text-center">
                    <div className="col-lg-8 align-self-baseline mt-500">
                        <a className="btn btn-primary btn-xl js-scroll-trigger" href="#entry">أكمل</a>
                    </div>
                </div>
            </div>
    </header>
  );
};

export default Header;
