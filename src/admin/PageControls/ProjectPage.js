import React, { useState } from 'react'
import { Toast, Spinner, Button } from "react-bootstrap"

import { firebase } from "../../firebaseConfig"

const ProjectPage = () => {
    const [imgUrl, setimgUrl] = useState(null)

    const [showToast, setshowToast] = useState(false)
    const [showSpinner, setshowSpinner] = useState(false)

    const handleUpload = (e) => {
        var uploadDate = new Date();
        uploadDate = uploadDate.getDate() + "-" + uploadDate.getMonth() + "-" + uploadDate.getFullYear()
        uploadDate = uploadDate.toString();
        setshowSpinner(true)

        const storageRef = firebase.storage().ref(imgUrl.name)
        storageRef.put(imgUrl).on("state_changed", (snap) => {
            console.log()
        }, (error) => { console.log(error) }, async () => {
            const url = await storageRef.getDownloadURL();

            firebase.database().ref("UPC").child("PROJECT_LAOYOUT").set({

                imgUrl: url
            }).then(() => { setshowSpinner(false); setshowToast(true) })

        })

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
                <h3>Project Layout Controls</h3>
                <hr />
                <form onSubmit={(e) => { e.preventDefault(); handleUpload() }} className="formContainer">


                    <label>Upload Project Layout Image</label>
                    <input type="file" value={undefined} onChange={(e) => setimgUrl(e.target.files[0])} />


                    <button className="btn btn-primary">Upload</button>

                </form>
            </>}




        </div>
    )
}

export default ProjectPage
