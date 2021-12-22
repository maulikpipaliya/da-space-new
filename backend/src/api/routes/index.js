import commonRouter from "./common.router.js"
import authRouter from "./auth.router.js"
import placementRouter from "./placement.router.js"
import conversationRouter from "./conversation.router.js"
import examRouter from "./exam.router.js"

export const setUpRoutes = (app) => {
    app.use("/", commonRouter)
    app.use("/api", commonRouter)
    app.use("/auth", authRouter)
    app.use("/placements", placementRouter)
    app.use("/conversation", conversationRouter)
    app.use("/exams", examRouter)
}
