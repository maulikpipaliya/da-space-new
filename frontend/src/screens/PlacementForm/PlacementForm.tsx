import React, { useState } from "react"
import {
    Row,
    Col,
    Image,
    Form,
    Button,
    Container,
    FormGroup,
} from "react-bootstrap"
import "./PlacementForm.css"

export const PlacementForm = () => {
    const [passwordVisible, setPasswordVisible] = useState(false)

    const changeEye = () => {
        setPasswordVisible(!passwordVisible)
    }

    return (
        <>
            <Container fluid={true} className="shadow3 h-94vh p-5 h-100">
                <Row>
                    <Col
                        md={{ span: 6, offset: 3 }}
                        xs={{ span: 8, offset: 2 }}
                    >
                        <div className="shadow2 br-1 mainpadding text-center">
                            <div className="text-center">
                                <Row className="p-3">
                                    <Col md={{ span: 12 }} className="my-1">
                                        <Form.Group>
                                            <Form.Control
                                                type="text"
                                                className="br-1 p-fileds"
                                                placeholder="Company Name"
                                                id="username"
                                            />
                                            <span className="text-muted fixedPosition">
                                                {/* @daiict.ac.in */}.
                                            </span>
                                        </Form.Group>
                                    </Col>
                                    <Col
                                        md={{ span: 12 }}
                                        className="my-1 pb-3"
                                    >
                                        <Form.Group>
                                            <Form.Control
                                                type="text"
                                                className="br-1 p-fileds"
                                                placeholder="Job Profile"
                                                id="displayname"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col
                                        md={{ span: 12 }}
                                        className="my-1 pb-3"
                                    >
                                        <Form.Group>
                                            <Form.Control
                                                type="number"
                                                className="br-1 p-fileds"
                                                placeholder="Year of Drive"
                                                id="yearofjoining"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col
                                        md={{ span: 6 }}
                                        className="my-1 pb-3"
                                    >
                                        <Form.Group>
                                            <Form.Control
                                                type="text"
                                                className="br-1 p-fileds"
                                                placeholder="Round Name X"
                                                id="contactno"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col
                                        md={{ span: 6 }}
                                        className="my-1 pb-3"
                                    >
                                        <Form.Group>
                                            <Form.Control
                                                type="text"
                                                className="br-1 p-fileds"
                                                placeholder="Round Name Y"
                                                id="contactno"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col
                                        md={{ span: 12 }}
                                        className="my-1 pb-3"
                                    >
                                        <Form.Group>
                                            <Form.Control
                                                as="textarea"
                                                rows={1}
                                                className="br-1 p-fileds"
                                                placeholder="Round Name X Description"
                                                id="contactno"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col
                                        md={{ span: 12 }}
                                        className="my-1 pb-3"
                                    >
                                        <Form.Group>
                                            <Form.Control
                                                as="textarea"
                                                rows={1}
                                                className="br-1 p-fileds"
                                                placeholder="Round Name Y Description"
                                                id="contactno"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col
                                        md={{ span: 12, offset: 0 }}
                                        className="mt-3"
                                    >
                                        <Button
                                            className="w-100 br-1 px-2 py-3 bg-da-blue"
                                            id="register"
                                        >
                                            Register
                                        </Button>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
