import React, { useState, useEffect } from 'react'
import { firebase } from "../../firebaseConfig"
import { Button, Modal } from 'react-bootstrap'

const firedb = firebase.database()
const ProjectLayout = () => {
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
        firedb.ref("UPC/PROJECT_LAOYOUT/").on("value", (snapshot) => {
            setdata(snapshot.val());

        });
    }, [])
    return (
        <div>
            <div className="full-row bg-white" >
                <Modal show={issubmitted} onHide={() => setIssubmitted(false)}>

                    <Modal.Header closeButton>
                        <Modal.Title><b>Uttar Proborton City</b></Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p style={{ fontSize: '18px', color: '#4d4d4d' }}>Thank you for your query. We will get back to you soon.</p>
                    </Modal.Body>

                </Modal>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 className="text-secondary double-down-line text-center">Project Layout</h2>
                        </div>
                    </div>

                    <div className="row row-cols-xl-12 row-cols-md-2 mt-5 row-cols-1 g-4">
                        <div className="col-md-7">
                            <div className=" bg-white shadow-one">
                                <div className="overflow-hidden locattionMapDesign1">
                                    <a href={data.imgUrl} className="fancybox" data-fancybox="gallery1">
                                        <img className="block__pic" src={data.imgUrl} alt="" />
                                    </a>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="col">
                                <h2 className="text-secondary double-down-line text-center">Enquire Now</h2>
                            </div>
                            <form className="w-100" onSubmit={handleSubmit}>

                                <input type="text" name="name" className="form-control bg-gray mb-3" placeholder="Your Name*" value={name} onChange={(e) => { setName(e.target.value) }} />
                                <input type="text" name="email" className="form-control bg-gray mb-3" placeholder="Email Address*" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                <input type="text" name="phone" className="form-control bg-gray mb-3" placeholder="Phone*" value={phone} onChange={(e) => { setPhone(e.target.value) }} />
                                <textarea id="message" name="message" className="form-control bg-gray mb-3" rows="5" placeholder="Write message" value={message} onChange={(e) => { setMessage(e.target.value) }}></textarea>
                                <button type="submit" className="btn btn-primary">Send Message</button>

                            </form>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default ProjectLayout
