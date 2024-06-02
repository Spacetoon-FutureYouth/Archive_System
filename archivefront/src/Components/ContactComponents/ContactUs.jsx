
import React from 'react';

const ContactMap = () => (
  <div className="contact-us-left">
    <div id="myMap"></div>
  </div>
);

const ContactForm = () => (
  <div className="contact-us-form">
    <h2>Contact With Us</h2>
    <p>If you have any questions please feel free to contact with us.</p>
    <form className="form" method="post" action="mail/mail.php">
      <div className="row">
        <div className="col-lg-6">
          <div className="form-group">
            <input type="text" name="name" placeholder="Name" required="" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-group">
            <input type="email" name="email" placeholder="Email" required="" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-group">
            <input type="text" name="phone" placeholder="Phone" required="" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-group">
            <input type="text" name="subject" placeholder="Subject" required="" />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="form-group">
            <textarea name="message" placeholder="Your Message" required=""></textarea>
          </div>
        </div>
        <div className="col-12">
          <div className="form-group login-btn">
            <button className="btn" type="submit">Send</button>
          </div>
          <div className="checkbox">
            <label className="checkbox-inline" htmlFor="2">
              <input name="news" id="2" type="checkbox" />
              Do you want to subscribe to our Newsletter?
            </label>
          </div>
        </div>
      </div>
    </form>
  </div>
);

const SingleInfo = ({ icon, title, description }) => (
  <div className="col-lg-4 col-12">
    <div className="single-info">
      <i className={icon}></i>
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  </div>
);

const ContactInfo = () => (
  <div className="contact-info">
    <div className="row">
      <SingleInfo
        icon="icofont icofont-ui-call"
        title="+(000) 1234 56789"
        description="info@company.com"
      />
      <SingleInfo
        icon="icofont-google-map"
        title="2 Fire Brigade Road"
        description="Chittagonj, Lakshmipur"
      />
      <SingleInfo
        icon="icofont icofont-wall-clock"
        title="Mon - Sat: 8am - 5pm"
        description="Sunday Closed"
      />
    </div>
  </div>
);

const ContactUs = () => (
  <>
    <section className="contact-us section">
      <div className="container">
        <div className="inner">
          <div className="row">
            <div className="col-lg-6">
              <ContactMap />
            </div>
            <div className="col-lg-6">
              <ContactForm />
            </div>
          </div>
        </div>
        <ContactInfo />
      </div>
    </section>
  </>
);

import React from "react";

function ContactUs() {
  return (
    <>
      {/* Start Contact Us */}
      <section id="contactus" className="contact-us section">
        <div className="container">
          <div className="inner">
            <div className="row">
              <div className="col-lg-6">
                <div className="contact-us-left">
                  {/*Start Google-map */}
                  <div id="myMap"></div>
                  {/*/End Google-map */}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-us-form">
                  <h2>Contact With Us</h2>
                  <p>
                    If you have any questions please fell free to contact with
                    us.
                  </p>
                  {/* Form */}
                  <form className="form" method="post" action="mail/mail.php">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          {/* <input type="email" name="email" placeholder="Email" required="" /> */}
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="phone"
                            placeholder="Phone"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <textarea
                            name="message"
                            placeholder="Your Message"
                            required=""
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group login-btn">
                          <button className="btn" type="submit">
                            Send
                          </button>
                        </div>
                        <div className="checkbox">
                          {/* <label className="checkbox-inline" for="2"><input name="news" id="2" type="checkbox">Do you want to subscribe our Newsletter ?</input></label> */}
                        </div>
                      </div>
                    </div>
                  </form>
                  {/*/ End Form */}
                </div>
              </div>
            </div>
          </div>
          {/* need to be seperate */}
          <div className="contact-info">
            <div className="row">
              {/* single-info */}
              <div className="col-lg-4 col-12 ">
                <div className="single-info">
                  <i className="icofont icofont-ui-call"></i>
                  <div className="content">
                    <h3>+(000) 1234 56789</h3>
                    <p>info@company.com</p>
                  </div>
                </div>
              </div>
              {/*/End single-info */}
              {/* single-info */}
              <div className="col-lg-4 col-12 ">
                <div className="single-info">
                  <i className="icofont-google-map"></i>
                  <div className="content">
                    <h3>2 Fir e Brigade Road</h3>
                    <p>Chittagonj, Lakshmipur</p>
                  </div>
                </div>
              </div>
              {/*/End single-info */}
              {/* single-info */}
              <div className="col-lg-4 col-12 ">
                <div className="single-info">
                  <i className="icofont icofont-wall-clock"></i>
                  <div className="content">
                    <h3>Mon - Sat: 8am - 5pm</h3>
                    <p>Sunday Closed</p>
                  </div>
                </div>
              </div>
              {/*/End single-info */}
            </div>
          </div>
        </div>
      </section>
      {/*/ End Contact Us */}
    </>
  );
}


export default ContactUs;
