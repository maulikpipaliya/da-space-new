import React, { FC, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import {
    BrowserRouter as Router,
    Route,
    Switch,
    useHistory,
    useLocation,
    useParams,
} from "react-router-dom"
import Header from "../../components/Header/Header"

import Sidebar from "../../components/Sidebar/Sidebar"
import { RootState } from "../../store"

import ChatBox from "../ChatBox/ChatBox"
import { ExamForm } from "../ExamForm/ExamForm"

import PlacementBox from "../PlacementScreen/PlacementScreen"
import "./HomeScreen.css"

interface IHomeScreenProps {
    match: any
}

function useQuery() {
    const { search } = useLocation()
    return React.useMemo(() => new URLSearchParams(search), [search])
}

const HomeScreen: FC<IHomeScreenProps> = ({ match }) => {
    const screenState = useSelector((state: RootState) => state.uiState)

    const histroy = useHistory()

    const location = useQuery()

    console.log(location.get("view"))

    const screenName = screenState?.data?.screenName

    console.log(screenName)

    const [screenViewName, setScreenViewName] = useState(location.get("view"))

    useEffect(() => {
        // console.log("screenViewName")
        // console.log(screenViewName)
        setScreenViewName(screenState.data.screenName)
        return () => {}
    }, [])

    return (
        <div className="home-container">
            <Header />
            <div className="home-body">
                <div className="home-sidebar">
                    <Sidebar />
                </div>

                <div className="home-main home-rightside">
                    {/* <ChatBox /> */}
                    {screenViewName === "chat" && <ChatBox />}
                    {screenViewName === "exam" && <ExamForm />}
                    {screenViewName === "placement" && <PlacementBox />}

                    {/* <PlacementForm /> */}
                </div>
                {/* <Router>
                    <div className="home-leftside">
                        <LeftSide />
                    </div>
                    <div className="home-rightside">
                        <PlacementForm />
                    </div>
                </Router> */}
            </div>
        </div>
    )
}

export default HomeScreen
