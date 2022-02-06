import React, { useState } from 'react'
import { Toast, Spinner, Button } from "react-bootstrap"

import { firebase } from "../../firebaseConfig"

const ContactPage = () => {
    const [address, setaddress] = useState("")
    const [phoneNum, setphoneNum] = useState("")

    const [showToast, setshowToast] = useState(false)
    const [showSpinner, setshowSpinner] = useState(false)

    const handleUpload = (e) => {
        var uploadDate = new Date();
        uploadDate = uploadDate.getDate() + "-" + uploadDate.getMonth() + "-" + uploadDate.getFullYear()
        uploadDate = uploadDate.toString();
        setshowSpinner(true)



        firebase.database().ref("UPC").child("CONTACT").set({

            Address: address,
            phone: phoneNum
        }).then(() => { setshowSpinner(false); setshowToast(true) })



    }
    return (
        <div className="EditAboutPageContainer">
            {showSpinner ? <Button variant="primary" disabled>
                <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                Uploading...
            </Button> : <>
                <div className="toastContainer">
                    <Toast className="toastPart" show={showToast} onClose={() => setshowToast(false)}>
                        <Toast.Header>

                            <strong className="me-auto">UPC</strong>

                        </Toast.Header>
                        <Toast.Body>Project Layout Page Updated!</Toast.Body>
                    </Toast>
                </div>
                <h3>Contact Page Controls</h3>
                <hr />
                <h4>Change Corporate Address</h4>
                <form id="contact-form" className="w-100" onSubmit={(e) => { e.preventDefault(); handleUpload() }}>

                    <input type="text" id="name" name="firstname" className="form-control bg-gray mb-3" placeholder="Write Address" onChange={(e) => setaddress(e.target.value)} />

                    <input type="text" id="site-link" name="site-link" className="form-control bg-gray mb-3" placeholder="Phone Number" onChange={(e) => setphoneNum(e.target.value)} />

                    <button type="submit" id="send" value="send message" className="btn btn-primary">Upload</button>

                </form>

            </>
            }

        </div>
    )
}

export default ContactPage
