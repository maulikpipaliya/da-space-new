import { Router } from "express"
import passport from "passport"
import * as AuthController from "../controllers/auth.controller.js"

import dotenv from "dotenv"
import isLoggedIn from "../middlewares/auth.middleware.js"
dotenv.config()

const clientURL =
    process.env.NODE_ENV === "production"
        ? "https://da-space.herokuapp.com/"
        : "http://localhost:3000"

console.log("clientURL", clientURL)

const router = Router({
    mergeParams: true,
})
console.log(process.env.CLIENT_URL)

router.get("/verify", (req, res) => {
    console.log("verify called")
    if (req.user) {
        res.status(200).json({
            user: req.user,
            message: "User is logged in",
            success: true,
        })
    } else {
        res.status(401).json({
            message: "User is not logged in",
            success: false,
        })
    }
})

router.post(
    "/login",
    passport.authenticate("local", {
        failureRedirect: "/",
    }),
    (req, res) => {
        console.log("login success")
        res.status(200).json({
            user: req.user,
            message: "User is logged in",
            success: true,
        })
    }
)

router.post("/register", AuthController.register)

router.get("/test", (req, res) => {
    res.send({
        success: true,
        message: "API is working successfully",
    })
})

router.get("/logout", (req, res) => {
    console.log("logout called")
    req.logout()
    res.redirect("/")
})

router.get("/loginStatus", (req, res) => {
    console.log("loginStatus called")
    if (req.user) {
        res.status(200).json({
            user: req.user,
            message: "User is logged in",
            success: true,
        })
    } else {
        res.status(401).json({
            message: "User is not logged in",
            success: false,
        })
    }
})

router.get("/authenticated", isLoggedIn, (req, res) => {
    res.send({
        success: true,
        message: "This route is authenticated",
    })
})

router.get("/unauthenticated", (req, res) => {
    res.send({
        success: true,
        message: "This route is unauthenticated",
    })
})

export default router
