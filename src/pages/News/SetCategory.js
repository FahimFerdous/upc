import React, { useState, useEffect } from 'react'
import { Col, Container, Modal, Row, Table } from 'react-bootstrap'
import { firebase } from "../../firebaseConfig"

const firedb = firebase.database()

const SetCategory = () => {

    const [category, setCategory] = useState()
    const [issubmitted, setIssubmitted] = useState(false)
    const [ListCategory, setListCategory] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        firedb.ref("UPC").child("BlogCategory").push({
            category
        }).then(() => {
            setIssubmitted(true)
            setCategory(" ")
        })

    }

    useEffect(() => {
        firedb.ref("UPC").child("BlogCategory").on("value", snapshot => {

            setListCategory(snapshot.val())
        })
    }, [])


    return (
        <div>
            <Container>
                <Row>
                    <Modal show={issubmitted} onHide={() => setIssubmitted(false)}>

                        <Modal.Header closeButton>
                            <Modal.Title><b>Uttar Proborton City</b></Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <p style={{ fontSize: '18px', color: '#4d4d4d' }}>File Uploaded</p>
                        </Modal.Body>

                    </Modal>
                </Row>
                <Row>

                    <Col>
                        <h4>Add Category</h4>
                        <hr />
                        <form className="subscribe" onSubmit={handleSubmit}>


                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter a category name"
                                    value={category}
                                    onChange={(e) => { setCategory(e.target.value) }}
                                />
                                <button className="btn btn-primary" type="submit">
                                    Save
                                </button>

                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <h4>List of Category</h4>
                        <hr />
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Category Name</th>

                                </tr>
                            </thead>
                            <tbody>
                                {/* ListCategory.map((id, index) => {
                                    return (
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{ListCategory[id]}</td>

                                        </tr>
                                    )
                                }) */
                                    Object.keys(ListCategory).map((id, index) => {
                                        return (
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{ListCategory[id].category}</td>

                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SetCategory
