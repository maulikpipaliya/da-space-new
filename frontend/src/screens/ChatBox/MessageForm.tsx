import React from "react"

const MessageForm = () => {
    return (
        <form className="message-form">
            <input
                className="message-input"
                placeholder="Send a message..."
                // value={value}
                // onChange={handleChange}
                // onSubmit={handleSubmit}
            />
            <label htmlFor="upload-button ">
                <span className="image-button">
                    {/* <PictureOutlined className="picture-icon" /> */}
                    {/* <i className="fi-rr-paper-plane"></i> */}
                </span>
            </label>
            <input
                type="file"
                multiple={false}
                id="upload-button"
                style={{ display: "none" }}
                // onChange={handleUpload.bind(this)}
            />
            <button type="submit" className="send-button">
                {/* <SendOutlined className="send-icon" /> */}
                <i className="fi-rr-paper-plane"></i>
            </button>
        </form>
    )
}

export default MessageForm
