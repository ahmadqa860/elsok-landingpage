import React from "react";
import img1 from "../../img/portfolio/thumbnails/1.jpg";


const CategoryList = () => {
  return (
    <div id="portfolio" >
            <div className="container-fluid p-0">
                <div className="row no-gutters">
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="assets/img/portfolio/fullsize/1.jpg"><img className="img-fluid" src={img1} alt=""/>
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">سيارات</div>
                                <div className="project-name">مركبات ,قطع غيار,</div>
                            </div></a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="assets/img/portfolio/fullsize/2.jpg"><img className="img-fluid" src={img1} alt=""/>
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">الالكترونيات</div>
                                <div className="project-name">هواتف, تابلت,اكسسوارات ,باور بانك</div>
                            </div></a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="assets/img/portfolio/fullsize/3.jpg"><img className="img-fluid" src={img1} alt=""/>
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">الكمبيوتر ومستلزماته</div>
                                <div className="project-name">لبتوب,بي سي ,شاشات ,سماعات, طابعه,كاميرات</div>
                            </div></a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="assets/img/portfolio/fullsize/4.jpg"><img className="img-fluid" src={img1} alt=""/>
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">الموضة</div>
                                <div className="project-name">ملابس نسائيه و رجاليه ,احذيه ,فساتين ,بدل ,اكسسوارات</div>
                            </div></a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="assets/img/portfolio/fullsize/5.jpg"><img className="img-fluid" src={img1} alt=""/>
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">عقارات</div>
                                <div className="project-name">منازل , اراضي ,عقارات للأيجار,</div>
                            </div></a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="assets/img/portfolio/fullsize/6.jpg"><img className="img-fluid" src={img1} alt=""/>
                            <div className="portfolio-box-caption p-3">
                                <div className="project-category text-white-50">رياضة</div>
                                <div className="project-name">اجهزة رياضه ومستلزماته</div>
                            </div></a>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default CategoryList;
