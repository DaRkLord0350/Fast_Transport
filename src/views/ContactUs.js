import React from "react";
import "./contactus.css";
// import FacebookIcon from '@mui/icons-material/Twitter';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import TwitterIcon from '@mui/icons-material/Twitter';


export default function ContactUs() {
  return (
    <>
       <section className="contact_us">
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <div className="contact_inner">
                  <div className="row">
                    <div className="col-md-10">
                      <div className="contact_form_inner">
                        <div className="contact_field">
                          <h3>Contact Us</h3>
                          <p>Feel Free to contact us any time. We will get back to you as soon as we can!.</p>
                          <img className="d-block w-100" src="van.png" alt="Second slide" style={{height: "auto"}}/>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="right_conatct_social_icon d-flex align-items-end">
                        <div className="socil_item_inner d-flex">
                          {/* <li><a href="#"> <FacebookIcon /> </a></li>
                          <li><a href="#"><InstagramIcon/></a></li>
                          <li><a href="#"><TwitterIcon /></a></li> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="contact_info_sec">
                    <h4>Contact Info</h4>
                    <div className="d-flex info_single align-items-center">
                      <i className="fas fa-headset" />
                      <span>7903262197</span>
                    </div>
                    <div className="d-flex info_single align-items-center">
                      <i className="fas fa-envelope-open-text" />
                      <span>anshumanjha0350@gmail.com</span>
                    </div>
                    <div className="d-flex info_single align-items-center">
                      <i className="fas fa-map-marked-alt" />
                      <span> NIT Durgapur, Mahatma Gandhi Avenue, Durgapur - 713209, West Bengal, India</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="map_sec">
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <div className="map_inner">
                  <h4>Find Us on Google Map</h4>
                  <div className="map_bind">
                    <iframe src="https://maps.google.com/maps?q=cdac mumbai khargar&t=&z=10&ie=UTF8&iwloc=&output=embed" width="100%" height={450} frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

  
    </>
  );
}
