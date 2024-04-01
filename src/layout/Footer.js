import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer class="bg-dark bg-gradient text-white pt-5 pb-4 shadow">
        <div class="container text-center text-md-left">
          <div class="row text-center text-md-left">
            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold text-warning">
                <i class="fas fa-paw"></i>
                transportation
              </h5>
              <p style={{ color: "white" }}>
                A platform for all transportation, the movement of goods and
                persons from place to place and the various means by which such
                movement is accomplished. !!!
              </p>
            </div>

            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold text-warning">
                Cities
              </h5>
              <p>
                <a href="#" class="text-white">
                  Pune
                </a>
                <br />
                <a href="#" class="text-white">
                  Mumbai
                </a>{" "}
                <br />
                <a href="#" class="text-white">
                  Durgapur
                </a>
                <br />
                <a href="#" class="text-white">
                  Bihar
                </a>
              </p>
            </div>

            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold text-warning">
                Useful links
              </h5>
              <p>
                <Link to="/Welcome" class="text-white">
                  HOME
                </Link>
              </p>
              <p>
                <Link to="/login" class="text-white">
                  PROFILE
                </Link>
              </p>
              <p>
                <Link to="/FeedbackForm" class="text-white">
                  FEEDBACK
                </Link>
              </p>
            </div>

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold text-warning">
                Contact
              </h5>
              <p>
                <i class="fa fa-home mr-3"></i>NIT Durgapur
              </p>
              <p>
                <i class="fa fa-envelope mr-3"></i>examanshu@gmail@gmail.com
              </p>
              <p>
                <i class="fa fa-phone mr-3"></i>+91 7903262197
              </p>
            </div>
          </div>

          <hr class="mb-4" />

          <div
            style={{ justifyContent: "center" }}
            class="row align-items-center"
          >
            <div
              class="col-md-7 col-lg-12 m-auto"
              style={{ justifyContent: "center" }}
            >
              <p>
                Copyright ©2023 All rights reserved by:
                <a href="#">
                  <strong class="text-warning col-sm m-auto">
                    NIT DGP
                  </strong>
                  <div className="d-flex flex-row-reverse">
                    <i class="fa-brands fa-square-facebook"></i>

                    <i class="fab fa-instagram"></i>

                    <i class="fab fa-twitter"></i>
                  </div>
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
