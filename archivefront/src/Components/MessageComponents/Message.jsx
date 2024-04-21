import React from "react";
import img from "../Images/meeting.png";

export default function Message() {
  return (
    <>
      <section class="blog section" id="blog">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title">
                <h2>Keep up with Our Most Recent Medical News.</h2>
                <img src="" alt="#" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit
                  praesent aliquet. pretiumts
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6 col-12">
              <div class="single-news">
                <div class="news-head">
                  <img src={img} alt="#" />
                </div>
                <div class="news-body">
                  <div class="news-content">
                    <div class="date">22 Aug, 2020</div>
                    <h2>
                      <a href="blog-single.html">
                        We have annnocuced our new product.
                      </a>
                    </h2>
                    <p class="text">
                      Lorem ipsum dolor a sit ameti, consectetur adipisicing
                      elit, sed do eiusmod tempor incididunt sed do incididunt
                      sed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
