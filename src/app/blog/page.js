import React from "react";
import Banner from "../../components/common/banner/Banner";

function page() {
  return (
    <div>
      <Banner title="BLOG GRID!" />
      <section class="blog-section blog-page bg-grey padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 sm-padding">
              <div class="row grid-post">
                <div class="col-md-6 padding-15">
                  <div class="post-card">
                    <div class="post-thumb">
                      <img src="/assets/img/post-1.jpg" alt="post" />
                      <a href="blog-details.html" class="post-category">
                        Business
                      </a>
                    </div>
                    <div class="post-content-wrap">
                      <ul class="post-meta">
                        <li>
                          <i class="las la-calendar"></i>Jan 01 2022
                        </li>
                        <li>
                          <i class="las la-user"></i>Elliot Alderson
                        </li>
                      </ul>
                      <div class="post-content">
                        <h3>
                          <a href="blog-details.html" class="hover">
                            How to Start initiating an startup in few days.
                          </a>
                        </h3>
                        <p>
                          Financial experts support or help you to to find out
                          which way you can raise your funds more...
                        </p>
                        <a href="blog-details.html" class="read-more">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 padding-15">
                  <div class="post-card">
                    <div class="post-thumb">
                      <img src="/assets/img/post-2.jpg" alt="post" />
                      <a href="blog-details.html" class="post-category">
                        Startup
                      </a>
                    </div>
                    <div class="post-content-wrap">
                      <ul class="post-meta">
                        <li>
                          <i class="las la-calendar"></i>Jan 01 2022
                        </li>
                        <li>
                          <i class="las la-user"></i>Elliot Alderson
                        </li>
                      </ul>
                      <div class="post-content">
                        <h3>
                          <a href="blog-details.html">
                            Financial experts support help you to find out.
                          </a>
                        </h3>
                        <p>
                          Financial experts support or help you to to find out
                          which way you can raise your funds more...
                        </p>
                        <a href="blog-details.html" class="read-more">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 padding-15">
                  <div class="post-card">
                    <div class="post-thumb">
                      <img src="/assets/img/post-3.jpg" alt="post" />
                      <a href="blog-details.html" class="post-category">
                        Finance
                      </a>
                    </div>
                    <div class="post-content-wrap">
                      <ul class="post-meta">
                        <li>
                          <i class="las la-calendar"></i>Jan 01 2022
                        </li>
                        <li>
                          <i class="las la-user"></i>Elliot Alderson
                        </li>
                      </ul>
                      <div class="post-content">
                        <h3>
                          <a href="blog-details.html">
                            Innovative business all over the world.
                          </a>
                        </h3>
                        <p>
                          Financial experts support or help you to to find out
                          which way you can raise your funds more...
                        </p>
                        <a href="blog-details.html" class="read-more">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 padding-15">
                  <div class="post-card">
                    <div class="post-thumb">
                      <img src="/assets/img/post-4.jpg" alt="post" />
                      <a href="blog-details.html" class="post-category">
                        Consulting
                      </a>
                    </div>
                    <div class="post-content-wrap">
                      <ul class="post-meta">
                        <li>
                          <i class="las la-calendar"></i>Jan 01 2022
                        </li>
                        <li>
                          <i class="las la-user"></i>Elliot Alderson
                        </li>
                      </ul>
                      <div class="post-content">
                        <h3>
                          <a href="blog-details.html">
                            Fresh startup ideas for digital business
                          </a>
                        </h3>
                        <p>
                          Financial experts support or help you to to find out
                          which way you can raise your funds more...
                        </p>
                        <a href="blog-details.html" class="read-more">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ul class="pagination-wrap text-left mt-30">
                <li>
                  <a href="#">
                    <i class="las la-arrow-left"></i>
                  </a>
                </li>
                <li>
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="#" class="active">
                    2
                  </a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">
                    <i class="las la-arrow-right"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-lg-4 sm-padding">
              <div class="sidebar-widget">
                <form action="" class="search-form">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search"
                  />
                  <button class="search-btn" type="button">
                    <i class="fa fa-search"></i>
                  </button>
                </form>
              </div>
              <div class="sidebar-widget">
                <div class="widget-title">
                  <h3>Categories</h3>
                </div>
                <ul class="category-list">
                  <li>
                    <a href="blog-grid.html">Business Strategy</a>
                    <span>23</span>
                  </li>
                  <li>
                    <a href="blog-grid.html">Project Management</a>
                    <span>05</span>
                  </li>
                  <li>
                    <a href="blog-grid.html">Digital Marketing</a>
                    <span>18</span>
                  </li>
                  <li>
                    <a href="blog-grid.html">Customer Experience</a>
                    <span>04</span>
                  </li>
                  <li>
                    <a href="blog-grid.html">Partnership System</a>
                    <span>15</span>
                  </li>
                </ul>
              </div>
              <div class="sidebar-widget">
                <div class="widget-title">
                  <h3>Recent Articles</h3>
                </div>
                <ul class="thumb-post">
                  <li>
                    <div class="thumb">
                      <img src="/assets/img/post-thumb-1.jpg" alt="thumb" />
                    </div>
                    <div class="thumb-post-info">
                      <h3>
                        <a href="blog-details.html">
                          How To Go About Initiating An Startup In Few Days.
                        </a>
                      </h3>
                      <a href="#" class="date">
                        Jan 01 2022
                      </a>
                    </div>
                  </li>
                  <li>
                    <div class="thumb">
                      <img src="/assets/img/post-thumb-2.jpg" alt="thumb" />
                    </div>
                    <div class="thumb-post-info">
                      <h3>
                        <a href="blog-details.html">
                          Financial Experts Support Help You To Find Out.
                        </a>
                      </h3>
                      <a href="#" class="date">
                        Jan 01 2022
                      </a>
                    </div>
                  </li>
                  <li>
                    <div class="thumb">
                      <img src="/assets/img/post-thumb-3.jpg" alt="thumb" />
                    </div>
                    <div class="thumb-post-info">
                      <h3>
                        <a href="blog-details.html">
                          Innovative Helping Business All Over The World.
                        </a>
                      </h3>
                      <a href="#" class="date">
                        Jan 01 2022
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="sidebar-widget">
                <div class="widget-title">
                  <h3>Tags</h3>
                </div>
                <ul class="tags">
                  <li>
                    <a href="#">business</a>
                  </li>
                  <li>
                    <a href="#">marketing</a>
                  </li>
                  <li>
                    <a href="#">startup</a>
                  </li>
                  <li>
                    <a href="#">design</a>
                  </li>
                  <li>
                    <a href="#">consulting</a>
                  </li>
                  <li>
                    <a href="#">strategy</a>
                  </li>
                  <li>
                    <a href="#">development</a>
                  </li>
                  <li>
                    <a href="#">tips</a>
                  </li>
                  <li>
                    <a href="#">Seo</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
