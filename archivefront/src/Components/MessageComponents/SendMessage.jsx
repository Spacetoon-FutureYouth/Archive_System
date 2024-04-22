import React from "react";

const SendMessage = () => {
  return (
    <div className="content">
      <div className="container">
        <div className="row align-items-stretch no-gutters contact-wrap">
          <div className="col-md-12">
            <div className="form h-100">
              <h3>Get Started</h3>
              <form
                className="mb-5"
                method="post"
                id="contactForm"
                name="contactForm"
              >
                <div className="row">
                  <div className="col-md-6 form-group mb-3">
                    <label htmlFor="name" className="col-form-label">
                      Name *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="name"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="col-md-6 form-group mb-3">
                    <label htmlFor="email" className="col-form-label">
                      Email *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your email"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12 form-group mb-3">
                    <label htmlFor="budget" className="col-form-label">
                      Budget
                    </label>
                    <select className="custom-select" id="budget" name="budget">
                      <option selected>Choose...</option>
                      <option value="$1000 below">&lt; $1,000</option>
                      <option value="$2,000 - $5,000">$2,000 - $5,000</option>
                      <option value="$5,000 - $15,000">$5,000 - $15,000</option>
                      <option value="$15,000 - $25,000">
                        $15,000 - $25,000
                      </option>
                      <option value="$25,000 >">$25,000 &gt;</option>
                    </select>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12 form-group mb-3">
                    <label htmlFor="message" className="col-form-label">
                      Message *
                    </label>
                    <textarea
                      className="form-control"
                      name="message"
                      id="message"
                      cols="30"
                      rows="4"
                      placeholder="Write your message"
                    ></textarea>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 form-group">
                    <input
                      type="submit"
                      value="Send Message"
                      className="btn btn-primary rounded-0 py-2 px-4"
                    />
                    <span className="submitting"></span>
                  </div>
                </div>
              </form>

              <div id="form-message-warning mt-4"></div>
              <div id="form-message-success">
                Your message was sent, thank you!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendMessage;
