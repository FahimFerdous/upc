import React from 'react'
import "./news.css"

const SingleNewsCard = () => {
    return (
        <div className="newsCardBig singleNewsCard">
            <img src="https://cdn.pixabay.com/photo/2018/08/18/22/45/real-estate-3615614_960_720.jpg" />
            <div className="authorInfo">
                <p><span><i class="fas fa-pen-square"></i></span>Author</p>
                <p><span><i class="fas fa-calendar-day"></i></span>Time</p>
            </div>
            <div className="content">
                <h4>This is a heading for latest news</h4>
                <p>The first big heading container will hold the latest news part. With the author and a time .</p>
            </div>
            <div>
                <button className="btn">Read More</button>
            </div>
        </div>
    )
}

export default SingleNewsCard
