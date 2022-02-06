import React, { useEffect, useState } from 'react'
import "./news.css"

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { Toast, Spinner, Button } from "react-bootstrap"

import { firebase } from "../../firebaseConfig";
import { Link } from 'react-router-dom';

import Category from './Category';
import SetCategory from './SetCategory';

const fireDb = firebase.database();
const initialState = {
    title: "",
    author: "",
    content: "",
    Category: ""
}

const Dashboard = () => {

    const [isListOpen, setisListOpen] = useState(false)
    const [openCategory, setopenCategory] = useState(false)
    const [openBlog, setopenBlog] = useState(true)
    const [showToast, setshowToast] = useState(false)
    const [showSpinner, setshowSpinner] = useState(false)
    const [listCategory, setListCategory] = useState({})

    const [imgUrl, setimgUrl] = useState(null)
    const [state, setstate] = useState(initialState)
    const [blog, setblog] = useState({});
    const { title, author, content, Category } = state;

    const handleOnchange = (e) => {
        const { name, value } = e.target;
        setstate({ ...state, [name]: value })

    }
    useEffect(() => {
        getblogData();
        getCategory()
    }, [])

    const getblogData = () => {
        fireDb.ref("UPC").child("Blog").on("value", (snapshot) => {
            if (snapshot.val != null) {
                setblog({ ...snapshot.val() })
            }
        })

    }

    const getCategory = () => {
        fireDb.ref("UPC").child("BlogCategory").on("value", snapshot => {

            setListCategory(snapshot.val())
        })
    }




    const handleSubmit = (e) => {
        e.preventDefault();

        setshowSpinner(true)
        var uploadDate = new Date();
        uploadDate = uploadDate.getDate() + "-" + uploadDate.getMonth() + "-" + uploadDate.getFullYear()
        uploadDate = uploadDate.toString();

        const storageRef = firebase.storage().ref(imgUrl.name)
        storageRef.put(imgUrl).on("state_changed", (snap) => {
            console.log()
        }, (error) => { console.log(error) }, async () => {
            const url = await storageRef.getDownloadURL();

            fireDb.ref("UPC").child("Blog").push({
                title: title,
                author: author,
                Category: Category,
                imgUrl: url,
                content: content,
                createdAt: uploadDate

            }).then(() => {
                setshowSpinner(false); setshowToast(true)

            })

        })

    }

    const DeleteNewsHandler = (id) => {
        if (window.confirm("Are you sure You want to delete the item? ")) {
            fireDb.ref("UPC").child(`Blog/${id}`).remove()
        }
    }

    const handleQuilData = (e) => {
        setstate({ ...state, content: e })
    }
    return (
        <div className="bgImage2">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-md-3 col-lg-3">
                        <div className="categoryContainer">
                            <h4>Functions</h4>
                            <ul>
                                <li onClick={() => { setisListOpen(false); setopenCategory(false); setopenBlog(true) }}>Add Blog</li>

                                <li onClick={() => { setisListOpen(true); setopenCategory(false); setopenBlog(false) }}>List of Blog</li>
                                <li onClick={() => { setopenCategory(true); setisListOpen(false); setopenBlog(false) }}>Blog Category</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12- col-12">
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
                            </Button> :
                                <div className="EditorContainer">

                                    <div className="toastContainer">
                                        <Toast className="toastPart" show={showToast} onClose={() => setshowToast(false)}>
                                            <Toast.Header>

                                                <strong className="me-auto">UPC</strong>

                                            </Toast.Header>
                                            <Toast.Body>Blog Updated!</Toast.Body>
                                        </Toast>
                                    </div>

                                    {
                                        isListOpen ? <div className="blogList">

                                            <h4>List of Blog</h4>
                                            <hr />
                                            <table className="table table-bordered">
                                                <thead class="thead-dark">
                                                    <tr>
                                                        <th>Sl.</th>
                                                        <th>Title</th>
                                                        <th>Author</th>
                                                        <th>Date</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                {Object.keys(blog).map((id, index) => {

                                                    return (
                                                        <tr>
                                                            <td>{index + 1}</td>
                                                            <td>{blog[id].title}</td>
                                                            <td>{blog[id].author}</td>
                                                            <td>{blog[id].createdAt}</td>
                                                            <td className='newsButtonContainer'><Link to={`/Edit/${id}`}><button className="btn btn-success">Edit</button></Link>
                                                                <button className="btn btn-danger" onClick={() => DeleteNewsHandler(id)}>Delete</button>
                                                            </td>

                                                        </tr>
                                                    )
                                                })}
                                            </table>
                                        </div> :
                                            " "
                                    }

                                    {openBlog ? <div>
                                        <h4>Add News</h4>
                                        <hr />

                                        <form onSubmit={handleSubmit}>
                                            <div className="inputContainer">
                                                <label>Blog Title</label>
                                                <input type="text" name="title" value={title} onChange={handleOnchange} />
                                            </div>
                                            <div className="inputContainer">
                                                <label>Author Name</label>
                                                <input type="text" name="author" value={author} onChange={handleOnchange} />
                                            </div>
                                            <div className="inputContainer">
                                                <label>Category</label>
                                                <select
                                                    name="Category"
                                                    className="CapDropdownSelect"
                                                    style={{ display: "block", paddingLeft: '10px', width: '85%' }}
                                                    value={Category}
                                                    onChange={handleOnchange}
                                                    required
                                                >
                                                    <option value="" label="---Select---" disabled />
                                                    {Object.keys(listCategory).map((id, index) => {
                                                        return (
                                                            <option value={listCategory[id].category} label={listCategory[id].category} />
                                                        )
                                                    })}
                                                </select>

                                            </div>
                                            <div className="inputContainer">
                                                <label>Upload Blog Image</label>
                                                <input type="file" value={undefined} onChange={(e) => setimgUrl(e.target.files[0])} />
                                            </div>
                                            <div className="inputContainer">
                                                <label>Write Blog Content</label>
                                                <ReactQuill className="editor" value={content} theme="snow"
                                                    onChange={handleQuilData} />
                                            </div>
                                            <div className="inputContainer">
                                                <div className="buttonContainer">
                                                    <hr />
                                                    <button type="submit">Upload</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div> : " "}

                                    {openCategory ? <div><SetCategory /></div> : ""}


                                </div>

                        }

                    </div>
                </div>
            </div>
        </div >
    )
}

export default Dashboard
