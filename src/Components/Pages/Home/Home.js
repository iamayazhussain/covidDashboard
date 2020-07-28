import React from "react";
import { Container, Row, Col, Carousel, CarouselItem } from "react-bootstrap";
const Home = () => {
  return (
    <>
      <Container fluid style={{ padding: "0px" }}>
        <Carousel>
          <Carousel.Item>
            <img
              className="carousel-img d-block w-100"
              src="https://i.ibb.co/MVPvtJ9/slider-2.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.ibb.co/MVPvtJ9/slider-2.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.ibb.co/MVPvtJ9/slider-2.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>

      <section className="brand">
        <Row noGutters>
          <Col lg={3}>
            <div className="content">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/2/29/Osmania_University_Logo.png"
                alt=""
                width="55"
                height="50"
                title="icon-1"
              />
            </div>
            <div className="">
              <h3>Affiliated to Osmania university</h3>
            </div>
          </Col>
          <Col lg={3}>
            <div className="content">
              <img
                src="http://max-themes.net/demos/kingster/upload/icon-2.png"
                alt=""
                width="40"
                height="40"
                title="icon-1"
              />
            </div>
            <div className="">
              <h3>CE | CSE | ECE | EEE | IT | ME | MBA</h3>
            </div>
          </Col>{" "}
          <Col lg={3}>
            <div className="content">
              <img
                src="http://max-themes.net/demos/kingster/upload/icon-4.png"
                alt=""
                width="40"
                height="40"
                title="icon-1"
              />
            </div>
            <div className="">
              <h3>Sponsored by Islamia Group</h3>
            </div>
          </Col>
          <Col lg={3}>
            <div className="content">
              <img
                src="http://max-themes.net/demos/kingster/upload/icon-1.png"
                alt=""
                width="40"
                height="40"
                title="icon-1"
              />
            </div>
            <div className="">
              <h3>2008 Established</h3>
            </div>
          </Col>
        </Row>
      </section>

      <section className="ner">
        <Row>
          <Col md={4} sm={6}>
            <section className="news">
              <div class="site-heading text-left">
                <h4>News & Updates</h4>
              </div>
              <div className="section-content">
                <article>
                  <figure className="date">
                    <i className="fa fa-file-o"></i>08-24-2014
                  </figure>
                  <header>
                    <a href="https://islengg.ac.in">
                      U-M a School of Public Health, Detroit partners aim to
                      improve air quality in the city
                    </a>
                  </header>
                </article>
                <article>
                  <figure className="date">
                    <i className="fa fa-file-o"></i>08-24-2014
                  </figure>
                  <header>
                    <a href="#">
                      U-M School of Public Health, Detroit partners aim to
                      improve air quality in the city
                    </a>
                  </header>
                </article>
                <article>
                  <figure className="date">
                    <i className="fa fa-file-o"></i>08-24-2014
                  </figure>
                  <header>
                    <a href="#">
                      U-M School of Public Health, Detroit partners aim to
                      improve air quality in the city
                    </a>
                  </header>
                </article>
              </div>
            </section>
          </Col>
          <Col md={4} sm={6}>
            <section className="events small" id="events-small">
              <header>
                <div class="site-heading text-left">
                  <h4>Upcoming Events</h4>
                </div>
              </header>
              <div className="section-content">
                <article className="event">
                  <figure className="date">
                    <span className="date-month">
                      <div className="day">18</div>
                      <div className="month">jan</div>
                    </span>
                  </figure>
                  <aside>
                    <header>
                      <h3 className="content">
                        <a href="event-detail.html">
                          Laughter day: The Laughter ay will be celebrated in
                          campus
                        </a>
                      </h3>
                    </header>
                    <div className="additional-info">
                      <i class="fa fa-clock-o" aria-hidden="true"></i> 10:00 am
                      - 3:00 pm
                      <br />
                      <i class="fa fa-map-marker" aria-hidden="true"></i>
                      Block - A
                    </div>
                  </aside>
                </article>

                <article className="event">
                  <figure className="date">
                    <div className="day">23</div>
                    <div className="month">mar</div>
                  </figure>
                  <aside>
                    <header>
                      <h3 className="content">
                        <a href="event-detail.html">
                          The Orchestra of the Age of Enlightenment perform with
                          Music
                        </a>
                      </h3>
                    </header>
                    <div className="additional-info">
                      <i class="fa fa-map-marker" aria-hidden="true"></i>
                      Kala Bhavan
                      <br />
                      <i class="fa fa-clock-o" aria-hidden="true"></i> 10:00 Am
                      - 3:00 Pm
                    </div>
                  </aside>
                </article>
                <article className="event">
                  <figure className="date">
                    <div className="day">23</div>
                    <div className="month">mar</div>
                  </figure>
                  <aside>
                    <header>
                      <h3 className="content">
                        <a href="event-detail.html">
                          The Orchestra of the Age of Enlightenment perform with
                          Music
                        </a>
                      </h3>
                    </header>
                    <div className="additional-info">
                      <i class="fa fa-map-marker" aria-hidden="true"></i>
                      Kala Bhavan
                      <br />
                      <i class="fa fa-clock-o" aria-hidden="true"></i> 10:00 Am
                      - 3:00 Pm
                    </div>
                  </aside>
                </article>
              </div>
            </section>
          </Col>
          <Col md={4} sm={12}>
            <section className="recents">
              <div class="site-heading text-left">
                <h4>Recents </h4>
              </div>
              <Row>
                <Col lg={6} sm={6}>
                  <div className="single_courses courses_gray">
                    <div className="courses_image">
                      <img
                        src="https://i.ibb.co/XVvcsVD/Espirit.jpg"
                        alt="courses"
                      />
                    </div>
                    <div className="courses_content">
                      <div className="courses_author d-flex">
                        <div className="author_name media-body">
                          <a href="#">ESPIRIT</a>
                        </div>
                      </div>
                      <h4 className="title">
                        <a href="#">
                          Espirit is one of the finest Cultural event of ISL
                          More
                        </a>
                      </h4>
                    </div>
                  </div>
                </Col>
                <Col lg={6} sm={6}>
                  <div className="single_courses courses_gray ">
                    <div className="courses_image">
                      <img
                        src="https://i.ibb.co/b6mfmDY/enthusiac.jpg"
                        alt="courses"
                      />
                    </div>
                    <div className="courses_content">
                      <div className="courses_author d-flex">
                        <div className="author_name media-body">
                          <a href="#">ESPIRIT</a>
                        </div>
                      </div>
                      <h4 className="title">
                        <a href="#">
                          Espirit is one of the finest Cultural event of ISL
                        </a>
                      </h4>
                    </div>
                  </div>
                </Col>
                <Col lg={6} sm={6}>
                  <div className="single_courses courses_gray">
                    <div className="courses_image">
                      <img
                        src="https://i.ibb.co/6Rfb82N/eloquence.jpg"
                        alt="courses"
                      />
                    </div>
                    <div className="courses_content">
                      <div className="courses_author d-flex">
                        <div className="author_name media-body">
                          <a href="#">ESPIRIT</a>
                        </div>
                      </div>
                      <h4 className="title">
                        <a href="#">
                          Espirit is one of the finest Cultural event of ISL
                        </a>
                      </h4>
                    </div>
                  </div>
                </Col>
                <Col lg={6} sm={6}>
                  <div className="single_courses courses_gray">
                    <div className="courses_image">
                      <img
                        src="https://i.ibb.co/XVvcsVD/Espirit.jpg"
                        alt="courses"
                      />
                    </div>
                    <div className="courses_content">
                      <div className="courses_author d-flex">
                        <div className="author_name media-body">
                          <a href="#">ESPIRIT</a>
                        </div>
                      </div>
                      <h4 className="title">
                        <a href="#">
                          Espirit is one of the finest Cultural event of ISL
                        </a>
                      </h4>
                    </div>
                  </div>
                </Col>
              </Row>
            </section>{" "}
            {/* <section className="quick-link">
              <div className="top text-center">
                <i className="fa fa-link"></i>
                <h3 className="title">Quick Links</h3>
              </div>

              <div className="wrapper">
                <div className="link-list">
                  <a href="https://india.gov">
                    <h3 className="link">Alumni & Donors</h3>
                  </a>
                </div>
                <div className="link-list">
                  <a href="https://india.gov">
                    <h3 className="link">NPTEL Online Course</h3>
                  </a>
                </div>
                <div className="link-list">
                  <a href="https://india.gov">
                    <h3 className="link">Sports</h3>
                  </a>
                </div>
                <div className="link-list">
                  <a href="https://india.gov">
                    <h3 className="link">NPTEL Online Course</h3>
                  </a>
                </div>
                <div className="link-list">
                  <a href="https://india.gov">
                    <h3 className="link">NPTEL Online Course</h3>
                  </a>
                </div>
              </div>
            </section> */}
          </Col>
        </Row>
      </section>

      <section className="courses_area pt-60 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div class="site-heading text-left">
                <h2>In-House Events</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6 mb-10">
              <div className="single_courses courses_gray">
                <div className="courses_image">
                  <img
                    src="https://i.ibb.co/XVvcsVD/Espirit.jpg"
                    alt="courses"
                  />
                </div>
                <div className="courses_content">
                  <div className="courses_author d-flex">
                    <div className="author_name media-body">
                      <a href="#">ESPIRIT</a>
                    </div>
                  </div>
                  <h4 className="title">
                    <a href="#">
                      Espirit is one of the finest Cultural event of ISL
                    </a>
                  </h4>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 mb-10">
              <div className="single_courses courses_gray">
                <div className="courses_image">
                  <img
                    src="https://i.ibb.co/b6mfmDY/enthusiac.jpg"
                    alt="courses"
                  />
                </div>
                <div className="courses_content">
                  <div className="courses_author d-flex">
                    <div className="author_name media-body">
                      <a href="#">ENTHUSIAC</a>
                    </div>
                  </div>
                  <h4 className="title">
                    <a href="#">
                      Enthusiac is an Annual Sports Meet of ISL. Scintillating
                      performance creates aura of festivit{" "}
                    </a>
                  </h4>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 mb-10">
              <div className="single_courses courses_gray">
                <div className="courses_image">
                  <img
                    src="https://i.ibb.co/6Rfb82N/eloquence.jpg"
                    alt="courses"
                  />
                </div>
                <div className="courses_content">
                  <div className="courses_author d-flex">
                    <div className="author_name media-body">
                      <a href="#">Eloquence</a>
                    </div>
                  </div>
                  <h4 className="title">
                    <a href="#">
                      Eloquence The English Festival of ISL. With the power of
                      WordsS & Ideas...there comes a be{" "}
                    </a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mb-10">
              <div className="single_courses courses_gray">
                <div className="courses_image">
                  <img
                    src="https://i.ibb.co/F5PjW2c/deptfest.jpg"
                    alt="courses"
                  />
                </div>
                <div className="courses_content">
                  <div className="courses_author d-flex">
                    <div className="author_name media-body">
                      <a href="#">Projects</a>
                    </div>
                  </div>
                  <h4 className="title">
                    <a href="#">
                      Departmental Projects Showcase by the Students in every
                      Semester{" "}
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="student_work">
        <Container className="pt-60 pb-60">
          <div class="site-heading text-left">
            <h2>
              STUDENT <span className="text-white">LIFE</span>
            </h2>
          </div>
          <Row>
            <Col xl={5} lg={5} md={4} className="">
              <div class="student_work_overlay1">
                <span>
                  <img src="https://i.ibb.co/bNjZMsx/ecedeve-1.jpg" id="" />
                </span>
                <p>
                  &#8220;
                  <span class="font-weight-bold">
                    Robot that can deliver medicines to patients{" "}
                  </span>
                  &#8221;. ECE Department Students recieved invitation from
                  Chief Secretary Telangana
                </p>
              </div>
            </Col>

            <Col xl={7} lg={7} md={8}>
              <div class="row">
                <div class="col-12 col-md-6 col-lg-6 col-xl-6 mt-20">
                  <div class="student_work_overlay student_work_img">
                    <img src="https://i.ibb.co/LDFwDrn/slider5.png" />
                    <h4>360 &#176; Campus & curriculum</h4>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-6 col-xl-6 mt-20">
                  <div class="student_work_overlay student_work_img">
                    <img src="https://i.ibb.co/3W470k0/events.png" />
                    <h4>Fun-Filled College Events</h4>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-6 col-xl-6 mt-20">
                  <div class="student_work_overlay student_work_img">
                    <img src="https://i.ibb.co/44qxW1L/outbound.png" />
                    <h4>College Sponsored Out-bound Participations</h4>
                  </div>
                </div>

                <div class="col-12 col-md-6 col-lg-6 col-xl-6 mt-20">
                  <div class="student_work_overlay student_work_img">
                    <img src="https://i.ibb.co/b6mfmDY/enthusiac.jpg" />
                    <h4>Participation in National Level Sporting Events</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section class="video-feature pt-60 pb-110">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 text-center order-last order-lg-first">
              <div class="video pt-50">
                <a
                  class="Video-popup"
                  href="https://www.youtube.com/watch?v=bRRtdzJH1oE"
                >
                  <i class="fa fa-play"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-5 offset-lg-1 order-first order-lg-last">
              <div class="vfeature pt-50">
                <div class="single-feature">
                  <div class="icon">
                    <img
                      src="https://i.ibb.co/yfhVX06/Website-Logo.png"
                      alt="icon"
                      class="img-fluid"
                    />
                  </div>
                  <div class="content pt-3">
                    <p>
                      ISL Engineering College offers a holistic approach towards
                      teaching &amp; learning.It offers six Undergraduate
                      courses and one Postgraduate course. The Bachelor of
                      Engineering degree equips you with an Enlightened Vision,
                      Steadfast Mission and Focused Objectives which transforms
                      your aspirations into achievements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="feature-bg"></div>
      </section>

      <section className="guest pt-60 pb-50">
        <Container fluid>
          <div class="site-heading text-left">
            <h2>Listen To The Best Minds</h2>
          </div>

          <Row noGutters classname="text-center">
            <Col lg={6} className="guest_col_1">
              <div className="single_guest d-sm-flex flex-wrap align-items-center">
                <img
                  className="guest_arrow"
                  src="http://raistheme.com/html/edustdy/edustdy/assets/images/left.png"
                  alt="left"
                />
                <div className="team_image">
                  <img src="https://i.ibb.co/xjXCp00/2.png" alt="team" />
                </div>
                <div className="team_content">
                  <div className="team_content_wrapper">
                    <h4 className="title">
                      <a href="#">Ansar Shaikh</a>
                    </h4>
                    <span>Youngest IAS Officer</span>
                  </div>
                </div>
              </div>

              <div class="single_guest d-sm-flex flex-wrap align-items-center flex-row-reverse">
                <img
                  class="guest_arrow"
                  src="http://raistheme.com/html/edustdy/edustdy/assets/images/right.png"
                  alt="left"
                />
                <div class="team_image">
                  <img src="https://i.ibb.co/bjVw1CG/1.jpg" alt="team" />
                </div>
                <div class="team_content">
                  <div class="team_content_wrapper">
                    <h4 class="title">
                      <a href="#">Javed Jaffrey</a>
                    </h4>
                    <span>Actor, Philanthropist</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6} className="team_col_2">
              <div class="single_guest d-sm-flex flex-wrap align-items-center">
                <img
                  class="guest_arrow"
                  src="http://raistheme.com/html/edustdy/edustdy/assets/images/left.png"
                  alt="left"
                />
                <div class="team_image">
                  <img
                    src="https://i.ibb.co/3TCsQB6/EUUu-WKGXg-AAe-Pv-V.jpg"
                    alt="team"
                  />
                </div>
                <div class="team_content">
                  <div class="team_content_wrapper">
                    <h4 class="title">
                      <a href="#">Simerjeet Singh</a>
                    </h4>
                    <span>International Motivational Speaker</span>
                  </div>
                </div>
              </div>
              <div class="single_guest d-sm-flex flex-wrap align-items-center flex-row-reverse">
                <img
                  class="guest_arrow"
                  src="http://raistheme.com/html/edustdy/edustdy/assets/images/right.png"
                  alt="left"
                />
                <div class="team_image">
                  <img src="https://i.ibb.co/K6NwnJv/unnamed.jpg" alt="team" />
                </div>
                <div class="team_content">
                  <div class="team_content_wrapper">
                    <h4 class="title">
                      <a href="#">Wali Rehmani</a>
                    </h4>
                    <span>Social Entrepreneur | Social Activist</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* <section>
        <Container>
          <Row>
            <Col lg={4}>
              <section className="newsletter text-center">
                <div className="wrapper">
                  <div classname="envelop">
                    <img
                      src="http://max-themes.net/demos/kingster/upload/icon-envelope.png"
                      alt=""
                      width="78"
                      height="60"
                      title="icon-envelope"
                    />
                  </div>
                  <h3 className="title mt-20">Subscribe To Newsletter</h3>
                  <span class="caption" id="span_1dd7_9">
                    Get updates to news &amp; events
                  </span>

                  <div className="newsletter-email">
                    <input
                      className="btn newsletter-email gdlr-core-skin-e-background gdlr-core-skin-e-content"
                      placeholder="Your Email Address"
                      type="email"
                      name="ne"
                      size="30"
                      required=""
                    />
                    <input type="submit" clasName="btn submitletter " />
                  </div>
                </div>
              </section>
            </Col>
          </Row>
        </Container>
      </section> */}
    </>
  );
};

export default Home;
