import React from "react";
import Banner from "../../../components/common/banner/Banner";

function page() {
  return (
    <div>
      <Banner title="TESTIMONIAL!" />;
      <section class="testimonial-section-2 bg-grey padding">
        <div class="container">
          <div class="section-heading text-center mb-40">
            <h4>
              <span></span>Clients Testimonial
            </h4>
            <h2>Ridek Passenger Reviews...</h2>
            <p>
              We successfully cope with tasks of varying complexity, provide
              long-term <br /> guarantees and regularly master technologies.
            </p>
          </div>
          <div class="swiper-outside testi-pagination">
            <div class="testimonial-carousel-2 swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="testi-item">
                    <div class="quote-icon">
                      <i class="las la-quote-right"></i>
                    </div>
                    <p>
                      Good to have transportation available in places and times
                      it is otherwise hard to find, but the app has always been
                      a bit difficult to use especially how it works or doesnt
                      with large font phone settings.
                    </p>
                    <div class="testi-author">
                      <div class="author-thumb">
                        <img src="/assets/img/comment-1.png" alt="author" />
                      </div>
                      <div class="author-info">
                        <h3>
                          Eredrik Johanson <span>Financial .INC</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="testi-item">
                    <div class="quote-icon">
                      <i class="las la-quote-right"></i>
                    </div>
                    <p>
                      Good to have transportation available in places and times
                      it is otherwise hard to find, but the app has always been
                      a bit difficult to use especially how it works or doesnt
                      with large font phone settings.
                    </p>
                    <div class="testi-author">
                      <div class="author-thumb">
                        <img src="/assets/img/comment-2.png" alt="author" />
                      </div>
                      <div class="author-info">
                        <h3>
                          Mauricio Fernández <span>Financial .INC</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="testi-item">
                    <div class="quote-icon">
                      <i class="las la-quote-right"></i>
                    </div>
                    <p>
                      Good to have transportation available in places and times
                      it is otherwise hard to find, but the app has always been
                      a bit difficult to use especially how it works or doesnt
                      with large font phone settings.
                    </p>
                    <div class="testi-author">
                      <div class="author-thumb">
                        <img src="/assets/img/comment-3.png" alt="author" />
                      </div>
                      <div class="author-info">
                        <h3>
                          Javier F. Arébalo <span>Financial .INC</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-pagination text-center"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
