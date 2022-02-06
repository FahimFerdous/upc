import React, { useState, useEffect } from 'react'
import "./news.css";
import { useHistory, useParams, Link } from "react-router-dom"

import parse from 'html-react-parser';

import { firebase } from "../../firebaseConfig";

const fireDb = firebase.database();
const SingleBlogPage = () => {
    const [singleBlog, setsingleBlog] = useState({})

    const { id } = useParams();

    const history = useHistory();

    useEffect(() => {
        fireDb.ref("UPC").child(`Blog/${id}`).get().then((snapshot) => {
            if (snapshot.exists()) {
                setsingleBlog(snapshot.val())
            }

        })
    }, [id])



    return (
        <div className="bgImage2">
            <div className="container">
                <div className="row">

                    <div className="col-xl-12 col-md-12 col-lg-12 newsContainer">
                        <div className="newsCardBig singleBlogPage">
                            <div className="backButton">
                                <h3>{singleBlog.title}</h3>
                                <button onClick={() => { history.push("/News") }}>Back to Previous</button>

                            </div>
                            <div className="hr"></div>

                            <div className="authorInfo">
                                <p><span><i class="fas fa-pen-square"></i></span><span className="label">Posted By: </span> <b>{singleBlog.author}</b></p>
                                <p><span><i class="fas fa-calendar-day"></i></span><span className="label">Posted At: </span> <b>{singleBlog.createdAt}</b></p>
                            </div>
                            <img src={singleBlog.imgUrl} />

                            <div className="content">

                                <p>{parse(`${singleBlog.content}`)}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleBlogPage
