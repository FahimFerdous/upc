import React from 'react'

const Management = () => {
    return (
        <div>
            <div className="full-row bg-white" style={{ paddingTop: '150px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 className="text-secondary double-down-line text-center">Management Personnel</h2>
                        </div>
                    </div>

                    <div className="row row-cols-xl-3 row-cols-md-2 mt-5 row-cols-1 g-4">
                        <div className="col">
                            <div className="hover-zoomer bg-white shadow-one">
                                <div className="overflow-hidden managementdesign1"> <img src="images/GolamMostafa(CEO).png" alt="" /> </div>
                                <div className="py-3 text-center">
                                    <h5 className="text-secondary hover-text-primary"><a href="#">Golam Mostafa</a></h5>
                                    <span>CEO</span> </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="hover-zoomer bg-white shadow-one">
                                <div className="overflow-hidden managementdesign1"> <img src="images/Harun-or-Rashid(Director).png" alt="" /> </div>
                                <div className="py-3 text-center">
                                    <h5 className="text-secondary hover-text-primary"><a href="#">Harun-or-Rashid</a></h5>
                                    <span>Director</span> </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="hover-zoomer bg-white shadow-one">
                                <div className="overflow-hidden managementdesign1" > <img src="images/MohammadMahabubulAlam(Chairman)).png" alt="" /> </div>
                                <div className="py-3 text-center">
                                    <h5 className="text-secondary hover-text-primary"><a href="#">Mohammad Mahabubul Alam</a></h5>
                                    <span>Chairman</span> </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="hover-zoomer bg-white shadow-one">
                                <div className="overflow-hidden managementdesign1"> <img src="images/Mst.MomtazBegum(Director).png" alt="" /> </div>
                                <div className="py-3 text-center">
                                    <h5 className="text-secondary hover-text-primary"><a href="#">Mst. Momtaz Begum</a></h5>
                                    <span>Director</span> </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Management
