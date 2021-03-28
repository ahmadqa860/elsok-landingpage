import React from "react";
import PageHeader from "../components/utils/pageHeader";

const ThankYou = () => {

  const mystyle = {
    width:"120px",
    backgroundColor: "#1416bd",
    padding: "10px",
    fontFamily: "Arial"
  };

  const nav=()=>{
    setTimeout(function() {
      window.location = "/";

    }, 5000);
  }

  return (
  <section id="thankYou">
    <div className="wrapper rounded">
        <div className="Lcontainer">
            <PageHeader titleText="شكرا لك على أشتراكك في موقعنا السوق"/>
            <h3  className="middleSection-Standardfont text-blue">ترقب افتتاح موقعنا الرئيسي قريبا </h3>
            <h3 onClick={nav()} className="middleSection-Standardfont text-blue">يمكنك أضافة منتوجات أخرى الى حسابك الخاص </h3>
            <h3 onClick={nav()} className="middleSection-Standardfont text-blue">نعمل بجهد لنطور موقعنا السوق ليلائم احتياجاتكم ولكم كامل الشكر والتقدير من فريق السوق.</h3>
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

  

};

export default ThankYou;
