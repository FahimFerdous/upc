
import React, { useState, useEffect } from 'react'
import { Toast, Spinner, Button, Container, Row, Col } from "react-bootstrap"

import { firebase } from "../../firebaseConfig"

const firedb = firebase.database()
const storageRef = firebase.storage()
const GalleryPage = () => {
    const [photoGalleryImage, setphotoGalleryImage] = useState(null)
    const [birdEyeImage, setBirdEyeImage] = useState(null)

    const [showToast, setshowToast] = useState(false)
    const [showSpinner, setshowSpinner] = useState(false)
    const [ImageList, setImageList] = useState({});

    const handleUpload = (e) => {
        var uploadDate = new Date();
        uploadDate = uploadDate.getDate() + "-" + uploadDate.getMonth() + "-" + uploadDate.getFullYear()
        uploadDate = uploadDate.toString();
        setshowSpinner(true)

        if (photoGalleryImage != null) {
            storageRef.ref(photoGalleryImage.name)
            storageRef.put(photoGalleryImage).on("state_changed", (snap) => {

            }, (error) => { console.log(error) }, async () => {
                const url = await storageRef.getDownloadURL();

                firedb.ref("UPC").child("PHOTO_GALLERY").push({

                    imgUrl: url
                }).then(() => { setshowSpinner(false); setshowToast(true) })

            })
        }

    }

    const handleBirdEyeImageUpload = () => {
        setshowSpinner(true)
        if (birdEyeImage != null) {
            storageRef.ref(birdEyeImage.name)
            storageRef.put(birdEyeImage).on("state_changed", (snap) => {

            }, (error) => { console.log(error) }, async () => {
                const url = await storageRef.getDownloadURL();

                firedb.ref("UPC").child("BIRD_EYE_IMAGE").push({

                    imgUrl: url
                }).then(() => { setshowSpinner(false); setshowToast(true) })

            })
        }
    }

    useEffect(() => {
        firedb.ref("UPC").child("PHOTO_GALLERY").once('value', snapshot => {

            setImageList(snapshot.val())
        })
    }, [ImageList]);

    const deleteImage = (id, link) => {
        if (window.confirm("Do you Want to Delete the Image? ")) {
            let imageRef = storageRef.refFromURL(link);
            imageRef.delete().then(() => {
                firedb.ref("UPC").child(`PHOTO_GALLERY/${id}`).remove(() => { console.log("deleted") })
            }).catch(err => console.log(err))
        }


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
                <h3>Gallery Section Controls</h3>
                <hr />
                <form className="formContainer" onSubmit={(e) => { e.preventDefault(); handleUpload() }}>


                    <label>Upload Photo Gallery Image</label>
                    <input type="file" value={undefined} onChange={(e) => setphotoGalleryImage(e.target.files[0])} />


                    <button className="btn btn-primary">Upload</button>

                </form>
                <hr />
                <form className="formContainer" onSubmit={(e) => { e.preventDefault(); handleBirdEyeImageUpload() }}>


                    <label>Upload Bird Eye View Image</label>
                    <input type="file" value={undefined} onChange={(e) => setBirdEyeImage(e.target.files[0])} />


                    <button className="btn btn-primary">Upload</button>

                </form>
            </>
            }

            <hr /><hr />
            <Row>
                <Col>
                    <h4 style={{ fontSize: '24px', color: '#252525', textAlign: 'center' }}>All Uploaded Image</h4>
                    <hr />
                    <table className="table table-bordered">
                        <thead className='thead-dark' style={{ textAlign: 'center' }}>
                            <tr>
                                <th>Sl</th>
                                <th>Image</th>

                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody style={{ textAlign: 'center' }}>
                            {/*   {Object.keys(message).map((id, index) => {
                                    return (
                                        <tr>
                                            <td>{index + 1}</td>
                                           
                                            <td><button onClick={() => { DeleteMessage(id) }} className="btn btn-danger">Delete</button></td>
                                        </tr>
                                    )
                                })} */}
                            {
                                Object.keys(ImageList).map((id, index) => {
                                    return (
                                        <>
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td className='DeleteImageContainer'><img src={ImageList[id].imgUrl} /></td>
                                                <td><button onClick={() => { deleteImage(id, ImageList[id].imgUrl) }} className="btn btn-danger">Delete</button></td>
                                            </tr>
                                        </>

                                    )

                                })
                            }
                        </tbody>
                    </table>
                </Col>
            </Row>


        </div>
    )
}

export default GalleryPage
