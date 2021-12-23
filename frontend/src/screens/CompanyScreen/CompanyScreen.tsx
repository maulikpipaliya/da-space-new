import React, { useState } from "react"
import Header from "../../components/Header/Header"
import Sidebar from "../../components/Sidebar/Sidebar"
import CompanyReviews from "../CompanyReviews/CompanyReviews"

import "./CompanyScreen.css"

const CompanyScreen = () => {
    const [companyName, setCompanyName] = useState("")

    const [jobProfile, setJobProfile] = useState("")
    const [yearOfDrive, setYearOfDrive] = useState("")
    const [roundNameX, setRoundNameX] = useState("")
    const [roundDescription, setRoundDescription] = useState("")

    return (
        <div className="home-container">
            <Header />
            <div className="home-body">
                <div className="home-sidebar">
                    <Sidebar />
                </div>
                <div className="home-main home-rightside">
                    <CompanyReviews />
                </div>
            </div>
        </div>
    )
}

export default CompanyScreen
