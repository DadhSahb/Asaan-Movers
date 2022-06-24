import React, { useState } from "react";
import heroImage from "../img/hero/h1_hero.jpg";
import supportImg from "../../../images/support.png";
import clockImg from "../../../images/clock.png";
import locationImg from "../../../images/meeting-point.png";
import movingHomeImg from "../../../images/moving-home.png";
import shipedImg from "../../../images/shipped.png";
import warehouseImg from "../../../images/warehouse.png";
import aboutImg from "./../img/gallery/about2.png";
import "./styles.css";
import { useEffect } from "react";
import NavBar from "./Navbar";
import Footer from "./footer";
import Top from "./top";
import axios from "axios";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
function Index() {
  const [me, setMe] = useState([]);
  const token = localStorage.getItem("customer-auth-token");

  const getMe = async () => {
    await axios
      .get("http://localhost:5000/api/customers/me", {
        headers: { "customer-auth-token": token },
      })
      .then((response) => {
        setMe(response.data);
      });
  };
  useEffect(() => {
    getMe();
  }, []);
  return (
    <React.Fragment>
      <Top />
      <NavBar />
      <main>
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src={heroImage}
                alt="First slide"
              />
            </div>
            <div className="herodata carousel single-slider slider-height d-flex align-items-center">
              <div className="container">
                <div className="row">
                  <div className="col-xl-9 col-lg-9">
                    <div className="hero__caption">
                      <h1>
                        Safe & Reliable <span>Logistic</span> <br />
                        Solutions!
                      </h1>
                    </div>
                    <form action="#" className="search-box">
                      <div className="input-form">
                        <Link to={me.name ? "/" : "/userlogin"}>
                          <input
                            type="submit"
                            value={me.name ? me.name : "Sign In"}
                          />
                        </Link>
                      </div>
                    </form>
                    <div className="hero-peraa">
                      <p>For Warehousing and Relocation service</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="our-info-area pt-70 pb-40">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-info mb-30">
                  <div className="info-icon">
                    <span>
                      <img className="flaticon-support" src={supportImg}></img>
                    </span>
                  </div>
                  <div className="info-caption">
                    <p>Call Us Anytime</p>
                    <span>+ (123) 1800-567-8990</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-info mb-30">
                  <div className="info-icon">
                    <span>
                      <img className="flaticon-clock" src={clockImg} />
                    </span>
                  </div>
                  <div className="info-caption">
                    <p>Sunday CLOSED</p>
                    <span>Mon - Sat 8.00 - 18.00</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-info mb-30">
                  <div className="info-icon">
                    <span>
                      <img className="flaticon-place" src={locationImg} />
                    </span>
                  </div>
                  <div className="info-caption">
                    <p>Pakistan</p>
                    <span>PK, Karachi - 10620</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="categories-area section-padding30">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-tittle text-center mb-80">
                  <span>Our Services</span>
                  <h2>What We Can Do For You</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-cat text-center mb-50">
                  <div className="cat-icon">
                    <span className="flaticon-shipped">
                      <img src={shipedImg} />
                    </span>
                  </div>
                  <div className="cat-cap">
                    <Link to="/localrelocation" className="linkk">
                      <h5>
                        <a>Local Relocation</a>
                      </h5>
                    </Link>
                    <p>
                      We provide local relocation with real time tracking and
                      all the things are under your finger tips without any
                      worry.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-cat text-center mb-50">
                  <div className="cat-icon">
                    <span className="flaticon-ship">
                      <img src={movingHomeImg} />
                    </span>
                  </div>
                  <div className="cat-cap">
                    <Link to="/domesticrelocation" className="linkk">
                      <h5>
                        <a>Domestic Relocation</a>
                      </h5>
                    </Link>
                    <p>
                      Changing home or offices is really a headache. But dont
                      worry Asaan Movers are providing relocation service in
                      which we take care of your stuff and relocate it from your
                      location to your desired location.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-cat text-center mb-50">
                  <div className="cat-icon">
                    <span className="flaticon-plane">
                      <img src={warehouseImg} />
                    </span>
                  </div>
                  <div className="cat-cap">
                    <Link to="/warehouseing" className="linkk">
                      <h5>
                        <a>Ware-Housing</a>
                      </h5>
                    </Link>
                    <p>
                      Assan Movers provide warehousing service in which you can
                      store your important stuff and handover us we will store
                      it accordingly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-low-area padding-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="about-caption mb-50">
                  <div className="section-tittle mb-35">
                    <span>About Our Company</span>
                    <h2>
                      Safe Logistic & Transport Solutions That Saves our
                      Valuable Time!
                    </h2>
                  </div>
                  <p>
                    Asaan Movers Provides easy and relaible services to their
                    cutomers with real time tracking. If you want to move from
                    anywhere locally or domestically witin or with in country,
                    the Asaan Movers provides all the services related to that
                    purpose.
                  </p>
                  <Link to="/about">
                    <a className="aboutbtn">More About Us</a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="about-img ">
                  <div className="about-font-img">
                    <img src={aboutImg} alt="" />
                  </div>
                  <div className="about-back-img d-none d-lg-block">
                    <img src="assets/img/gallery/about1.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="testimonial-area testimonial-padding section-bg"
          data-background="assets/img/gallery/section_bg04.jpg"
        >
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-7 col-lg-7">
                <div className="section-tittle section-tittle2 mb-25">
                  <span>Clients Testimonials</span>
                  <h2>What Our Clients Say!</h2>
                </div>
                <div className="h1-testimonial-active mb-70">
                  <div className="single-testimonial ">
                    <div className="testimonial-caption ">
                      <div className="testimonial-top-cap">
                        <p>
                          Assan Movers provide customer services with great
                          quality and reliablity. And it never disappint their
                          custmers.
                        </p>
                      </div>

                      <div className="testimonial-founder d-flex align-items-center">
                        <div className="founder-img">
                          <img
                            src="assets/img/gallery/Homepage_testi.png"
                            alt=""
                          />
                        </div>
                        <div className="founder-text">
                          <span>Ahsan</span>
                          <p>Professor</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="single-testimonial ">
                    <div className="testimonial-caption ">
                      <div className="testimonial-top-cap">
                        <p>Best possible solution of logistics indeed.</p>
                      </div>

                      <div className="testimonial-founder d-flex align-items-center">
                        <div className="founder-img">
                          <img
                            src="assets/img/gallery/Homepage_testi.png"
                            alt=""
                          />
                        </div>
                        <div className="founder-text">
                          <span>Ayesha</span>
                          <p>House-Wife</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-5 col-md-8">
                <div className="testimonial-form text-center">
                  <h3>Always listening, always understanding.</h3>
                  <input type="text" placeholder="Type" />
                  <button name="submit" className="submit-btn">
                    Submit your review
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <div id="back-top">
        <a title="Go to Top" href="#">
          {" "}
          <i className="fas fa-level-up-alt"></i>
        </a>
      </div>
    </React.Fragment>
  );
}

export default Index;
