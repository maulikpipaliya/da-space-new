import React, { FC, useEffect, useState } from "react"
import { Button, Col, Row } from "react-bootstrap"
import axios from "axios"
import { useHistory } from "react-router"

const WelcomeScreen: FC = () => {
    const history = useHistory()
    return (
        <div>
            <div className="welcome-page">
                <img
                    src="./DASpaceLogo.svg"
                    className="wp-logo"
                    alt="DAIICT Logo"
                />
                <div className="text-center">
                    <div className="wp-text bold">Welcome to DASpace</div>
                    <Row className="pt-4">
                        <Col xs={4}></Col>
                        <Col xs={2}>
                            <Button onClick={() => history.push("/login")}>
                                Login
                            </Button>
                        </Col>
                        <Col xs={2}>
                            <Button>Register</Button>
                        </Col>
                        <Col xs={4}></Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default WelcomeScreen
