import { Router } from "express"

const router = Router({
    mergeParams: true,
})

import {
    getConversation,
    getConversations,
    getReadStatus,
    postMessage,
    createConversation,
    createPoll,
    votePoll,
    getVotes,
} from "../controllers/conversations.controller.js"
import isLoggedIn from "../middlewares/auth.middleware.js"

router.get("/",isLoggedIn, getConversations)
router.post("/create",isLoggedIn, createConversation)
router.get("/getVotes/:pollId",isLoggedIn, getVotes)
router.get("/:id",isLoggedIn, getConversation)
router.get("/:convoId/:messageId",isLoggedIn, getReadStatus)
router.patch("/message/:id",isLoggedIn, postMessage)

// poll routes
router.post("/:convoId/create-poll",isLoggedIn, createPoll)
router.patch("/vote/:pollId",isLoggedIn, votePoll)

export default router
