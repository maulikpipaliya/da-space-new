import React, { useState } from 'react'
import Select from 'react-select'

const data = [
    { value: 'Mihir Zalavadiya', label: 'Mihir Zalavadiya' },
    { value: 'Maulik Pipaliya', label: 'Maulik Pipaliya' },
    { value: 'Gaurangi Chandra', label: 'Gaurangi Chandra' },
];

const CreateChatModel = (props) => {

    const [selectedValue, setSelectedValue] = useState("Mihir Zalavadiya");

    const handleChange = (options) => {
        // setSelectedValue(options.value); 
        console.log(options);
        setSelectedValue(options);
            
    }

    const createChat = (options) => {
        // setSelectedValue(options);
        console.log(options);
        
    }

    return (
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
                        <Select
                            // options={props.options}
                            id="mySelect"
                            isMulti
                            className="basic-multi-select"
                            classNamePrefix="select"
                            onChange={handleChange}
                            options={data}
                        />
                        {/* <select name="pets" id="pet-select" className="basic-multi-select" >
                        <option value="">------------------------Please choose an option------------------------</option>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                        <option value="hamster">Hamster</option>
                        <option value="parrot">Parrot</option>
                        <option value="spider">Spider</option>
                        <option value="goldfish">Goldfish</option>
                    </select> */}
                        {/* <div className="select__control css-yk16xz-control">
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
                    </div> */}
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="btn-continue" onClick={() => { createChat }}>
                        CONTINUE
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CreateChatModel
