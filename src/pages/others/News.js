import React, { useEffect, useState } from 'react'

import { firebase } from "../../firebaseConfig"

const News = () => {
    const [loadData, setLoadData] = useState(null)

    const dbCon = firebase.database();

    useEffect(() => {
        dbCon.ref("UPC/").on("value", (snapshot) => {
            console.log(snapshot.val())
        });
    })

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div class="pt-4">
                        <img style={{ height: '500px' }} src="images/vacation.png" alt="" />
                        <h2 style={{ textAlign: 'center' }} class="comming-title text-secondary">Coming Soon</h2>
                        <h5 style={{ textAlign: 'center' }} class="inner-title text-secondary">Stay Connected, Stay Updated!</h5>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default News
