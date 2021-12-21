import React, { FC, useEffect, useState } from "react"
import Header from "../../components/Header/Header"
import Sidebar from "../../components/Sidebar/Sidebar"
import { ExamForm } from "../ExamForm/ExamForm"

const ExamScreen = () => {
    return (
        <div className="home-container">
            <Header />
            <div className="home-body">
                <div className="home-sidebar">
                    <Sidebar />
                </div>

                <div className="home-main home-rightside">
                    <ExamForm />

                    {/* <PlacementForm /> */}
                </div>
            </div>
        </div>
    )
}

export default ExamScreen
