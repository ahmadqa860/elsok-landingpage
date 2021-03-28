import React,{Component} from "react";
import Logo from "../../img/logo/ElsokLogo.svg";

import userInfo from "../../services/userService";
import http from "../../services/httpService";
import { apiUrl } from "../../config.json";

class Navbar extends Component{

  state = {
    user: "",
    valid: "",
  };

  async componentDidMount() {
    if (userInfo.hasToken()) {
      const { data } = await http.get(`${apiUrl}/user/profile`);
      this.setState({ user: data });
    } else {
      this.setState({ user: false });
    }
  }

  render(){
      const {user} = this.state;
    return (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3 navbar-scrolled" id="mainNav">
          <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top"><img src={Logo} width="85" alt="Elsok" /></a><button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav ml-auto my-2 my-lg-0">
                      <li className="nav-item"><a className="nav-link js-scroll-trigger active" href="#entry">البداية</a></li>
                      <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#services">خَدَماتنا</a></li>
                      <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#portfolio">التصنيفات</a></li>
                      {!user && (
                      <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#signup">سجل حسابك</a></li>
                      )}
                      {user && (
                        <React.Fragment>
                          <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">مرحبا بك {user.name}</a></li>
                          <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/add-product#addProduct">أضف منتج جديد</a></li>
                        </React.Fragment>
                      )}
                  </ul>
                  
              </div>
          </div>
      </nav>
    );
  };
};


export default Navbar;
