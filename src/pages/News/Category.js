import React, { useState, useEffect } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import { firebase } from "../../firebaseConfig"

const firedb = firebase.database()

const Category = () => {
    const [category, setCategory] = useState()
    const [issubmitted, setIssubmitted] = useState(false)
    const [ListCategory, setListCategory] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        firedb.ref("UPC").child("BlogCategory").push({
            category
        }).then(() => {
            setIssubmitted(true)
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
                    <Col>
                        <h4>Add Category</h4>
                        <hr />
                        <form className="subscribe" onSubmit={handleSubmit}>


                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your Mobile"
                                    value={category}
                                    onChange={(e) => { setCategory(e.target.value) }}
                                />
                                <button className="btn btn-primary" type="submit">
                                    Subscribe
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
                                {ListCategory.map((id, index) => {
                                    return (
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{ListCategory[id].category}</td>

                                        </tr>
                                    )
                                })}

                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Category
