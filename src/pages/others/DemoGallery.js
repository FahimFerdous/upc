import React from 'react';

import { SRLWrapper } from "simple-react-lightbox";



const DemoGallery = () => {
    return (

        <SRLWrapper>

            <a href="images/about/img1.jpg" >
                <img alt=".." src="images/about/img1.jpg" height="200px" width="200px" />
            </a>
            <a href="images/about/img2.jpg" >
                <img alt=".." src="images/about/img2.jpg" height="200px" width="200px" />
            </a>

        </SRLWrapper>

    )
}

export default DemoGallery
