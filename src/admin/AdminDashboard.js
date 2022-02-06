import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import "./adminDesign.css"
import { useAuth } from './context/AuthContext'
import AboutUs from './PageControls/AboutUs'
import ContactPage from './PageControls/ContactPage'
import GalleryPage from './PageControls/GalleryPage'
import LocationMap from './PageControls/LocationMap'
import ProjectPage from './PageControls/ProjectPage'
import SocialIcon from './PageControls/SocialIcon'
import ViewInfo from './PageControls/ViewInfo'



const AdminDashboard = () => {
    const [showGallery, setshowGallery] = useState(false)
    const [showLocationMap, setshowLocationMap] = useState(false)
    const [showProjectLayout, setshowProjectLayout] = useState(false)
    const [showContact, setshowContact] = useState(false)
    const [showAbout, setshowAbout] = useState(true)
    const [showInfo, setshowInfo] = useState(false)
    const [socialIcon, setSocialIcon] = useState(false)

    const { logoutUser } = useAuth()

    const history = useHistory()

    const HandlePageShow = (page) => {
        if (page == "About") {
            setshowAbout(true)
            setshowContact(false)
            setshowGallery(false)
            setshowLocationMap(false)
            setshowProjectLayout(false)
            setshowInfo(false)
            setSocialIcon(false)
        }
        else if (page == "Gallery") {
            setshowAbout(false)
            setshowContact(false)
            setshowGallery(true)
            setshowLocationMap(false)
            setshowProjectLayout(false)
            setshowInfo(false)
            setSocialIcon(false)
        }
        else if (page == "Location") {
            setshowAbout(false)
            setshowContact(false)
            setshowGallery(false)
            setshowLocationMap(true)
            setshowProjectLayout(false)
            setshowInfo(false)
            setSocialIcon(false)
        }
        else if (page == "Project") {
            setshowAbout(false)
            setshowContact(false)
            setshowGallery(false)
            setshowLocationMap(false)
            setshowProjectLayout(true)
            setshowInfo(false)
            setSocialIcon(false)
        }
        else if (page == "Contact") {
            setshowAbout(false)
            setshowContact(true)
            setshowGallery(false)
            setshowLocationMap(false)
            setshowProjectLayout(false)
            setshowInfo(false)
            setSocialIcon(false)
        }
        else if (page == "Info") {
            setshowAbout(false)
            setshowContact(false)
            setshowGallery(false)
            setshowLocationMap(false)
            setshowProjectLayout(false)
            setshowInfo(true)
            setSocialIcon(false)
        }
        else if (page == "socialIcon") {
            setshowAbout(false)
            setshowContact(false)
            setshowGallery(false)
            setshowLocationMap(false)
            setshowProjectLayout(false)
            setshowInfo(false)
            setSocialIcon(true)
        }
    }

    return (
        <div className="bgImage">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                        <div className="optionContainer">
                            <h3>Editor</h3>
                            <button className="btn " onClick={() => { HandlePageShow("About") }}>About Us Page</button>
                            <button className="btn " onClick={() => { HandlePageShow("Gallery") }}>Gallery Section</button>
                            <button className="btn " onClick={() => { HandlePageShow("Location") }}>Location Map Page</button>
                            <button className="btn " onClick={() => { HandlePageShow("Project") }}>Project Layout Page</button>
                            <button className="btn " onClick={() => { HandlePageShow("Contact") }}>Contact Page</button>
                            <button className="btn " onClick={() => { HandlePageShow("socialIcon") }}>Set Social Link</button>
                            <button className="btn " onClick={() => { HandlePageShow("Info") }}>View Queries</button>
                            <button className="btn " onClick={() => { history.push("/NewsDashboard") }}>Blog</button>
                            <button className="btn " onClick={() => { logoutUser() }}>Log out</button>
                        </div>
                    </div>
                    <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12">
                        <div className="itemContainer">
                            {showAbout ? <AboutUs /> : ""}
                            {showContact ? <ContactPage /> : ""}
                            {showGallery ? <GalleryPage /> : ""}
                            {showLocationMap ? <LocationMap /> : ""}
                            {showProjectLayout ? <ProjectPage /> : ""}
                            {showInfo ? <ViewInfo /> : ""}
                            {socialIcon ? <SocialIcon /> : ""}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard
