import React from 'react'

const NarBar = () => {
  return (
    <div>
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
    </div>
  )
}

export default NarBar;