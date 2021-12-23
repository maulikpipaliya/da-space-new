import axios from "axios"
import React, { useEffect, useState } from "react"
import CompanyReviews from "../CompanyReviews/CompanyReviews"
import { PlacementForm } from "../PlacementForm/PlacementForm"
import "./PlacementBox.css"

const getAllCompanies = async () => {
    const { data } = await axios.get("/placements/getAllPlacementRecords")

    return data
}

const PlacementBox = () => {
    const [allCompanies, setAllCompanies] = useState<any>()
    const companyData = getAllCompanies()

    useEffect(() => {
        companyData.then((data) => {
            setAllCompanies(data)
        })
    }, [])

    console.log(allCompanies?.placements)
    return (
        <>
            <div className="chat">
                <div className="chat__rooms placement__rooms">
                    <div className="chatrooms placement__roomsone">
                        <div className="chatrooms__header">
                            <div className="header__left">
                                <h5>Placement</h5>
                                <svg
                                    className="MuiSvgIcon-root"
                                    focusable="false"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                                </svg>
                            </div>
                            <div className="header__right">
                                <button
                                    className="MuiButtonBase-root MuiIconButton-root"
                                    type="button"
                                >
                                    <span className="MuiIconButton-label">
                                        <img
                                            src="https://img.icons8.com/fluent-systems-regular/48/000000/edit-chat-history.png"
                                            alt="new chat"
                                        />
                                    </span>
                                    <span className="MuiTouchRipple-root"></span>
                                </button>
                            </div>
                        </div>
                        <div className="chatrooms__rooms">
                            {allCompanies?.placements.map((placement) => (
                                <div
                                    className="chatroom__item"
                                    key={placement.id}
                                >
                                    <div className="chatroom__info">
                                        <div className="chatRoom__title">
                                            <h6>{placement.companyName}</h6>
                                            <h6>
                                                <i className="fi-rr-edit p-2"></i>
                                                <i className="fi-rr-trash"></i>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <hr
                            style={{
                                color: "black",
                                height: 3,
                            }}
                        />
                    </div>
                    <div className="chatrooms placement__roomstwo">
                        <div className="chatrooms__header">
                            <div className="header__left">
                                <h5>Company Reviews</h5>
                                <svg
                                    className="MuiSvgIcon-root"
                                    focusable="false"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    {/* <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path> */}
                                </svg>
                            </div>
                            <div className="header__right">
                                <button
                                    className="MuiButtonBase-root MuiIconButton-root"
                                    type="button"
                                >
                                    <span className="MuiIconButton-label">
                                        <img
                                            src="https://img.icons8.com/fluent-systems-regular/48/000000/edit-chat-history.png"
                                            alt="new chat"
                                        />
                                    </span>
                                    <span className="MuiTouchRipple-root"></span>
                                </button>
                            </div>
                        </div>
                        <div className="chatrooms__rooms">
                            <div className="chatroom__item">
                                <div className="chatroom__info">
                                    <div className="chatRoom__title">
                                        <h6>TCS</h6>
                                        <h6>
                                            <i className="fi-rr-edit p-2"></i>
                                            <i className="fi-rr-trash"></i>
                                        </h6>
                                    </div>
                                </div>
                            </div>

                            <div className="chatroom__item">
                                <div className="chatroom__info">
                                    <div className="chatRoom__title">
                                        <h6>Amazone</h6>
                                        <h6>
                                            <i className="fi-rr-edit p-2"></i>
                                            <i className="fi-rr-trash"></i>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="chatroom-ctr">
                    <PlacementForm />
                    {/* <CompanyReviews /> */}
                </div>
            </div>
        </>
    )
}

export default PlacementBox
