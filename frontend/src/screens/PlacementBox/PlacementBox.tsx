import React from "react"
import { PlacementForm } from "../PlacementForm/PlacementForm"
import "./PlacementBox.css"

const PlacementBox = () => {
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
                                <h5>Companey Reviews</h5>
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
                </div>
            </div>
        </>
    )
}

export default PlacementBox
