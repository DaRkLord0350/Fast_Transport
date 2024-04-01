import React from "react";
import { Link } from "react-router-dom";
import termss from "../images/Truck.jpeg";
import Header from "../layout/Header.js";
import "./Terms.css";

function Terms() {
  return (
    <>
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
              <div className="inner-column">
                <div className="sec-title">
                  <h1>LOW COST TRANSPORTATION</h1>

                  <hr />
                  <h2>Our Mission</h2>
                </div>
                <div className="text">
                  Our mission is to provide low cost transportation to each and
                  every shipement and to provide Business to all the
                  transporters across INDIA. About 6% of India’s GDP can easily
                  be attributed to road transportation. Sadly, the road
                  transport industries are affected by inefficient services and
                  dangers such as, corruption, accidents and poor services. A
                  key factor in all businesses is the equation of trust.
                  Unfortunately, most companies do not have a good performance
                  record of credibility and trust, specially with regards to
                  providing new technological facilities like package tracking,
                  route update, logistic management, and so on.
                </div>
                <div className="btn-box">
                  <a href="/Contactus" className="theme-btn btn-style-one">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            {/* Image Column */}
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column wow fadeInLeft">
                <div className="author-desc">
                  <h2>FasTrans</h2>
                  <span>LOW COST TRANSPORTATION</span>
                </div>
                <figure className="image-1">
                  <a href="#" className="lightbox-image" data-fancybox="images">
                    <img
                      title="Team 20"
                      src="3.jpeg"
                      alt=""
                    />
                  </a>
                </figure>
              </div>
            </div>
          </div>
          <div className="sec-title">
            <span className="title">Our Future Goal</span>
            <h2>Our Vision</h2>
          </div>
          <div className="text">
            To become the number 1 choice for Transportation in INDIA.
          </div>
          <div className="text">
            We bring together the Transporters and the Customers with the help
            of Technology that help them to grow .
          </div>
          <div className="text">
            In the end, I would say keep visiting our website and enjoy the
            quality Service.
          </div>
        </div>
      </section>
    </>
  );
}
export default Terms;
