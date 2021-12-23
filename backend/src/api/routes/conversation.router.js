import { Router } from "express"

const router = Router({
    mergeParams: true,
})

import {
    getAllUsers,
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

router.get("/getAllUsers", getAllUsers)

router.get("/", getConversations)
router.post("/create", createConversation)
router.get("/getVotes/:pollId", getVotes)
router.get("/:id", getConversation)
router.get("/:convoId/:messageId", getReadStatus)
router.patch("/message/:id", postMessage)

// poll routes
router.post("/:convoId/create-poll", createPoll)
router.patch("/vote/:pollId", votePoll)

export default router
