import React from "react"
import "./ChatBox.css"
import MessageForm from "./MessageForm"
import MyMessage from "./MyMessage"
import TheirMessage from "./TheirMessage"
import "bootstrap/dist/css/bootstrap.min.css"

const ChatBox = () => {
    return (
        <>
            <div className="chat">
                <div className="chat__rooms">
                    <div className="chatrooms">
                        <div className="chatrooms__header">
                            <div className="header__left">
                                <h5>Chat</h5>
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
                                <div className="MuiAvatar-root MuiAvatar-circular MuiAvatar-colorDefault">
                                    [
                                </div>
                                <div className="chatroom__info">
                                    <div className="chatRoom__title">
                                        <h6>Mihir Zalavadiya</h6>
                                        <h6>18/12</h6>
                                    </div>
                                    <div className="chatroom__message">
                                        <span>Mihir Zalavadiya: Hi</span>
                                    </div>
                                </div>
                            </div>

                            <div className="chatroom__item">
                                <div className="MuiAvatar-root MuiAvatar-circular MuiAvatar-colorDefault">
                                    [
                                </div>
                                <div className="chatroom__info">
                                    <div className="chatRoom__title">
                                        <h6>Gaurangi Chandra</h6>
                                        <h6>18/12</h6>
                                    </div>
                                    <div className="chatroom__message">
                                        <span>Gaurangi Chandra: Hi</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="createChatModal">
                            <div
                                className="modal-wrapper"
                                style={{
                                    transform: "translateY(0vh)",
                                    opacity: "1",
                                }}
                            >
                                <div className="modal-header">
                                    <h4>New Chat</h4>
                                    <span className="close-modal-btn">×</span>
                                </div>
                                <div className="modal-body">
                                    <h6>Select Participants</h6>
                                    <div className="basic-multi-select css-2b097c-container">
                                        <span
                                            aria-live="polite"
                                            aria-atomic="false"
                                            aria-relevant="additions text"
                                            className="css-1f43avz-a11yText-A11yText"
                                        ></span>
                                        <div className="select__control css-yk16xz-control">
                                            <div className="select__value-container select__value-container--is-multi css-g1d714-ValueContainer">
                                                <div className="select__placeholder css-1wa3eu0-placeholder">
                                                    Select...
                                                </div>
                                                <div className="css-b8ldur-Input">
                                                    <div
                                                        className="select__input"
                                                        style={{
                                                            display:
                                                                "inline-block",
                                                        }}
                                                    >
                                                        <input
                                                            id="react-select-2-input"
                                                            tabIndex={0}
                                                            type="text"
                                                            aria-autocomplete="list"
                                                            value=""
                                                            style={{
                                                                boxSizing:
                                                                    "content-box",
                                                                width: "2px",
                                                                background:
                                                                    "0px center",
                                                                border: "0px",
                                                                fontSize:
                                                                    "inherit",
                                                                opacity: "1",
                                                                outline: "0px",
                                                                padding: "0px",
                                                                color: "inherit",
                                                            }}
                                                        />
                                                        <div
                                                            style={{
                                                                position:
                                                                    "absolute",
                                                                top: "0px",
                                                                left: "0px",
                                                                visibility:
                                                                    "hidden",
                                                                height: "0px",
                                                                overflow:
                                                                    "scroll",
                                                                whiteSpace:
                                                                    "pre",
                                                                fontSize:
                                                                    "16px",
                                                                fontWeight: 400,
                                                                fontStyle:
                                                                    "normal",
                                                                letterSpacing:
                                                                    "normal",
                                                                textTransform:
                                                                    "none",
                                                            }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="select__indicators css-1hb7zxy-IndicatorsContainer">
                                                <span className="select__indicator-separator css-1okebmr-indicatorSeparator"></span>
                                                <div
                                                    className="select__indicator select__dropdown-indicator css-tlfecz-indicatorContainer"
                                                    aria-hidden="true"
                                                >
                                                    <svg
                                                        height="20"
                                                        width="20"
                                                        viewBox="0 0 20 20"
                                                        aria-hidden="true"
                                                        focusable="false"
                                                        className="css-tj5bde-Svg"
                                                    >
                                                        <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button className="btn-continue">
                                        CONTINUE
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="chatroom-ctr">
                    <div className="chatroom">
                        <div className="chatroom__header">
                            <div className="chatroom__headerleft">
                                <div className="MuiAvatar-root MuiAvatar-circular MuiAvatar-colorDefault">
                                    [
                                </div>
                                <h5> Gaurangi Changra</h5>
                                <button
                                    className="MuiButtonBase-root MuiIconButton-root"
                                    type="button"
                                    title="Edit"
                                >
                                    <span className="MuiIconButton-label">
                                        <svg
                                            className="MuiSvgIcon-root"
                                            focusable="false"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
                                        </svg>
                                    </span>
                                    <span className="MuiTouchRipple-root"></span>
                                </button>
                            </div>
                            <div className="chatroom__headerright">
                                <a
                                    target="_blank"
                                    href="/room/61bdc34d7984890022d00121/1"
                                >
                                    <button
                                        className="MuiButtonBase-root MuiIconButton-root"
                                        tabIndex={0}
                                        type="button"
                                        title="Call"
                                    >
                                        <span className="MuiIconButton-label">
                                            <svg
                                                className="MuiSvgIcon-root"
                                                focusable="false"
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                            >
                                                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"></path>
                                            </svg>
                                        </span>
                                        <span className="MuiTouchRipple-root"></span>
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div id="messages" className="chatroom__body">
                            <div className="chatroom__message">
                                <div className="peerchat">
                                    <div className="MuiAvatar-root MuiAvatar-circular MuiAvatar-colorDefault">
                                        Y
                                    </div>
                                    <div className="peer">
                                        <span>Gaurangi Changra</span>
                                        <span>18/12, 04:47</span>
                                        <p>Hi</p>
                                    </div>
                                </div>
                            </div>
                            <div></div>
                        </div>
                        <div>
                            <form className="chatroom__sendMessage">
                                <div className="message__imageSelector">
                                    <svg
                                        className="MuiSvgIcon-root"
                                        focusable="false"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4l2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z"></path>
                                    </svg>
                                    <input type="file" />
                                </div>
                                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 message-block">
                                    <div className="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth">
                                        <label
                                            className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined"
                                            data-shrink="false"
                                        >
                                            Type a new message
                                        </label>
                                        <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl">
                                            {/* <input
                                                aria-invalid="false"
                                                name="message"
                                                type="text"
                                                className="MuiInputBase-input MuiOutlinedInput-input"
                                                value=""
                                            /> */}
                                            <div className="input-icons">
                                                <i className="fi-rr-paper-plane icon"></i>
                                                <input
                                                    type="text"
                                                    className="w-100"
                                                    id="message"
                                                />
                                                {/* <div className="send-btn">
                                            </div> */}
                                            </div>

                                            <fieldset
                                                aria-hidden="true"
                                                className="PrivateNotchedOutline-root-1 MuiOutlinedInput-notchedOutline"
                                            >
                                                <legend className="PrivateNotchedOutline-legendLabelled-3 pt-1">
                                                    <span className="fs-6">
                                                        <i className="fi-rr-link p-1"></i>
                                                        <i className="fi-rr-chart-histogram p-2"></i>
                                                    </span>
                                                </legend>
                                            </fieldset>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    className="MuiButtonBase-root MuiIconButton-root"
                                    tabIndex={0}
                                    type="submit"
                                >
                                    <span className="MuiIconButton-label">
                                        <svg
                                            className="MuiSvgIcon-root"
                                            focusable="false"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
                                        </svg>
                                    </span>
                                    <span className="MuiTouchRipple-root"></span>
                                </button>
                            </form>
                        </div>
                        <p className="image__text"></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChatBox
