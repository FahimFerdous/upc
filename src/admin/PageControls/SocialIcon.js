import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

import { firebase } from "../../firebaseConfig"
const firedb = firebase.database()
const SocialIcon = () => {
    const [fb, setFb] = useState()
    const [tw, setTw] = useState()
    const [yo, setYo] = useState()
    const [li, setLi] = useState()

    const handleSubmit = (e, type) => {
        e.preventDefault()

        if (type == "Facebook") {
            firedb.ref("UPC").child("SocialLink").child("Facebook").set({
                link: fb
            }).then(() => {
                setFb("Link Changed")
            })
        }
        else if (type == "Twitter") {
            firedb.ref("UPC").child("SocialLink").child("Twitter").set({
                link: tw
            }).then(() => {
                setTw("Link Changed")
            })
        }
        else if (type == "Youtube") {
            firedb.ref("UPC").child("SocialLink").child("Youtube").set({
                link: yo
            }).then(() => {
                setYo("Link Changed")
            })
        }
        else if (type == "LinkedIn") {
            firedb.ref("UPC").child("SocialLink").child("LinkedIn").set({
                link: li
            }).then(() => {
                setLi("Link Changed")
            })
        }

    }
    return (
        <Container>
            <h4> Set Social Icon</h4>
            <hr />

            <form className="subscribe" onSubmit={(e) => handleSubmit(e, "Facebook")} style={{ marginBottom: '2%' }}>


                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Facebook Link"
                        value={fb}
                        onChange={(e) => { setFb(e.target.value) }}


                    />
                    <button className="btn btn-primary" type="submit">
                        Set
                    </button>

                </div>
            </form>
            <form className="subscribe" onSubmit={(e) => handleSubmit(e, "Twitter")} style={{ marginBottom: '2%' }}>


                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Twitter Link"
                        value={tw}
                        onChange={(e) => { setTw(e.target.value) }}


                    />
                    <button className="btn btn-primary" type="submit">
                        Set
                    </button>

                </div>
            </form>
            <form className="subscribe" onSubmit={(e) => handleSubmit(e, "Youtube")} style={{ marginBottom: '2%' }}>


                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Youtube Link"
                        value={yo}
                        onChange={(e) => { setYo(e.target.value) }}


                    />
                    <button className="btn btn-primary" type="submit">
                        Set
                    </button>

                </div>
            </form>
            <form className="subscribe" onSubmit={(e) => handleSubmit(e, "LinkedIn")} style={{ marginBottom: '2%' }}>


                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter LinkedIn Link"
                        value={li}
                        onChange={(e) => { setLi(e.target.value) }}


                    />
                    <button className="btn btn-primary" type="submit">
                        Set
                    </button>

                </div>
            </form>





        </Container>
    )
}

export default SocialIcon
