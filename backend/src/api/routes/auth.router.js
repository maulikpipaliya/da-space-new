import { Router } from "express"
import passport from "passport"
import * as AuthController from "../controllers/auth.controller.js"

const router = Router({
    mergeParams: true,
})

router.post(
    "/login",
    passport.authenticate("local", { failureRedirect: "/login" }),
    function (req, res) {
        res.redirect("/")
    }
)
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
