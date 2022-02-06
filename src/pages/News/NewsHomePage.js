import React, { useEffect, useState } from 'react'
import "./news.css"
import SingleNewsCard from './SingleNewsCard'
import { firebase } from "../../firebaseConfig";

import { Link } from "react-router-dom";

import parse from 'html-react-parser';


const fireDb = firebase.database();

const NewsHomePage = () => {
    const [loading, setloading] = useState(true);
    const [blog, setblog] = useState({});

    const getblogData = () => {
        fireDb.ref("UPC").child("Blog").on("value", (snapshot) => {
            if (snapshot.val != null) {
                setblog({ ...snapshot.val() })
            }
        })

    }

    useEffect(() => {
        getblogData();


    }, [])


    return (
        <div className=" bgImage">
            <div className="container">
                <div className="row">

                    <div className="col-xl-9 col-md-9 col-lg-19 newsContainer">

                        {!loading ? "Loading...." :
                            <>
                                {Object.keys(blog).map((id, index) => {
                                    return (
                                        <>
                                            <div className="newsCardBig">
                                                <img src={blog[id].imgUrl} />
                                                <div className="authorInfo">
                                                    <p><span><i class="fas fa-pen-square"></i></span>{blog[id].author}</p>
                                                    <p><span><i class="fas fa-calendar-day"></i></span>{blog[id].createdAt}</p>
                                                </div>
                                                <div className="content">
                                                    <h4>{blog[id].title}</h4>
                                                    <div className="hr"></div>

                                                    <p>{parse(`${blog[id].content}`)}</p>
                                                </div>
                                                <div>
                                                    <Link to={`/view/${id}`}><button className="btn" >Continue Reading...</button></Link>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}

                            </>
                        }

                        {/* <div className="smallnewsCard">
                            <div className="col-4">
                                <SingleNewsCard />
                            </div>
                            <div className="col-4">
                                <SingleNewsCard />
                            </div>
                            <div className="col-4">
                                <SingleNewsCard />
                            </div>
                        </div> */}

                    </div>
                    <div className="col-xl-3 col-md-3 col-lg-3">
                        <div className="categoryContainer">
                            <h4>Categories</h4>
                            <ul>
                                <li>Events</li>
                                <li>Promotions</li>
                                <li>Site visiting</li>
                                <li>Client Updates</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsHomePage
