import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'

import { firebase } from "../firebaseConfig"

const firedb = firebase.database()

const Footer = () => {
  const [subscribe, setSubscribe] = useState()
  const [issubmitted, setIssubmitted] = useState(false)
  const [link, setLink] = useState()
  const [isLoading, setisLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    firedb.ref("UPC").child("Subscription").push({
      EmailOrPhone: subscribe,
      date: new Date().toLocaleDateString()
    }).then(() => {
      setIssubmitted(true)
      setSubscribe(" ")
    })
  }

  useEffect(() => {

    firedb.ref("UPC").child("SocialLink").on("value", snapshot => {
      let tempLink = []
      snapshot.forEach(snap => {
        tempLink.push(snap.val())
      })
      setLink(tempLink)
    })
  }, [])

  if (isLoading) {
    return (
      <div>" "</div>
    )
  }
  return (
    <>

      {/*  Social Media Floating bar */}
      <div className="floating_icons">

        <ul>
          <li className="facebook"><a href={link ? link[0].link : "#"} target="_blank"><i className="fab fa-facebook-f"></i></a></li>
          <li className="twitter"><a href={link ? link[2].link : "#"} target="_blank"><i className="fab fa-twitter"></i></a></li>
          <li className="youtube"><a href={link ? link[1].link : "#"} target="_blank"><i className="fab fa-youtube"></i></a></li>
          <li className="linkedin"><a href={link ? link[3].link : "#"} target="_blank"><i className="fab fa-linkedin"></i></a></li>
        </ul>
      </div>
      {/* Email Subscription */}
      <div className="full-row bg-gray p-0">
        <Modal show={issubmitted} onHide={() => setIssubmitted(false)}>

          <Modal.Header closeButton>
            <Modal.Title><b>Uttar Proborton City</b></Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p style={{ fontSize: '18px', color: '#4d4d4d' }}>Thank you for your Interest. We will get back to you soon.</p>
          </Modal.Body>

        </Modal>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="divider py-80">
                <div className="row">
                  <div className="col-md-6">
                    <h4 className="text-secondary">
                      Subscribe with Mobile number
                    </h4>
                  </div>
                  <div className="col-md-6">
                    <form className="subscribe" onSubmit={handleSubmit}>


                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your Mobile"
                          value={subscribe}
                          onChange={(e) => { setSubscribe(e.target.value) }}
                        />
                        <button className="btn btn-primary" type="submit">
                          Subscribe
                        </button>

                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="full-row bg-gray p-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="divider py-80">
                <div className="row">
                  <div className="col-md-12 col-lg-4">
                    <div className="footer-widget mb-4">
                      <div className="footer-logo mb-4">
                        {" "}
                        <a href="#">
                          <img
                            className="logo-bottom"
                            src="images/logo/upc-logo-png.png"
                            alt="image"
                          />
                        </a>{" "}
                      </div>
                      <p className="pb-20">
                        Uttara Probotan city offers you the best deal of your investment. We can provide you totally hassle free lands which will be the safe, secured and comfortable living environment for you and your next generation. Its our mission to build a peaceful residential area where you can find the total combination of amazing natural beauty and modern city.
                      </p>
                      {/* <a className="btn btn-primary mt-4" href="#">
                        Register Now
                      </a> */}{" "}
                      <button className="btn btn-primary" type="submit">
                        Read More
                      </button>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-8">
                    <div className="row">
                      <div className="col-md-4 col-lg-4">
                        <div className="footer-widget footer-nav mb-4">
                          <h4 className="widget-title text-secondary double-down-line-left position-relative">
                            Support
                          </h4>
                          <ul>
                            <li>
                              <a href="#">Blog</a>
                            </li>
                            <li>
                              <a href="#">Privacy</a>
                            </li>
                            <li>
                              <a href="#">Terms and Condition</a>
                            </li>
                            <li>
                              <a href="#">Get Support</a>
                            </li>
                            <li>
                              <a href="#">Freequenly Ask Question</a>
                            </li>
                            <li>
                              <a href="#">Contact</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-4 col-lg-4">
                        <div className="footer-widget footer-nav mb-4">
                          <h4 className="widget-title text-secondary double-down-line-left position-relative">
                            Quick Links
                          </h4>
                          <ul>
                            <li>
                              <a href="#">About Us</a>
                            </li>
                            <li>
                              <a href="#">Management Team</a>
                            </li>
                            <li>
                              <a href="#">Uttara Builders</a>
                            </li>
                            <li>
                              <a href="#">Location Map</a>
                            </li>
                            <li>
                              <a href="#">Project Layout</a>
                            </li>
                            <li>
                              <a href="#">Client List</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-4 col-lg-4">
                        <div className="footer-widget">
                          <h4 className="widget-title text-secondary double-down-line-left position-relative">
                            Contact Us
                          </h4>
                          <ul>
                            <li>
                              House-1/A, Road-02, Sector-03, Uttara, Dhaka-1230.
                            </li>
                            <li>Tel: +88-02-48958589, +88-02-48958599.</li>
                            <li>info@uttaraprobortancity.com</li>
                          </ul>
                        </div>
                        <div className="footer-widget media-widget mt-4 text-secondary hover-text-primary">
                          {" "}
                          <a href={link ? link[0].link : " "} target="_blank">
                            <i className="fab fa-facebook-f"></i>
                          </a>{" "}
                          <a href={link ? link[2].link : " "} target="_blank">
                            <i className="fab fa-twitter"></i>
                          </a>{" "}
                          <a href={link ? link[3].link : " "} target="_blank">
                            <i className="fab fa-google-plus-g"></i>
                          </a>{" "}
                          <a href={link ? link[1].link : " "} target="_blank">
                            <i className="fab fa-linkedin-in"></i>
                          </a>{" "}

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row copyright">
            <div className="col-sm-6">
              {" "}
              <span>© 2021 BDSOFTIT. All right reserved</span>{" "}
            </div>
            <div className="col-sm-6">
              <ul className="line-menu text-ordinary hover-text-primary float-right">
                <li>
                  <a href="#">Privacy & Policy</a>
                </li>
                <li>|</li>
                <li>
                  <a href="#"> Site Map</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/* Scroll to top  */}
      <a
        href="#"
        className="bg-primary text-white hover-text-secondary"
        id="scroll">
        <i className="fas fa-angle-up"></i>
      </a>
      {/* End Scroll To top  */}
    </>
  )
}

export default Footer
