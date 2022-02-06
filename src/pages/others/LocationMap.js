import React, { useState, useEffect } from 'react'
import { firebase } from "../../firebaseConfig"

const LocationMap = () => {

    const [data, setdata] = useState({})
    useEffect(() => {
        firebase.database().ref("UPC/LOCATION_MAP/").on("value", (snapshot) => {
            setdata(snapshot.val());
            console.log("success")
        });
    }, [])
    return (
        <div>
            <div className="full-row bg-gray" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className="text-secondary double-down-line text-center">Location Map</h2>
                        </div>
                        <div className="col-md-6">
                            <h2 className="text-secondary double-down-line text-center">On Google Map</h2>
                        </div>
                    </div>

                    <div className="row row-cols-xl-12 row-cols-md-2 mt-5 row-cols-1 g-4">
                        <div className="col-md-6">
                            <div className=" bg-white shadow-one">
                                <div className="overflow-hidden locattionMapDesign1">
                                    <a href={data.imgUrl} className="fancybox" data-fancybox="gallery1">
                                        <img className="block__pic" src={data.imgUrl} alt="" />
                                    </a>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-6">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1289.5855169121032!2d90.369699572168!3d23.90739020038736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c37f3ca748cf%3A0x91ccc99340f16040!2sUttara%20Probortan%20City!5e0!3m2!1sen!2sbd!4v1626378774214!5m2!1sen!2sbd" width="100%" height="450" style={{ border: '0' }} allowfullscreen="" loading="lazy"></iframe>
                        </div>


                    </div>

                </div>
            </div>

            {/*============== Map Section Start ==============*/}
            {/*   <div className="full-row bg-white p-0" >
                <div className="container-fluid">

                    <div className="row" style={{ paddingTop: '85px' }}>
                        <div className="col">
                            <h2 className="text-secondary double-down-line text-center">On Google Map</h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1289.5855169121032!2d90.369699572168!3d23.90739020038736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c37f3ca748cf%3A0x91ccc99340f16040!2sUttara%20Probortan%20City!5e0!3m2!1sen!2sbd!4v1626378774214!5m2!1sen!2sbd" width="100%" height="450" style={{ border: '0' }} allowfullscreen="" loading="lazy"></iframe>
                        </div>
                    </div>


                </div>
            </div> */}
            {/*============== Map Section End ==============*/}
        </div>
    )
}

export default LocationMap
