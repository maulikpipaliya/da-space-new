import React from "react"

const TheirMessage = () => {
    return (
        <div className="message-row">
            <div
                className="message"
                style={{
                    float: "left",
                    backgroundColor: "#CABCDC",
                    // marginLeft: isFirstMessageByUser ? "4px" : "48px",
                }}
            >
                Hello, I am MZ.
            </div>
        </div>
    )
}

export default TheirMessage
