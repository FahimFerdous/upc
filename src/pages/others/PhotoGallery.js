import React, { useState, useEffect } from "react";
import { SRLWrapper, useLightbox } from "simple-react-lightbox";


import { firebase } from "../../firebaseConfig";

const dbCon = firebase.database();
const PhotoGallery = () => {
    const [data, setdata] = useState([]);
    const [isLoading, setisLoading] = useState(false)


    const { openLightbox, closeLightbox } = useLightbox()


    useEffect(() => {


        dbCon.ref("UPC/PHOTO_GALLERY/").once("value", (snapshot) => {

            var listData = [];

            snapshot.forEach((snap) => {
                listData.push(snap.val());


            });
            setdata(listData);

        })


    }, []);


    const options = {
        settings: {
            overlayColor: "rgba(25, 136, 124,.8)",
            autoplaySpeed: 1500,
            transitionSpeed: 900,
        },
        buttons: {
            backgroundColor: "#1b5245",
            iconColor: "rgba(126, 172, 139, 0.8)",
        },
        caption: {
            captionColor: "#a6cfa5",
            captionTextTransform: "uppercase",
        },
    };



    return (
        <div className="imageSliderMainContainer" onLoad={() => openLightbox()}>
            <SRLWrapper options={options}>
                <div className="full-row bg-white">
                    <div className="container">
                        <div className="row">

                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                <div className="featured-thumb hover-zoomer">
                                    <div className="photoGallery overflow-hidden position-relative">
                                        <a href="images/img1.jpg">
                                            <img src="images/img1.jpg" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                <div className="featured-thumb hover-zoomer">
                                    <div className="photoGallery overflow-hidden position-relative">
                                        <a href="images/img2.jpg">
                                            <img src="images/img2.jpg" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                <div className="featured-thumb hover-zoomer">
                                    <div className="photoGallery overflow-hidden position-relative">
                                        <a href="images/img3.jpg">
                                            <img src="images/img3.jpg" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>


                            {data.map((value) => {
                                return (
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                        <div className="featured-thumb hover-zoomer">
                                            <div className="photoGallery overflow-hidden position-relative">
                                                <a href={value.imgUrl}>
                                                    <img src={value.imgUrl} alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </SRLWrapper>
        </div>
    );
};

export default PhotoGallery;
