import { Router } from "express"
import passport from "passport"
import * as AuthController from "../controllers/auth.controller.js"

import dotenv from "dotenv"
dotenv.config()

const router = Router({
    mergeParams: true,
})
console.log(process.env.CLIENT_URL)

router.post(
    "/login",
    passport.authenticate("local", {
        failureRedirect: `${process.env.CLIENT_URL}/login`,
    }),
    (req, res) => {
        res.status(200).json({
            success: true,
            message: "User logged in successfully",
            user: req.user,
        })
    }
)

router.post("/register", AuthController.register)
router.get("/", AuthController.authUser)

router.get("/test", (req, res) => {
    res.send({
        success: true,
        message: "API is working successfully",
    })
})

router.get("/unauthenticated", (req, res) => {
    res.send({
        success: true,
        message: "This route is unauthenticated",
    })
})

router.get("")

export default router
