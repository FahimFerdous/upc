import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

import { firebase } from "../../firebaseConfig"

const firedb = firebase.database()

const Contact = () => {
    const [data, setdata] = useState({})
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [message, setMessage] = useState()
    const [issubmitted, setIssubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        firedb.ref("UPC").child("UserMessage").push({
            name, email, phone, message, date: new Date().toLocaleDateString()
        }).then(() => {
            setIssubmitted(true); setName(" "); setPhone(" "); setEmail(" "); setMessage(" ")
        })
    }
    useEffect(() => {
        firedb.ref("UPC/CONTACT/").on("value", (snapshot) => {
            setdata(snapshot.val());

        });
    }, [])

    return (
        <div>
            <Modal show={issubmitted} onHide={() => setIssubmitted(false)}>

                <Modal.Header closeButton>
                    <Modal.Title><b>Uttar Proborton City</b></Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p style={{ fontSize: '18px', color: '#4d4d4d' }}>Thank you for your query. We will get back to you soon.</p>
                </Modal.Body>

            </Modal>

            {/* Address section start */}
            {/* <div className="full-row bg-white" >
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 className="text-secondary double-down-line text-center">Company Address</h2>
                        </div>
                    </div>
                    <div className="row row-cols-lg-4 row-cols-1 mt-5">
                        <div className="col">
                            <div className="contact-info">
                                <h5 className="mb-4  text-secondary">Corporate Office</h5>

                                <ul>
                                    <li className="d-flex mb-4"> <i className="fas fa-map-marker-alt text-primary me-2 font-13 mt-2"></i>
                                        <div className="contact-address">
                                            <h5 className="text-secondary">Address</h5>
                                            <span>House-1/A, Road-02, Sector-03, Uttara, Dhaka-1230</span> </div>
                                    </li>
                                    <li className="d-flex mb-4"> <i className="fas fa-phone-alt text-primary me-2 font-13 mt-2"></i>
                                        <div className="contact-address">
                                            <h5 className="text-secondary">Call</h5>
                                            <span className="d-table">+88-02-48958589,</span> <span>+88-02-48958599</span> </div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="col">
                            <div className="contact-info">
                                <h5 className="mb-4  text-secondary">UK East London Office</h5>
                                <ul>
                                    <li className="d-flex mb-4"> <i className="fas fa-map-marker-alt text-primary me-2 font-13 mt-2"></i>
                                        <div className="contact-address">
                                            <h5 className="text-secondary">Address</h5>
                                            <span>Unit G-7, Greatorex Business Center,
                                                8-10 Greatorex Street, London E1 5NF, UK.</span> </div>
                                    </li>
                                    <li className="d-flex mb-4"> <i className="fas fa-phone-alt text-primary me-2 font-13 mt-2"></i>
                                        <div className="contact-address">
                                            <h5 className="text-secondary">Call</h5>
                                            <span className="d-table">Contact : Mr. M.Rahaman,</span> <span>00447475979710 </span> </div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="col">
                            <div className="contact-info">
                                <h5 className="mb-4  text-secondary">UK Canary Wharf Office</h5>
                                <ul>
                                    <li className="d-flex mb-4"> <i className="fas fa-map-marker-alt text-primary me-2 font-13 mt-2"></i>
                                        <div className="contact-address">
                                            <h5 className="text-secondary">Address</h5>
                                            <span>503 Litmond Properties,
                                                Bellerive House, 3 Muirfield
                                                Cresent, London E14 9sz, UK.</span> </div>
                                    </li>
                                    <li className="d-flex mb-4"> <i className="fas fa-phone-alt text-primary me-2 font-13 mt-2"></i>
                                        <div className="contact-address">
                                            <h5 className="text-secondary">Call</h5>
                                            <span className="d-table">+4407466149275</span> <span></span> </div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="col">
                            <div className="contact-info">
                                <h5 className="mb-4  text-secondary">Malaysia Office</h5>
                                <ul>
                                    <li className="d-flex mb-4"> <i className="fas fa-map-marker-alt text-primary me-2 font-13 mt-2"></i>
                                        <div className="contact-address">
                                            <h5 className="text-secondary">Address</h5>
                                            <span>50A, 2nd Floor, Jalan 6/2
                                                Pandan Indah Commercial Park, 55100 Kuala Lumpur,
                                                W.P. Kuala Lumpur.</span> </div>
                                    </li>


                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            */}
            {/* Address section end */}

            {/*============== Get In Touch Section Start ==============*/}
            <div className="bg-white" style={{ paddingTop: '80px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <h2 className="text-secondary double-down-line text-center">Enquire Now</h2>
                            <span className="text-center mt-4 d-block mb-5">For any query, write us.</span> </div>
                        <div className="col-md-7">
                            <h2 className="text-secondary double-down-line text-center">Corporate Office</h2>
                            <span className="text-center mt-4 d-block mb-5">Dhaka(Head Office)</span> </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5">
                            <form className="w-100" onSubmit={handleSubmit}>

                                <input type="text" name="name" className="form-control bg-gray mb-3" placeholder="Your Name*" value={name} onChange={(e) => { setName(e.target.value) }} />
                                <input type="text" name="email" className="form-control bg-gray mb-3" placeholder="Email Address*" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                <input type="text" name="phone" className="form-control bg-gray mb-3" placeholder="Phone*" value={phone} onChange={(e) => { setPhone(e.target.value) }} />
                                <textarea id="message" name="message" className="form-control bg-gray mb-3" rows="5" placeholder="Write message" value={message} onChange={(e) => { setMessage(e.target.value) }}></textarea>
                                <button type="submit" className="btn btn-primary">Send Message</button>

                            </form>
                        </div>
                        <div className="col-md-7">
                            <ul className="ContactAddress">
                                <li className="mb-4">


                                    <p className="contactHeading"><i className="fas fa-map-marker-alt  me-2 font-13 mt-2"></i>Address</p>
                                    <p className="contactInfo">{data.Address}</p>
                                </li>
                                <li className="mb-4">

                                    <p className="contactHeading"><i className="fas fa-phone-alt  me-2 font-13 mt-2"></i>Call</p>
                                    <p className="contactInfo">{data.phone}</p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/*============== Get In Touch Section End ==============*/}
            <div className="container">
                <div className="row row-cols-xl-12  row-cols-md-2 mt-5 row-cols-1 g-4">
                    <div className="col">
                        <h2 className="text-secondary double-down-line text-center">Location Map</h2>
                        <div className=" bg-white shadow-one">
                            <div className="overflow-hidden locattionMapDesign1">
                                <a href="images/ProjectLocation-Map.png" className="fancybox" data-fancybox="gallery1">
                                    <img className="block__pic" src="images/ProjectLocation-Map.png" alt="" />
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/*============== Map Section Start ==============*/}
            <div className="full-row bg-white p-0" >
                <div className="container">

                    <div className="row" style={{ paddingTop: '85px' }}>
                        <div className="col">
                            <h2 className="text-secondary double-down-line text-center">Map</h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1289.5855169121032!2d90.369699572168!3d23.90739020038736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c37f3ca748cf%3A0x91ccc99340f16040!2sUttara%20Probortan%20City!5e0!3m2!1sen!2sbd!4v1626378774214!5m2!1sen!2sbd" width="100%" height="450" style={{ border: '0' }} allowfullscreen="" loading="lazy"></iframe>
                        </div>
                    </div>


                </div>
            </div>
            {/*============== Map Section End ==============*/}
            {/*============== Contact Information Section Start ==============*/}
            {/*   <div className="full-row bg-gray" style={{ paddingTop: '85px', paddingBottom: '0px' }}>
                <div className="container">
                    <div className="row row-cols-lg-3 row-cols-1">
                        <div className="col">
                            <div className="contact-info">
                                <h3 className="mb-4 text-secondary">Customer Support</h3>


                                <ul>
                                    <li className="d-flex mb-4">
                                        <div className="contact-address">
                                            <h5 className="text-secondary">Email Adderss</h5>
                                            <span>info@uttaraprobortancity.com</span> </div>
                                    </li>
                                    <li className="d-flex mb-4">
                                        <div className="contact-address">
                                            <h5 className="text-secondary">Website</h5>
                                            <span className="d-table">www.uttaraprobortancity.com</span> </div>
                                    </li>
                                    <li className="d-flex mb-4">
                                        <div className="contact-address">
                                            <h5 className="text-secondary">Phone</h5>
                                            <span className="d-table">+88-02-48958589, +88-02-48958599.</span> </div>
                                    </li>

                                </ul>

                            </div>
                        </div>
                        <div className="col">
                            <div className="contact-info">
                                <h3 className="mb-4 text-secondary">Ask a Consultant</h3>
                                <div className="circle me-4"><img src="images/management-2.jpg" alt="" /></div>
                                <div className="contact-details">
                                    <h5>Golam Mostafa</h5>
                                    <span className="d-block">CEO</span> </div>
                                <ul>
                                    <li className="d-flex mb-4">
                                        <div className="contact-address">
                                            <h5 className="text-secondary">Email Adderss</h5>
                                            <span>ceo@uttaraprobortancity.com</span> </div>
                                    </li>



                                </ul>


                            </div>
                        </div>
                        <div className="col">
                            <div className="contact-info">
                                <h3 className="mb-5 text-secondary">Social Media</h3>
                                <div className="media-widget text-secondary hover-text-primary">
                                    <a href="#"><i className="fab fa-facebook-square fa-5x"></i></a>
                                    <a href="#"><i className="fab fa-twitter-square fa-5x"></i></a>
                                    <a href="#"><i className="fab fa-youtube-square fa-5x"></i></a>
                                    <a href="#"><i className="fab fa-linkedin fa-5x"></i></a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            */}

            {/*============== Contact Information Section End ==============*/}






        </div>
    )
}

export default Contact
