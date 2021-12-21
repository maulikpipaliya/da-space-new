import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import { setScreenView } from "../../actions/UIAction"
import { RootState } from "../../store"
import "./Sidebar.css"
// import { SidebarBottom, SidebarData } from "../Data/SidebarData"
// import { SidebarOption } from "./SidebarOption"

const Sidebar = () => {
    // const topOptions = SidebarData
    // const more = SidebarMore
    // const bottomOptions = SidebarBottom

    const dispatch = useDispatch()
    const history = useHistory()

    const screenState = useSelector((state: RootState) => state.uiState)

    const [selectedTagBell, setSelectedTagBell] = useState(false)
    const [selectedTagChat, setSelectedTagChat] = useState(false)
    const [selectedTagTeams, setSelectedTagTeams] = useState(false)
    const [selectedTagPlacements, setSelectedTagPlacements] = useState(false)
    const [selectedTagExam, setSelectedTagExam] = useState(false)
    const [selectedTagCalls, setSelectedTagCalls] = useState(false)

    const tabClickHandler = (tabText: string) => {
        console.log(tabText)

        switch (tabText) {
            case "exam":
                history.push("/exam")
                dispatch(setScreenView("exam"))
                break
            case "chat":
                history.push("/chat")
                dispatch(setScreenView("chat"))
                break
            case "placement":
                history.push("/placement")
                setScreenView("placement")
                break
            default:
                break
        }
    }
    function eventHandlerBell() {
        setSelectedTagBell(selectedTagBell ? false : true)
        setSelectedTagChat(false)
        setSelectedTagTeams(false)
        setSelectedTagPlacements(false)
        setSelectedTagExam(false)
        setSelectedTagCalls(false)
    }

    function eventHandlerChat() {
        setSelectedTagChat(selectedTagChat ? false : true)
        setSelectedTagBell(false)
        setSelectedTagTeams(false)
        setSelectedTagPlacements(false)
        setSelectedTagExam(false)
        setSelectedTagCalls(false)
    }
    function eventHandlerTeams() {
        setSelectedTagTeams(selectedTagTeams ? false : true)
        setSelectedTagBell(false)
        setSelectedTagChat(false)
        setSelectedTagPlacements(false)
        setSelectedTagExam(false)
        setSelectedTagCalls(false)
    }
    function eventHandlerPlacements() {
        setSelectedTagPlacements(selectedTagPlacements ? false : true)
        setSelectedTagBell(false)
        setSelectedTagChat(false)
        setSelectedTagTeams(false)
        setSelectedTagExam(false)
        setSelectedTagCalls(false)
    }
    function eventHandlerExam() {
        setSelectedTagExam(selectedTagExam ? false : true)
        setSelectedTagBell(false)
        setSelectedTagChat(false)
        setSelectedTagTeams(false)
        setSelectedTagPlacements(false)
        setSelectedTagCalls(false)
    }
    function eventHandlerCalls() {
        setSelectedTagCalls(selectedTagCalls ? false : true)
        setSelectedTagBell(false)
        setSelectedTagChat(false)
        setSelectedTagTeams(false)
        setSelectedTagPlacements(false)
        setSelectedTagExam(false)
    }

    useEffect(() => {
        setScreenView(screenState.data.screenName)
        return () => {}
    }, [screenState])

    return (
        <div className="sidebar-container">
            <div
                className={
                    selectedTagChat
                        ? "text-center active abc"
                        : "text-center abc"
                }
                onClick={(e) => tabClickHandler("chat")}
            >
                <i className="fi-rr-comment"></i>
                <p>Chat</p>
            </div>
            <div
                className={
                    selectedTagPlacements
                        ? "text-center active abc"
                        : "text-center abc"
                }
                onClick={(e) => tabClickHandler("placement")}
            >
                <i className="fi-rr-briefcase"></i>
                <p>Placements</p>
            </div>
            <div
                className={
                    selectedTagExam
                        ? "text-center active abc"
                        : "text-center abc"
                }
                onClick={(e) => tabClickHandler("exam")}
            >
                <i className="fi-rr-test"></i>
                <p>Exam</p>
            </div>

            {/* {topOptions.map((option) => {
                    return (
                        <div>
                            <SidebarOption
                                options={option}
                                isActive={
                                    option.id === 4 ? true : false
                                }
                            />
                        </div>
                    )
                })} */}
            {/* <div className="sidebar-more">
                <i className="fi-rr-menu-dots" />
            </div> */}
            {/* <div className="sidebar-bottom">
                {bottomOptions.map((option) => {
                    return (
                        <SidebarOption
                            options={option}
                            isActive={option.name === "" ? true : false}
                        />
                    )
                })}
            </div> */}
        </div>
    )
}

export default Sidebar
