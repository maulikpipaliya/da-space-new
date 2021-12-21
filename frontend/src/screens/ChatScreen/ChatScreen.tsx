import React from "react"
import Header from "../../components/Header/Header"
import Sidebar from "../../components/Sidebar/Sidebar"
import ChatBox from "../ChatBox/ChatBox"

const ChatScreen = () => {
    return (
        <div className="home-container">
            <Header />
            <div className="home-body">
                <div className="home-sidebar">
                    <Sidebar />
                </div>

                <div className="home-main home-rightside">
                    <ChatBox />

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

export default ChatScreen
