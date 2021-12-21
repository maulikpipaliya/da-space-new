import React, { FC } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import LoginScreen from "./screens/LoginScreen/LoginScreen"
import WelcomeScreen from "./screens/WelcomeScreen"

import RegistrationScreen from "./screens/LoginScreen/RegistrationScreen"
import HomeScreen from "./screens/HomeScreen/HomeScreen"
import ExamScreen from "./screens/ExamScreen/ExamScreen"
import ChatScreen from "./screens/ChatScreen/ChatScreen"

import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import MyProfile from "./screens/MyProfile/MyProfile"
import PlacementScreen from "./screens/PlacementScreen/PlacementScreen"

const App: FC = () => {
    return (
        <Router>
            <Route path="/" component={WelcomeScreen} exact />
            <Route path="/login" component={LoginScreen} exact />
            <Route path="/register" component={RegistrationScreen} exact />
            <Route path="/home" component={HomeScreen} exact />
            <Route path="/exam" component={ExamScreen} exact />
            <Route path="/chat" component={ChatScreen} exact />
            <Route path="/myprofile" component={MyProfile} exact />
            <Route path="/placement" component={PlacementScreen} exact />
        </Router>
    )
}

export default App
