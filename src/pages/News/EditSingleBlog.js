import React, { useState, useEffect } from 'react'
import "./news.css"

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { useHistory, useParams, Link } from "react-router-dom"

import { Toast, Spinner, Button, Container } from "react-bootstrap"
import parse from 'html-react-parser';

import { firebase } from "../../firebaseConfig";

const fireDb = firebase.database();


const EditSingleBlog = () => {

    const [singleBlog, setsingleBlog] = useState({})

    const [isLoading, setisLoading] = useState(true);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");
    const [showToast, setshowToast] = useState(false)
    const [showSpinner, setshowSpinner] = useState(false)





    const { id } = useParams();

    const history = useHistory();



    useEffect(() => {
        fireDb.ref("UPC").child(`Blog/${id}`).once('value', snapshot => {
            if (snapshot.exists()) {
                setsingleBlog(snapshot.val());

                setTitle(snapshot.val().title);
                setAuthor(snapshot.val().author);
                setContent(snapshot.val().content);

            }
        }).then(() => { setisLoading(false) })
    }, [id]);

    if (isLoading) {
        <div>
            <h2>Loading</h2>
        </div>
    }


    const handleBlogEdit = (e) => {
        e.preventDefault()
        setshowSpinner(true)
        var uploadDate = new Date();
        uploadDate = uploadDate.getDate() + "-" + uploadDate.getMonth() + "-" + uploadDate.getFullYear()
        uploadDate = uploadDate.toString();

        fireDb.ref("UPC").child(`Blog/${id}`).set({
            title: title,
            author: author,
            Category: singleBlog.Category,
            imgUrl: singleBlog.imgUrl,
            content: content,
            createdAt: uploadDate

        }).then(() => {
            setshowSpinner(false); setshowToast(true)

        })
    }


    return (
        <Container>
            <div className="EditorContainer">
                <div>
                    {
                        showSpinner ? <Button variant="primary" disabled>
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
                                    <Toast.Body>Blog Updated!</Toast.Body>
                                </Toast>
                            </div>

                            <h4>Edit News <span><button className='btn btn-primary' onClick={() => { history.push("/NewsDashboard") }}>Go Back</button></span></h4>
                            <hr />

                            <form onSubmit={handleBlogEdit}>
                                <div className="inputContainer">
                                    <label>Category</label>
                                    <input type="text" name="category" value={singleBlog.Category} disabled />
                                </div>
                                <div className="inputContainer">
                                    <label>Blog Title</label>
                                    <input type="text" name="title" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                                </div>
                                <div className="inputContainer">
                                    <label>Author Name</label>
                                    <input type="text" name="author" value={author} onChange={(e) => { setAuthor(e.target.value) }} />
                                </div>


                                <div className="inputContainer">
                                    <label>Edit Blog Content</label>
                                    <ReactQuill className="editor" value={content} theme="snow"
                                        onChange={(e) => { setContent(e) }} />
                                </div>
                                <div className="inputContainer">
                                    <div className="buttonContainer">
                                        <hr />
                                        <button type="submit">Update</button>
                                    </div>
                                </div>
                            </form>
                        </>
                    }

                </div>
            </div>
        </Container>
    )
}



export default EditSingleBlog
