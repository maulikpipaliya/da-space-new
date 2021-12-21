import React, { FC, useState } from "react"

import {
    Row,
    Col,
    Image,
    Form,
    Button,
    Container,
    FormGroup,
} from "react-bootstrap"
import { useHistory } from "react-router"

import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"

import "./LoginScreen.css"
import "../../index.css"
import "./RegistrationScreen.css"

import { Link } from "react-router-dom"
const RegistrationScreen = () => {
    const history = useHistory()

    const [passwordVisible, setPasswordVisible] = useState(false)

    const changeEye = () => {
        setPasswordVisible(!passwordVisible)
    }

    return (
        <>
            <Container fluid={true} className="shadow1 h-100vh p-4">
                <Row>
                    <Col
                        md={{ span: 6, offset: 3 }}
                        xs={{ span: 8, offset: 2 }}
                    >
                        <div className="shadow2 br-1 mainpadding text-center">
                            <div className="text-center">
                                <Row>
                                    <Col className="p-0">
                                        <Image
                                            src="./DASpaceLogo.svg"
                                            className="logoSize"
                                        />
                                    </Col>
                                </Row>
                                <Row className="p-3">
                                    <Col md={{ span: 12 }} className="my-1">
                                        <Form.Group>
                                            <Form.Control
                                                type="text"
                                                className="br-1 p-fileds"
                                                placeholder="Username"
                                                id="username"
                                            />
                                            <span className="text-muted fixedPosition">
                                                @daiict.ac.in
                                            </span>
                                        </Form.Group>
                                    </Col>
                                    <Col md={{ span: 6 }} className="my-1 pb-3">
                                        <Form.Group>
                                            <Form.Control
                                                type="text"
                                                className="br-1 p-fileds"
                                                placeholder="Display Name"
                                                id="displayname"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={{ span: 6 }} className="my-1 pb-3">
                                        <Form.Group>
                                            <Form.Control
                                                type="number"
                                                className="br-1 p-fileds"
                                                placeholder="Year of Joining"
                                                id="yearofjoining"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={{ span: 12 }} className="my-1">
                                        <Form.Group>
                                            <Form.Control
                                                type={
                                                    !passwordVisible
                                                        ? "password"
                                                        : "text"
                                                }
                                                className="br-1 p-fileds"
                                                placeholder="Password"
                                                id="password"
                                            />
                                            <span>
                                                <i
                                                    className={
                                                        "fa hidden " +
                                                        (passwordVisible
                                                            ? "fa-eye"
                                                            : "fa-eye-slash") +
                                                        " eyeclassRegistration"
                                                    }
                                                    aria-hidden="true"
                                                    onClick={changeEye}
                                                ></i>
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
                                                placeholder="Confirm Password"
                                                id="confirmpassword"
                                            />
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
                                                placeholder="Contact No."
                                                id="contactno"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col
                                        md={{ span: 4, offset: 8 }}
                                        className="mt-3"
                                    >
                                        <Button className="w-100 br-1 px-2 py-3 bg-da-blue" id="register">
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

export default RegistrationScreen
