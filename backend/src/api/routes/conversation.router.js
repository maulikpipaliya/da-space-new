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
import auth from "../middlewares/auth.middleware.js"

router.get("/", auth, getConversations)
router.post("/create", auth, createConversation)
router.get("/getVotes/:pollId", auth, getVotes)
router.get("/:id", auth, getConversation)
router.get("/:convoId/:messageId", auth, getReadStatus)
router.patch("/message/:id", auth, postMessage)

// poll routes
router.post("/:convoId/create-poll", auth, createPoll)
router.patch("/vote/:pollId", auth, votePoll)

export default router
