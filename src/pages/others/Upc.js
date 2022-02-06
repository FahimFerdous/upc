import React, { useEffect, useState } from 'react'

import { firebase } from "../../firebaseConfig"

const Upc = () => {

    const [data, setdata] = useState({})
    useEffect(() => {
        firebase.database().ref("UPC/ABOUT/").on("value", (snapshot) => {
            setdata(snapshot.val());
        });
    }, [])
    return (
        <div id="" class="bg-white">

            {/*============== About Our Company Section Start ==============*/}
            <div className="full-row bg-white" >
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h3 className="double-down-line-left text-secondary position-relative pb-4 mb-4">About Our Company</h3>
                        </div>
                    </div>
                    <div className="row about-company">
                        <div className="col-lg-7">
                            <div className="about-content">
                                <p>{data.Description}</p>

                            </div>
                            {/* <div className="fact-counter mt-5 md-mb-40">
                                <div className="row row-cols-md-3 row-cols-1 g-4">
                                    <div className="col">
                                        <div className="count wow text-center" data-wow-duration="300ms">
                                            <div className=" mb-3 d-flex justify-content-center">
                                                <h2 className="count-num" data-speed="3000" data-stop="120">0</h2>
                                                <strong>+</strong>
                                            </div>
                                            <span className="h6">Acres of Land</span>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="count wow text-center" data-wow-duration="300ms">
                                            <div className=" mb-3 d-flex justify-content-center">
                                                <h2 className="count-num" data-speed="3000" data-stop="60">0</h2>
                                                <strong>+</strong>
                                            </div>
                                            <span className="h6">Dedicated Employee</span>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="count wow text-center" data-wow-duration="300ms">
                                            <div className=" mb-3 d-flex justify-content-center"><strong></strong>
                                                <h2 className="count-num" data-speed="3000" data-stop="200">0</h2>
                                                <strong>+</strong>
                                            </div>
                                            <span className="h6">Loyal Customer</span>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        <div className="col-lg-5">
                            <div className="about-img"> <img src={data.imgUrl} alt="" /> </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*============== About Our Company Section End ==============*/}


            {/*============== How it work Section Start ==============*/}
            {/*   <div className="full-row bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="text-secondary double-down-line text-center">
                                How It Work
                            </h2>
                            <span className="text-center mt-4 d-block mb-5">
                                We listed our oppertunity and servies as a real estate company
                            </span>{" "}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="icon-thumb-one text-center mb-5">
                                <div className="bg-primary text-white rounded-circle position-absolute z-index-9">
                                    1
                                </div>
                                <div className="left-arrow">
                                    <i
                                        className="flaticon-investor flat-medium icon-primary"
                                        aria-hidden="true"></i>
                                </div>
                                <h5 className="text-secondary mt-5 mb-4">Discussion</h5>
                                <p>
                                    Nascetur cubilia sociosqu aliquet ut elit nascetur nullam duis
                                    tincidunt nisl non quisque vestibulum platea ornare ridiculus.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="icon-thumb-one text-center mb-5">
                                <div className="bg-primary text-white rounded-circle position-absolute z-index-9">
                                    2
                                </div>
                                <div className="left-arrow">
                                    <i
                                        className="flaticon-search flat-medium icon-primary"
                                        aria-hidden="true"></i>
                                </div>
                                <h5 className="text-secondary mt-5 mb-4">Files Review</h5>
                                <p>
                                    Nascetur cubilia sociosqu aliquet ut elit nascetur nullam duis
                                    tincidunt nisl non quisque vestibulum platea ornare ridiculus.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="icon-thumb-one text-center mb-5">
                                <div className="bg-primary text-white rounded-circle position-absolute z-index-9">
                                    3
                                </div>
                                <div>
                                    <i
                                        className="flaticon-handshake flat-medium icon-primary"
                                        aria-hidden="true"></i>
                                </div>
                                <h5 className="text-secondary mt-5 mb-4">Acquire</h5>
                                <p>
                                    Nascetur cubilia sociosqu aliquet ut elit nascetur nullam duis
                                    tincidunt nisl non quisque vestibulum platea ornare ridiculus.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="icon-thumb-one text-center mb-5">
                                <div className="bg-primary text-white rounded-circle position-absolute z-index-9">
                                    4
                                </div>
                                <div className="left-arrow">
                                    <i
                                        className="flaticon-strategy flat-medium icon-primary"
                                        aria-hidden="true"></i>
                                </div>
                                <h5 className="text-secondary mt-5 mb-4">Managment</h5>
                                <p>
                                    Nascetur cubilia sociosqu aliquet ut elit nascetur nullam duis
                                    tincidunt nisl non quisque vestibulum platea ornare ridiculus.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="icon-thumb-one text-center mb-5">
                                <div className="bg-primary text-white rounded-circle position-absolute z-index-9">
                                    5
                                </div>
                                <div className="left-arrow">
                                    <i
                                        className="flaticon-diagram flat-medium icon-primary"
                                        aria-hidden="true"></i>
                                </div>
                                <h5 className="text-secondary mt-5 mb-4">Survey</h5>
                                <p>
                                    Nascetur cubilia sociosqu aliquet ut elit nascetur nullam duis
                                    tincidunt nisl non quisque vestibulum platea ornare ridiculus.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="icon-thumb-one text-center mb-5">
                                <div className="bg-primary text-white rounded-circle position-absolute z-index-9">
                                    6
                                </div>
                                <div>
                                    <i
                                        className="flaticon-money flat-medium icon-primary"
                                        aria-hidden="true"></i>
                                </div>
                                <h5 className="text-secondary mt-5 mb-4">Collect</h5>
                                <p>
                                    Nascetur cubilia sociosqu aliquet ut elit nascetur nullam duis
                                    tincidunt nisl non quisque vestibulum platea ornare ridiculus.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}



            {/*============== How it work Section End ==============*/}

            {/*============== Authenticity Section Start ==============*/}
            {/*  <div className="full-row bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="text-secondary double-down-line text-center">
                                Authenticity
                            </h2>
                            <span className="text-center mt-4 d-block mb-5">
                                General information about our company is listed here
                            </span>{" "}
                        </div>
                    </div>
                    <div className="row">
                        <div class="col-md-4">
                            <h5 class="text-center mt-4 d-block single-down-line">Name of the Company</h5><hr className="aboutUssectionDesign1" />
                            <h3 class="text-secondary text-center">Paribarton Pvt Ltd.</h3>

                        </div>
                        <div class="col-md-4">
                            <h5 class="text-center mt-4 d-block single-down-line">Name of Project</h5><hr className="aboutUssectionDesign1" />
                            <h3 class="text-secondary text-center">Uttara probortan City</h3>

                        </div>
                        <div class="col-md-4">
                            <h5 class="text-center mt-4 d-block single-down-line">Establishment</h5><hr className="aboutUssectionDesign1" />
                            <h3 class="text-secondary text-center">January, 2013</h3>

                        </div>
                        <div class="col-md-4">
                            <h5 class="text-center mt-4 d-block single-down-line">Type of Company</h5><hr className="aboutUssectionDesign1" />
                            <h3 class="text-secondary text-center">Limited Company</h3>

                        </div>
                        <div class="col-md-4">
                            <h5 class="text-center mt-4 d-block single-down-line">Type of Business</h5><hr className="aboutUssectionDesign1" />
                            <h3 class="text-secondary text-center">Housing Estate</h3>

                        </div>
                        <div class="col-md-4">
                            <h5 class="text-center mt-4 d-block single-down-line">Operating bank</h5><hr className="aboutUssectionDesign1" />
                            <h3 class="text-secondary text-center">Exim Bank Bangladesh Ltd. and Brac Bank Bangladesh Ltd.</h3>

                        </div>
                        <div class="col-md-4">
                            <h5 class="text-center mt-4 d-block single-down-line">Approved by</h5><hr className="aboutUssectionDesign1" />
                            <h3 class="text-secondary text-center">Bangladesh Government(Local government Authority, National Housing Authority)</h3>

                        </div>
                        <div class="col-md-4">
                            <h5 class="text-center mt-4 d-block single-down-line">Member </h5><hr className="aboutUssectionDesign1" />
                            <h3 class="text-secondary text-center">BLDA</h3>

                        </div>
                        <div class="col-md-4">
                            <h5 class="text-center mt-4 d-block single-down-line">Certified by</h5><hr className="aboutUssectionDesign1" />
                            <h3 class="text-secondary text-center">Lamudi.</h3>

                        </div>

                    </div>
                </div>
            </div>


 */}
            {/*============== Authenticity Section End ==============*/}




        </div>
    )
}

export default Upc
