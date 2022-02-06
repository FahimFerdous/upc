import React, { useState, useEffect } from 'react'

import { firebase } from "../../firebaseConfig"

const BirdEye = () => {

    const [data, setdata] = useState([])
    useEffect(() => {
        firebase.database().ref("UPC/BIRD_EYE_IMAGE/").on("value", (snapshot) => {
            var listData = []
            snapshot.forEach((snap) => {
                listData.push(snap.val())
            })
            setdata(listData)
        });
    }, [])
    return (
        <div>
            <div className="full-row bg-white" >
                <div className="container" style={{ maxWidth: '1440px' }}>
                    <div className="row">
                        <div className="col">
                            <h2 className="text-secondary double-down-line text-center">Bird Eye View</h2>
                        </div>
                    </div>

                    {
                        data.map((value) => {
                            return (
                                <div className="row row-cols-xl-12 row-cols-md-2 mt-5 row-cols-1 g-4">
                                    <div className="col">
                                        <div className="bg-white shadow-one">
                                            <div className="overflow-hidden birdsEyeImage1">
                                                <a href={value.imgUrl} className="fancybox" data-fancybox='gallery1'>
                                                    <img className="block__pic" src={value.imgUrl}
                                                        alt="" />
                                                </a>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }



                </div>
            </div>




        </div>
    )
}

export default BirdEye
