import React from "react";
import Logo from "../../img/logo/ElsokLogo.svg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3 navbar-scrolled" id="mainNav">
        <div className="container">
            <a className="navbar-brand js-scroll-trigger navbar-brand d-none d-sm-block me-4" href="#page-top"><img src={Logo} width="85" alt="Elsok" /></a>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto my-2 my-lg-0">
                    <li className="nav-item"><a className="nav-link js-scroll-trigger active" href="#entry">البداية</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#services">خَدَماتنا</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#portfolio">التصنيفات</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#signup">سجل حسابك</a></li>
                </ul>
                
            </div>
        </div>
    </nav>
  );
};

export default Navbar;
