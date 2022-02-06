import React, { useState, useEffect } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import { object } from 'yup'

import { firebase } from "../../firebaseConfig"

const firedb = firebase.database()

const ViewInfo = () => {
    const [subscriber, setSubscriber] = useState({})
    const [message, setMessage] = useState({})

    useEffect(() => {
        firedb.ref("UPC").child("Subscription").on("value", (snapshot) => {
            if (snapshot.val != null) {
                setSubscriber({ ...snapshot.val() })
            }
        })

        firedb.ref("UPC").child("UserMessage").on("value", (snapshot) => {
            if (snapshot.val != null) {
                setMessage({ ...snapshot.val() })
            }
        })


    }, [])

    const DeleteHandler = (id) => {
        if (window.confirm("Do you Want to Delete the Item? ")) {
            firedb.ref("UPC").child(`Subscription/${id}`).remove()
        }
    }

    const DeleteMessage = (id) => {
        if (window.confirm("Do you want to delete the Item? ")) {
            firedb.ref("UPC").child(`UserMessage/${id}`).remove()
        }
    }
    return (
        <Container>
            <Row>
                <Col>
                    <h4 style={{ fontSize: '26px', color: '#252525' }}>User's Message</h4>
                    <hr />
                    <table className="table table-bordered">
                        <thead className='thead-dark'>
                            <tr>
                                <th>Sl</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Message</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(message).map((id, index) => {
                                return (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{message[id].name}</td>
                                        <td>{message[id].email}</td>
                                        <td>{message[id].phone}</td>
                                        <td>{message[id].message}</td>
                                        <td>{message[id].date}</td>
                                        <td><button onClick={() => { DeleteMessage(id) }} className="btn btn-danger">Delete</button></td>
                                    </tr>
                                )
                            })}


                        </tbody>
                    </table>
                </Col>
            </Row>
            <hr />
            <hr />
            <Row>
                <Col>
                    <h4 style={{ fontSize: '26px', color: '#252525' }}>Subscribed with phone Number</h4>
                    <hr />
                    <table className='table table-bordered table-striped'>
                        <thead className='thead-dark'>
                            <tr>
                                <th>Sl.</th>

                                <th>Phone Number</th>
                                <th>Subscription Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(subscriber).map((id, index) => {
                                return (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{subscriber[id].EmailOrPhone}</td>
                                        <td>{subscriber[id].date}</td>
                                        <td><button className='btn btn-danger' onClick={() => DeleteHandler(id)}>Delete</button></td>

                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </Col>
            </Row>
        </Container>
    )
}

export default ViewInfo
