import React from "react"
import Header from "../../components/Header/Header"
import Sidebar from "../../components/Sidebar/Sidebar"
import PlacementBox from "../PlacementBox/PlacementBox"
import "./PlacementScreen.css"

const PlacementScreen = () => {
    return (
        <div className="home-container">
            <Header />
            <div className="home-body">
                <div className="home-sidebar">
                    <Sidebar />
                </div>
                <div className="home-main home-rightside">
                    <PlacementBox />
                </div>
            </div>
        </div>
    )
}

export default PlacementScreen
