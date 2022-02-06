import React from 'react'

import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div>
      <header
        id="header"
        style={{ backgroundColor: '#ffffff' }}
        className="nav-on-banner transparent-header-modern fixed-header-bg-secondary py-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-nav hover-primary-nav">
                <div className="row">
                  <div className="col-md-12 col-lg-12">
                    <nav className="navbar navbar-expand-lg navbar-light white-nav p-0">
                      {" "}
                      <a
                        className="navbar-brand position-relative p-0"
                        href="/">
                        <img
                          className="nav-logo"
                          src="images/logo/upc-logo-png.png"
                          alt=""
                        />
                      </a>
                      <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        {" "}
                        <span className="navbar-toggler-icon"></span>{" "}
                      </button>
                      <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                          <li className="nav-item">
                            {" "}
                            <Link
                              className="nav-link active"
                              to="/"
                              role="button"
                              aria-haspopup="true"
                              aria-expanded="false">
                              Home
                            </Link>
                          </li>
                          <li className="nav-item">
                            {" "}
                            <Link
                              className="nav-link "
                              to="/About-Us"
                            >
                              About Us
                            </Link>
                            {/*  <ul className="dropdown-menu">
                              <li className="dropdown">
                                {" "}
                                <a className=" dropdown-item" href="/About-Us">
                                  Uttara Proborton City
                                </a>
                              </li>


                              <li className="dropdown">
                                {" "}
                                <a className=" dropdown-item" href="/Management">
                                  Management Team
                                </a>
                              </li>

                            </ul> */}
                          </li>

                          <li className="nav-item dropdown">
                            {" "}
                            <a
                              className="nav-link dropdown-toggle"
                              href="#"
                              role="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false">
                              Gallary
                            </a>
                            <ul className="dropdown-menu">
                              <li className="dropdown">
                                {" "}
                                <a className=" dropdown-item" href="/PhotoGallery">
                                  Photo Gallery
                                </a>
                              </li>
                              <li className="dropdown">
                                {" "}
                                <Link className=" dropdown-item" to="/VideoGallery">
                                  Video Gallary
                                </Link>
                              </li>
                              <li className="dropdown">
                                {" "}
                                <Link className=" dropdown-item" to="/BirdsEye">
                                  Bird Eye View
                                </Link>
                              </li>
                            </ul>
                          </li>

                          <li className="nav-item">
                            {" "}
                            <Link className="nav-link" to="/Location-map">
                              Location Map
                            </Link>{" "}
                          </li>
                          <li className="nav-item">
                            {" "}
                            <Link className="nav-link" to="/Project-Layout">
                              Project Layout
                            </Link>{" "}
                          </li>

                          <li className="nav-item">
                            {" "}
                            <Link className="nav-link" to="/Contact-Us">
                              Contact
                            </Link>{" "}
                          </li>

                          <li className="nav-item">
                            {" "}
                            <Link className="nav-link" to="/News">
                              News
                            </Link>{" "}
                          </li>
                        </ul>
                        <a
                          className="btn btn2 btn-white-border ml-3 ml-lg-0"
                          href="tel:+8801707202202" style={{ backgroundColor: '#c42929', borderColor: '#c42929' }}>
                          <i className="fas fa-phone-alt"></i> +880-1707-202202

                        </a>
                        |
                        <a
                          className="btn btn2 btn-white-border ml-3 ml-lg-0"
                          href="tel:+880248958589" style={{ backgroundColor: '#c42929', borderColor: '#c42929' }}>
                          <i className="fas fa-phone-alt"></i>
                          +88-02-48958589
                        </a>{" "}
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>


    </div>
  )
}

export default Header
