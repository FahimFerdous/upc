import React, { useState, useEffect } from 'react'
import "../adminDesign.css"
import { Toast, Spinner, Button } from "react-bootstrap"

import { firebase } from "../../firebaseConfig"
// const auth = firebase.auth()

const firedb = firebase.database()
const AboutUs = () => {
    const [imgUrl, setimgUrl] = useState(null)
    const [desc, setdesc] = useState("")
    const [showToast, setshowToast] = useState(false)
    const [showSpinner, setshowSpinner] = useState(false)

    const [editImgUrl, setEditImgUrl] = useState(null);
    const [editDesc, setEditDesc] = useState("");

    useEffect(() => {
        firedb.ref("UPC").child("ABOUT").once('value', snapshot => {
            setEditDesc(snapshot.val().Description)
            setEditImgUrl(snapshot.val().imgUrl)
        })
    }, [])

    const handleUpload = (e) => {
        var uploadDate = new Date();
        uploadDate = uploadDate.getDate() + "-" + uploadDate.getMonth() + "-" + uploadDate.getFullYear()
        uploadDate = uploadDate.toString();
        setshowSpinner(true)
        if (imgUrl == null) {
            firedb.ref("UPC").child("ABOUT").set({
                Description: desc,
                imgUrl: "No Image"
            })

        }
        else {
            const storageRef = firebase.storage().ref(imgUrl.name)
            storageRef.put(imgUrl).on("state_changed", (snap) => {
                console.log()
            }, (error) => { console.log(error) }, async () => {
                const url = await storageRef.getDownloadURL();

                firedb.ref("UPC").child("ABOUT").set({
                    Description: desc,
                    imgUrl: url
                }).then(() => { setdesc(" "); setshowSpinner(false); setshowToast(true) })

            })
        }
    }

    const EditHandler = () => {
        setshowSpinner(true)
        firedb.ref("UPC").child("ABOUT").set({
            Description: editDesc,
            imgUrl: editImgUrl
        }).then(() => { setdesc(" "); setshowSpinner(false); setshowToast(true) })

    }
    return (
        <>
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
                            <Toast.Body>About Page Updated!</Toast.Body>
                        </Toast>
                    </div>
                    <h3>About Us Page Controls</h3>
                    <hr />
                    <form onSubmit={(e) => { e.preventDefault(); handleUpload() }}>
                        <textarea className="form-control mb-3" value={desc} rows="8" onChange={(e) => { setdesc(e.target.value) }} placeholder="Write About Us Description"></textarea>
                        <div className="ImageContainer">
                            <label>Upload Page Image</label>
                            <input type="file" value={undefined} onChange={(e) => { setimgUrl(e.target.files[0]) }} />
                        </div>

                        <button className="btn btn-primary">Upload</button>

                    </form>

                </>}

            </div>
            <div className='EditAboutPageContainer'>
                <hr />
                <hr />
                <h3>Edit About Us Text</h3>
                <hr />
                <form onSubmit={(e) => { e.preventDefault(); EditHandler() }}>
                    <textarea className="form-control mb-3" value={editDesc} rows="10" onChange={(e) => { setEditDesc(e.target.value) }} ></textarea>


                    <button className="btn btn-primary">Update</button>

                </form>
            </div>
        </>
    )
}

export default AboutUs
