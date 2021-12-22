import React from "react"
import "./CompanyReviws.css"

import {
    Row,
    Col,
    Image,
    Form,
    Button,
    Container,
    FormGroup,
} from "react-bootstrap"

const CompanyReviws = () => {
    return (
        <>
            <Container
                fluid={true}
                className="shadow3 py-5 h-100 height-arrange"
            >
                <Row>
                    <Col
                        md={{ span: 6, offset: 3 }}
                        xs={{ span: 8, offset: 2 }}
                    >
                        <div className="shadow2 br-1 mainpadding text-center">
                            <div className="text-center">
                                <Row className="p-3">
                                    <Col
                                        md={{ span: 12 }}
                                        className="my-1 pb-2"
                                    >
                                        <Form.Group>
                                            <Form.Control
                                                type="number"
                                                className="br-1 p-fileds"
                                                placeholder="Year of Drive"
                                                id="yearofdrive"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col
                                        md={{ span: 12 }}
                                        className="my-1 pb-2"
                                    >
                                        <Form.Group>
                                            <Form.Control
                                                type="text"
                                                className="br-1 p-fileds"
                                                placeholder="Company Name"
                                                id="companyname"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col
                                        md={{ span: 12 }}
                                        className="my-1 pb-2"
                                    >
                                        <Form.Group>
                                            <Form.Control
                                                type="text"
                                                className="br-1 p-fileds"
                                                placeholder="Job Profile"
                                                id="jobprofile"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col
                                        md={{ span: 12 }}
                                        className="my-1 pb-2"
                                    >
                                        <Form.Group>
                                            <Form.Control
                                                type="text"
                                                className="br-1 p-fileds"
                                                placeholder="Reviews"
                                                id="reviews"
                                                // min="1"
                                                // max="5"
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

export default CompanyReviws
