import axios from "axios"
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

    const [companyName, setCompanyName] = useState("")

    const [jobProfile, setJobProfile] = useState("")
    const [yearOfDrive, setYearOfDrive] = useState("")
    const [roundNameX, setRoundNameX] = useState("")
    const [roundDescription, setRoundDescription] = useState("")

    const onRegisterHandler = async (event) => {
        event.preventDefault()

        const submittable = {
            companyName,
            jobProfile,
            yearOfDrive,
            rounds: [
                {
                    roundName: roundNameX,
                    roundDescription: roundDescription,
                },
            ],
        }

        const reqData = await axios.post(
            "/placements/addPlacement",
            submittable
        )
    }

    const changeEye = () => {
        setPasswordVisible(!passwordVisible)
    }

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
                                                type="text"
                                                className="br-1 p-fileds"
                                                placeholder="Company Name"
                                                id="companyname"
                                                onChange={(e) =>
                                                    setCompanyName(
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            {/* <span className="text-muted fixedPosition">
                                                @daiict.ac.in.
                                            </span> */}
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
                                                id="jobProfile"
                                                onChange={(e) =>
                                                    setJobProfile(
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col
                                        md={{ span: 12 }}
                                        className="my-1 pb-2"
                                    >
                                        <Form.Group>
                                            <Form.Control
                                                type="number"
                                                className="br-1 p-fileds"
                                                placeholder="Year of Drive"
                                                id="yearofjoining"
                                                onChange={(e) =>
                                                    setYearOfDrive(
                                                        e.target.value
                                                    )
                                                }
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
                                                placeholder="Round Name X"
                                                id="roundNameX"
                                                onChange={(e) =>
                                                    setRoundNameX(
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col
                                        md={{ span: 12 }}
                                        className="my-1 pb-2"
                                    >
                                        <Form.Group>
                                            <Form.Control
                                                as="textarea"
                                                rows={1}
                                                className="br-1 p-fileds"
                                                placeholder="Round Name X Description"
                                                id="description"
                                                onChange={(e) =>
                                                    setRoundDescription(
                                                        e.target.value
                                                    )
                                                }
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
                                            onClick={(e) => {
                                                onRegisterHandler(e)
                                            }}
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
