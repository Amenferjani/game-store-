import BannerZero from "./banner-0.jpg";
import BannerOne from "./banner-1.jpg";
import BannerTwo from "./banner-2.jpg";


import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import '../App.css'

function BannerIndicator(props) {

  return (
    <button
      type="button"
      data-bs-target="#bannerIndicators"
      data-bs-slide-to={props.index}
      className={props.active ? "active" : ""}
      aria-current={props.active}
    />
  );
}

function BannerImage(props) {

  return (
    <div
      className={"carousel-item " + (props.active ? "active" : "")}
      data-bs-interval="5000"
    >
      <div
        className="ratio"
        style={{ "--bs-aspect-ratio": "50%", maxHeight: "460px" }}
      >
        <img
          className="d-block w-100 h-100 bg-dark cover"
          alt=""
          src={props.image}
        />
      </div>
      <div className="carousel-caption d-none d-lg-block">
        <h3 className="text-light">AIM 4 Games</h3>
        <h5 className="text-danger" >find the best games that ever made .</h5>
      </div>
    </div>
  );
}

function Banner() {
  return (
    <div
      id="bannerIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
      style={{ marginTop: "56px" }}
    >
      <div className="carousel-indicators">
        <BannerIndicator index="0" active={true} />
        <BannerIndicator index="1" />
        <BannerIndicator index="2" />
      </div>
      <div className="carousel-inner">
        <BannerImage image={BannerZero} active={true}/>
        <BannerImage image={BannerOne}/>
        <BannerImage image={BannerTwo}/>
      </div>
    </div>
  );
}

export default Banner;
