import React from "react";
import img1 from "../../img/cars.jpg";
import img2 from "../../img/electronics.jpg";
import img3 from "../../img/pc.jpg";
import img4 from "../../img/fashion.jpg";
import img5 from "../../img/buildings.jpg";
import img6 from "../../img/sport.jpg";


const CategoryList = () => {
  return (
    <section className="page-section" id="portfolio">
    
            <div className="container-fluid p-0">
                <div className="row no-gutters">
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="#"><img className="img-fluid" src={img1} alt=""/>
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50 middleSection-Standardfont">سيارات</div>
                                <div className="project-name middleSection-Standardfont">مركبات ,قطع غيار,</div>
                            </div></a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="#"><img className="img-fluid" src={img2} alt=""/>
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50 middleSection-Standardfont">الالكترونيات</div>
                                <div className="project-name middleSection-Standardfont">هواتف, تابلت,اكسسوارات ,باور بانك</div>
                            </div></a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="#"><img className="img-fluid" src={img3} alt=""/>
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50  middleSection-Standardfont ">الكمبيوتر ومستلزماته</div>
                                <div className="project-name middleSection-Standardfont ">لبتوب,بي سي ,شاشات ,سماعات, طابعه,كاميرات</div>
                            </div></a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="#"><img className="img-fluid" src={img4} alt=""/>
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50 middleSection-Standardfont">الموضة</div>
                                <div className="project-name middleSection-Standardfont">ملابس نسائيه و رجاليه ,احذيه ,فساتين ,بدل ,اكسسوارات</div>
                            </div></a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="#"><img className="img-fluid" src={img5} alt=""/>
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50 middleSection-Standardfont">عقارات</div>
                                <div className="project-name middleSection-Standardfont">منازل , اراضي ,عقارات للأيجار,</div>
                            </div></a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="#"><img className="img-fluid" src={img6} alt=""/>
                            <div className="portfolio-box-caption p-3">
                                <div className="project-category text-white-50 middleSection-Standardfont">رياضة</div>
                                <div className="project-name middleSection-Standardfont">اجهزة رياضه ومستلزماته</div>
                            </div></a>
                    </div>
                </div>
            </div>
        
    </section>
  );
};

export default CategoryList;
