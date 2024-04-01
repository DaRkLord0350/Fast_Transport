import { useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import "./Welcome.css";
import { Link } from "react-router-dom";
import { showLoading } from "../api/Alert";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Header from "../layout/Header.js";
import title from "../images/title.png";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.js";

export default function Welcome() {
  let navigate = useNavigate();
  const authenticate = () => {
    navigate("/TransporterReg");
  };

  return (
    <>
      <div>
        <Header />
        <Carousel>
          <Carousel.Item interval={5000}>
            <img className="d-block w-100" src="sliderbg.jpg" alt="First slide" />
           
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              className="d-block w-100" src="6.jpg" alt="Second slide" />
            
          </Carousel.Item>
        </Carousel>
      </div>

      <div>
        <div
          className="steps-section"style={{backgroundImage:"url(pattern3.png)"}}
        >
          <div className="auto-container">
            <div className="sec-title centered">
              <div className="title" style={{ fontSize: "25px" }}>
                How It Work
              </div>
              <p
                style={{ color: "black", fontWeight: "500", fontSize: "40px" }}
              >
                Easy 1, 2, 3 Step To Task
              </p>
             
            </div>
            <div className="inner-container">
              <div className="row clearfix">
               
                <div className="step-block col-lg-3 col-md-5 col-sm-12">
                  <div
                    className="inner-box step-section-v7 wow fadeInLeft"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="icon-outer">
                      <div className="icon-box">
                        <img
                          src="11.png"
                          alt="First slide"
                          style={{ width: "125px" }}
                        />
                        <span className="icon">
                          <i
                            aria-hidden="true"
                            className="flaticonv7 flaticonv7-product"
                          />{" "}
                        </span>
                      </div>
                    </div>
                    <h5>Enter Your &amp; Product Details</h5>
                  </div>
                </div>

            
                <div className="step-block col-lg-2  col-md-4 col-sm-12">
                  <div
                    className="inner-box step-section-v7 wow fadeInLeft"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="icon-outer">
                      <div className="icon-box">
                        <img
                          src="a1.png"
                          alt="First slide"
                          style={{ width: "50px", marginTop: "40px" }}
                        />
                        <span className="icon">
                          <i
                            aria-hidden="true"
                            className="flaticonv7 flaticonv7-wallet"
                          />{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

           
                <div className="step-block col-lg-2 col-md-4 col-sm-12">
                  <div
                    className="inner-box step-section-v7 wow fadeInLeft"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="icon-outer">
                      <div className="icon-box">
                        <img
                          src="13.png"
                          alt="First slide"
                          style={{ width: "125px" }}
                        />
                        <span className="icon">
                          <i
                            aria-hidden="true"
                            className="flaticonv7 flaticonv7-wallet"
                          />{" "}
                        </span>
                      </div>
                    </div>
                    <h5>Select Transporter</h5>
                  </div>
                </div>

                {/* Step Block */}
                <div className="step-block col-lg-2  col-md-4 col-sm-12">
                  <div
                    className="inner-box step-section-v7 wow fadeInLeft"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="icon-outer">
                      <div className="icon-box">
                        <img
                          src="a1.png"
                          alt="First slide"
                          style={{ width: "50px", marginTop: "40px" }}
                        />
                        <span className="icon">
                          <i
                            aria-hidden="true"
                            className="flaticonv7 flaticonv7-wallet"
                          />{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step Block */}
                <div className="step-block col-lg-3 col-md-5 col-sm-12">
                  <div
                    className="inner-box step-section-v7 wow fadeInLeft"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="icon-outer">
                      <div className="icon-box">
                        <img
                          src="12.png"
                          alt="First slide"
                          style={{ width: "125px" }}
                        />
                        <span className="icon">
                          <i
                            aria-hidden="true"
                            className="flaticonv7 flaticonv7-tick"
                          />{" "}
                        </span>
                      </div>
                    </div>
                    <h5>Ready To Go Your Goods</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div>
        <div
          className="feature-section"
          style={{
            backgroundImage:
              "url(pattern6.jpg)",
          }}
        >
          <div className="auto-container">
            {/* Sec Title */}
            <div className="sec-title light centered">
              <div className="title" style={{ fontSize: "25px" }}>
                Our Features
              </div>
              <p
                style={{ color: "white", fontWeight: "500", fontSize: "40px" }}
              >
                Why Choose Us!
              </p>
            
            </div>
            <div className="row clearfix">
              {/* Feature Block Two */}
              <div className="feature-block-two col-lg-3 col-md-6 col-sm-12">
                <div
                  className="inner-box wow fadeInLeft"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div className="icon">
                    <img
                      src="s1.jpg"
                      alt="Second slide"
                      style={{ height: "auto" }}
                    />
                  </div>
                  <h6>User Friendly</h6>
                  <div className="text">
                    Do eiusmod tempor incididunt ut labore et dolore aliqua.
                  </div>
                </div>
              </div>
              {/* Feature Block Two */}
              <div className="feature-block-two col-lg-3 col-md-6 col-sm-12">
                <div
                  className="inner-box wow fadeInLeft"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div className="icon">
                    <img src="s2.jpg" alt="Second slide" />
                  </div>
                  <h6>Transparent Pricing</h6>
                  <div className="text">
                    Do eiusmod tempor incididunt ut labore et dolore aliqua.
                  </div>
                </div>
              </div>
              {/* Feature Block Two */}
              <div className="feature-block-two col-lg-3 col-md-6 col-sm-12">
                <div
                  className="inner-box wow fadeInLeft"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div className="icon">
                    <img src="s3.jpg" alt="Second slide" />
                  </div>
                  <h6>Right Time Delivery</h6>
                  <div className="text">
                    We are known for our service. We make sure that it is on
                    time!
                  </div>
                </div>
              </div>
              {/* Feature Block Two */}
              <div className="feature-block-two col-lg-3 col-md-6 col-sm-12">
                <div
                  className="inner-box wow fadeInLeft"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div className="icon">
                    <img src="s1.jpg" alt="Second slide" />
                  </div>
                  <h6>Fastest Shipping</h6>
                  <div className="text">
                    Do eiusmod tempor incididunt ut labore et dolore aliqua.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
