import React from 'react'

const HeroPage = () => {
  return (
    <>
  {/* Hello world */}
  <div>
    <div className="fh5co-loader" />
    <div id="page">
      <nav className="fh5co-nav" role="navigation">
        <div className="container-wrap">
          <div className="top-menu">
            <div className="row">
              <div className="col-md-12 col-offset-0 text-center">
                <div id="fh5co-logo">
                  <a href="index.html">Church</a>
                </div>
              </div>
              <div className="col-md-12 col-md-offset-0 text-center menu-1">
                <ul>
                  <li className="active">
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="sermons.html">Sermons</a>
                  </li>
                  <li className="has-dropdown">
                    <a href="news.html">News</a>
                    <ul className="dropdown">
                      <li>
                        <a href="#">Ministry</a>
                      </li>
                      <li>
                        <a href="#">Medical Missionary</a>
                      </li>
                      <li>
                        <a href="#">Country Living</a>
                      </li>
                      <li>
                        <a href="#">Gospel Workers</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="events.html">Events</a>
                  </li>
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                  <li>
                    <a href="#" className="donate">
                      Donate
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="container-wrap">
        <aside id="fh5co-hero">
          <div className="flexslider">
            <ul className="slides">
              <li style={{ backgroundImage: "url(images/img_bg_1.jpg)" }}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 text-center">
                      <div className="slider-text">
                        <div className="slider-text-inner">
                          <h1>Living &amp; Sharing the Gospel of God</h1>
                          <h2>
                            Free html5 templates Made by{" "}
                            <a href="http://freehtml5.co/" target="_blank">
                              freehtml5.co
                            </a>
                          </h2>
                          <p>
                            <a
                              className="btn btn-primary btn-demo popup-vimeo"
                              href="https://vimeo.com/channels/staffpicks/93951774"
                            >
                              {" "}
                              <i className="icon-play4" /> Watch Video
                            </a>{" "}
                            <a className="btn btn-primary btn-learn">
                              Join us here! <i className="icon-arrow-right3" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{ backgroundImage: "url(images/img_bg_2.jpg)" }}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 text-center">
                      <div className="slider-text">
                        <div className="slider-text-inner">
                          <h1>Tell The World</h1>
                          <h2>
                            Free html5 templates Made by{" "}
                            <a href="http://freehtml5.co/" target="_blank">
                              freehtml5.co
                            </a>
                          </h2>
                          <p>
                            <a
                              className="btn btn-primary btn-demo popup-vimeo"
                              href="https://vimeo.com/channels/staffpicks/93951774"
                            >
                              {" "}
                              <i className="icon-play4" /> Watch Video
                            </a>{" "}
                            <a className="btn btn-primary btn-learn">
                              Join us here! <i className="icon-arrow-right3" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{ backgroundImage: "url(images/img_bg_3.jpg)" }}>
                <div className="overlay" />
                <div className="container-fluids">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 text-center">
                      <div className="slider-text">
                        <div className="slider-text-inner text-center">
                          <h1>Know More About Jesus</h1>
                          <h2>
                            Free html5 templates Made by{" "}
                            <a href="http://freehtml5.co/" target="_blank">
                              freehtml5.co
                            </a>
                          </h2>
                          <p>
                            <a
                              className="btn btn-primary btn-demo popup-vimeo"
                              href="https://vimeo.com/channels/staffpicks/93951774"
                            >
                              {" "}
                              <i className="icon-play4" /> Watch Video
                            </a>{" "}
                            <a className="btn btn-primary btn-learn">
                              Join us here! <i className="icon-arrow-right3" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </aside>
        <div id="fh5co-intro">
          <div className="row animate-box">
            <div className="col-md-12 col-md-offset-0 text-center">
              <h2>Living in God's Amazing Grace!</h2>
              <span>We are open Sunday to Monday</span>
            </div>
          </div>
        </div>
        <hr />
        <div id="fh5co-counter" className="fh5co-counters">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 text-center animate-box">
              <p>
                We have a fun facts far far away, behind the word mountains, far
                from the countries Vokalia and Consonantia, there live the blind
                texts.
              </p>
            </div>
          </div>
          <div className="row animate-box">
            <div className="col-md-8 col-md-offset-2">
              <div className="row">
                <div className="col-md-3 col-sm-6 col-xs-6 text-center">
                  <span
                    className="fh5co-counter js-counter"
                    data-from={0}
                    data-to={9452}
                    data-speed={5000}
                    data-refresh-interval={50}
                  />
                  <span className="fh5co-counter-label">Members</span>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-6 text-center">
                  <span
                    className="fh5co-counter js-counter"
                    data-from={0}
                    data-to={214}
                    data-speed={5000}
                    data-refresh-interval={50}
                  />
                  <span className="fh5co-counter-label">Ministries</span>
                </div>
                <div className="clearfix visible-sm-block visible-xs-block" />
                <div className="col-md-3 col-sm-6 col-xs-6 text-center">
                  <span
                    className="fh5co-counter js-counter"
                    data-from={0}
                    data-to={433}
                    data-speed={5000}
                    data-refresh-interval={50}
                  />
                  <span className="fh5co-counter-label">classNamees</span>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-6 text-center">
                  <span
                    className="fh5co-counter js-counter"
                    data-from={0}
                    data-to={512}
                    data-speed={5000}
                    data-refresh-interval={50}
                  />
                  <span className="fh5co-counter-label">Activities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="fh5co-services" className="fh5co-light-grey">
          <div className="row animate-box">
            <div className="col-md-6 col-md-offset-3 text-center fh5co-heading">
              <h2>Services</h2>
              <p>
                Dignissimos asperiores vitae velit veniam totam fuga molestias
                accusamus alias autem provident. Odit ab aliquam dolor eius.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 animate-box">
              <div className="services">
                <a href="#" className="img-holder">
                  <img
                    className="img-responsive"
                    src="images/img-1.jpg"
                    alt="Free HTML5 Website Template by freehtml5.co"
                  />
                </a>
                <div className="desc">
                  <h3>
                    <a href="#">Live Events</a>
                  </h3>
                  <p>
                    Dignissimos asperiores vitae velit veniam totam fuga
                    molestias accusamus alias autem provident. Odit ab aliquam
                    dolor eius.
                  </p>
                  <a href="#">
                    Read More <i className="icon-arrow-right3" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 animate-box">
              <div className="services">
                <a href="#" className="img-holder">
                  <img
                    className="img-responsive"
                    src="images/img-3.jpg"
                    alt="Free HTML5 Website Template by freehtml5.co"
                  />
                </a>
                <div className="desc">
                  <h3>
                    <a href="#">Biblical Counseling</a>
                  </h3>
                  <p>
                    Dignissimos asperiores vitae velit veniam totam fuga
                    molestias accusamus alias autem provident. Odit ab aliquam
                    dolor eius.
                  </p>
                  <a href="#">
                    Read More <i className="icon-arrow-right3" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 animate-box">
              <div className="services">
                <a href="#" className="img-holder">
                  <img
                    className="img-responsive"
                    src="images/img-2.jpg"
                    alt="Free HTML5 Website Template by freehtml5.co"
                  />
                </a>
                <div className="desc">
                  <h3>
                    <a href="#">Helping Children</a>
                  </h3>
                  <p>
                    Dignissimos asperiores vitae velit veniam totam fuga
                    molestias accusamus alias autem provident. Odit ab aliquam
                    dolor eius.
                  </p>
                  <a href="#">
                    Read More <i className="icon-arrow-right3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="fh5co-sermon">
          <div className="row animate-box">
            <div className="col-md-6 col-md-offset-3 text-center fh5co-heading">
              <h2>Our Sermons</h2>
              <p>
                Dignissimos asperiores vitae velit veniam totam fuga molestias
                accusamus alias autem provident. Odit ab aliquam dolor eius.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 text-center animate-box">
              <div className="sermon-entry">
                <div
                  className="sermon"
                  style={{ backgroundImage: "url(images/sermon-1.jpg)" }}
                >
                  <div className="play">
                    <a
                      className="popup-vimeo"
                      href="https://vimeo.com/channels/staffpicks/93951774"
                    >
                      <i className="icon-play3" />
                    </a>
                  </div>
                </div>
                <h3>Soul Winning</h3>
                <span>Pstr. John Doe</span>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="sermon-entry">
                <div
                  className="sermon"
                  style={{ backgroundImage: "url(images/sermon-3.jpg)" }}
                >
                  <div className="play">
                    <a
                      className="popup-vimeo"
                      href="https://vimeo.com/channels/staffpicks/93951774"
                    >
                      <i className="icon-play3" />
                    </a>
                  </div>
                </div>
                <h3>Message From God</h3>
                <span>Pstr. John Doe</span>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="sermon-entry">
                <div
                  className="sermon"
                  style={{ backgroundImage: "url(images/sermon-2.jpg)" }}
                >
                  <div className="play">
                    <a
                      className="popup-vimeo"
                      href="https://vimeo.com/channels/staffpicks/93951774"
                    >
                      <i className="icon-play3" />
                    </a>
                  </div>
                </div>
                <h3>Our World Today</h3>
                <span>Pstr. John Doe</span>
              </div>
            </div>
          </div>
        </div>
        <div id="fh5co-bible-verse">
          <div className="overlay" />
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <div className="row animate-box">
                <div className="owl-carousel owl-carousel-fullwidth">
                  <div className="item">
                    <div className="bible-verse-slide active text-center">
                      <blockquote>
                        <p>
                          “For God so loved the world, that he gave his only
                          begotten Son, that whosoever believeth in him should
                          not perish, but have everlasting life.”
                        </p>
                        <span>John 3:16</span>
                      </blockquote>
                    </div>
                  </div>
                  <div className="item">
                    <div className="bible-verse-slide active text-center">
                      <blockquote>
                        <p>
                          “The LORD [is] my strength and my shield; my heart
                          trusted in him, and I am helped: therefore my heart
                          greatly rejoiceth; and with my song will I praise
                          him.”
                        </p>
                        <span>Psalms 28:7</span>
                      </blockquote>
                    </div>
                  </div>
                  <div className="item">
                    <div className="bible-verse-slide active text-center">
                      <blockquote>
                        <p>
                          “And we have known and believed the love that God hath
                          to us. God is love; and he that dwelleth in love
                          dwelleth in God, and God in him.”
                        </p>
                        <span>1 John 4:16</span>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="fh5co-events">
          <div className="row animate-box">
            <div className="col-md-6 col-md-offset-3 text-center fh5co-heading">
              <h2>Our Events</h2>
              <p>
                Dignissimos asperiores vitae velit veniam totam fuga molestias
                accusamus alias autem provident. Odit ab aliquam dolor eius.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 animate-box">
              <div className="events-entry">
                <span className="date">March 10, 2017</span>
                <h3>
                  <a href="#">Message From God</a>
                </h3>
                <p>
                  Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia
                  reprehenderit. Eos cumque dicta adipisci architecto culpa
                  amet.
                </p>
                <a href="#">
                  Read More <i className="icon-arrow-right3" />
                </a>
              </div>
            </div>
            <div className="col-md-4 animate-box">
              <div className="events-entry">
                <span className="date">March 20, 2017</span>
                <h3>
                  <a href="#">Message From God</a>
                </h3>
                <p>
                  Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia
                  reprehenderit. Eos cumque dicta adipisci architecto culpa
                  amet.
                </p>
                <a href="#">
                  Read More <i className="icon-arrow-right3" />
                </a>
              </div>
            </div>
            <div className="col-md-4 animate-box">
              <div className="events-entry">
                <span className="date">March 30, 2017</span>
                <h3>
                  <a href="#">Message From God</a>
                </h3>
                <p>
                  Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia
                  reprehenderit. Eos cumque dicta adipisci architecto culpa
                  amet.
                </p>
                <a href="#">
                  Read More <i className="icon-arrow-right3" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="fh5co-news" className="fh5co-light-grey">
          <div className="row animate-box">
            <div className="col-md-6 col-md-offset-3 text-center fh5co-heading">
              <h2>Our News</h2>
              <p>
                Dignissimos asperiores vitae velit veniam totam fuga molestias
                accusamus alias autem provident. Odit ab aliquam dolor eius.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 animate-box">
              <div className="news">
                <a href="#" className="img-holder">
                  <img
                    className="img-responsive"
                    src="images/img-1.jpg"
                    alt="Free HTML5 Website Template by freehtml5.co"
                  />
                </a>
                <div className="desc">
                  <span className="date">March 30, 2017</span>
                  <h3>
                    <a href="#">Live News</a>
                  </h3>
                  <p>
                    Dignissimos asperiores vitae velit veniam totam fuga
                    molestias accusamus alias autem provident. Odit ab aliquam
                    dolor eius.
                  </p>
                  <a href="#">
                    Read More <i className="icon-arrow-right3" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 animate-box">
              <div className="news">
                <a href="#" className="img-holder">
                  <img
                    className="img-responsive"
                    src="images/img-3.jpg"
                    alt="Free HTML5 Website Template by freehtml5.co"
                  />
                </a>
                <div className="desc">
                  <span className="date">March 30, 2017</span>
                  <h3>
                    <a href="#">Biblical Counseling</a>
                  </h3>
                  <p>
                    Dignissimos asperiores vitae velit veniam totam fuga
                    molestias accusamus alias autem provident. Odit ab aliquam
                    dolor eius.
                  </p>
                  <a href="#">
                    Read More <i className="icon-arrow-right3" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 animate-box">
              <div className="news">
                <a href="#" className="img-holder">
                  <img
                    className="img-responsive"
                    src="images/img-2.jpg"
                    alt="Free HTML5 Website Template by freehtml5.co"
                  />
                </a>
                <div className="desc">
                  <span className="date">March 30, 2017</span>
                  <h3>
                    <a href="#">Helping Children</a>
                  </h3>
                  <p>
                    Dignissimos asperiores vitae velit veniam totam fuga
                    molestias accusamus alias autem provident. Odit ab aliquam
                    dolor eius.
                  </p>
                  <a href="#">
                    Read More <i className="icon-arrow-right3" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 animate-box">
              <div className="news">
                <a href="#" className="img-holder">
                  <img
                    className="img-responsive"
                    src="images/img-4.jpg"
                    alt="Free HTML5 Website Template by freehtml5.co"
                  />
                </a>
                <div className="desc">
                  <span className="date">March 30, 2017</span>
                  <h3>
                    <a href="#">Helping Children</a>
                  </h3>
                  <p>
                    Dignissimos asperiores vitae velit veniam totam fuga
                    molestias accusamus alias autem provident. Odit ab aliquam
                    dolor eius.
                  </p>
                  <a href="#">
                    Read More <i className="icon-arrow-right3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END container-wrap */}
      <div className="container-wrap">
        <footer id="fh5co-footer" role="contentinfo">
          <div className="col-md-4 text-center">
            <h3>198 West 21th Street, Suite 721 New York NY 10016</h3>
          </div>
          <div className="col-md-4 text-center">
            <h2>
              <a href="#">Church</a>
            </h2>
          </div>
          <div className="col-md-4 text-center">
            <p></p>
            <ul className="fh5co-social-icons">
              <li>
                <a href="#">
                  <i className="icon-twitter2" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-facebook2" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-dribbble2" />
                </a>
              </li>
            </ul>
            <p />
          </div>
          <div className="row copyright">
            <div className="col-md-12 text-center">
              <p>
                <small className="block">
                  © 2016 Free HTML5. All Rights Reserved.
                </small>
                <small className="block">
                  Designed by{" "}
                  <a href="http://freehtml5.co/" target="_blank">
                    FreeHTML5.co
                  </a>{" "}
                  Demo Images:{" "}
                  <a href="http://unsplash.co/" target="_blank">
                    Unsplash
                  </a>
                </small>
              </p>
            </div>
          </div>
        </footer>
      </div>
      {/* END container-wrap */}
    </div>
    <div className="gototop js-top">
      <a href="#" className="js-gotop">
        <i className="icon-arrow-up2" />
      </a>
    </div>
  </div>
</>

  )
}

export default HeroPage;