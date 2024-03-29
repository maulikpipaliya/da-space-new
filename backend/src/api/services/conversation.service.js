import Conversation from "../../models/conversation.model.js"
import Users from "../../models/user.model.js"
import Poll from "../../models/poll.model.js"

export default class ConversationService {
    async getAllUsers() {
        const users = await Users.find({
            _id: { $ne: "61bf8af06017de30ebb418e0" },
        })
        // extract usernames from users array
        const usernames = []
        for (let i = 0; i < users.length; i++) {
            usernames.push(users[i].username)
        }
        return usernames
    }

    async getAllConversations(userId) {
        const convo = await Conversation.find({
            members: userId,
            is_deleted: false,
        }).sort({ updated_at: -1 })
        // get the full object of members in each conversation
        const members = []
        for (let i = 0; i < convo.length; i++) {
            for (let j = 0; j < convo[i].members.length; j++) {
                // check if this converstation is already read by user
                convo[i].is_read = true
                for (let k = 0; k < convo[i].messages.length; k++) {
                    if (
                        !convo[i].messages[k].read_by.includes(userId) &&
                        convo[i].messages[k].from_id.toString() !== userId
                    ) {
                        convo[i].is_read = flase
                        break
                    }
                }
                members.push(await Users.findById(convo[i].members[j]))
            }
            convo[i].members = members
            members = []
        }
        return convo
    }

    async getConversation(conversationId) {
        const conversation = await Conversation.findById(conversationId)
        // update read status
        // find if user has already read this conversation
        const userId = "61bf8af06017de30ebb418e0"
        // loop through messages array and check if userId is in read_by array
        const readBy = conversation.messages.filter(
            (message) => !message.read_by.includes(userId)
        )
        console.log(readBy)
        // if userId is not in read_by array, then add userId to read_by array
        if (readBy.length !== 0) {
            conversation.messages.forEach((message) => {
                // check if userId is in read_by array
                if (!message.read_by.includes(userId)) {
                    message.read_by.push(userId)
                }
            })
            conversation.save()
        }
        return conversation
    }

    async getReadStatus(conversationId, messageId) {
        const conversation = await Conversation.findById(conversationId)
        const userList = conversation.messages.filter(
            (message) => message._id.toString() === messageId
        )[0].read_by
        let usersNames = []
        for (let i = 0; i < userList.length; i++) {
            const user = await Users.findById(userList[i])
            usersNames.push(user.firstName)
        }
        return usersNames
    }

    async postMessage(conversationId, from, message, type) {
        const conversation = await Conversation.findById(conversationId)
        conversation.messages.push({
            from_id: from,
            msg_text: message,
            msg_type: type,
        })
        conversation.updated_at = new Date()

        conversation.save()
        return conversation
    }
    async createConversation(members, name = "") {
        // members consits the names of the users
        // find ids of members from users model
        const ids = []
        let flag = false
        if (name === "") {
            flag = true
        }
        for (let i = 0; i < members.length; i++) {
            const user = await Users.findOne({ username: members[i] })
            if (flag) {
                name += user.firstName + ", "
            }
            ids.push(user._id)
        }
        const newConversation = new Conversation({ members, name })
        try {
            const newConvo = await newConversation.save()
            return newConvo
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async createPoll(
        title,
        slug,
        summary,
        start_at,
        ends_at,
        conversationId,
        question_text,
        options
    ) {
        const conversation = await Conversation.findById(conversationId)
        const newPoll = {
            title,
            slug,
            summary,
            start_at,
            ends_at,
            question_text,
            options,
        }
        const newPollObj = new Poll(newPoll)
        const savedPoll = await newPollObj.save()
        return this.postMessage(
            conversationId,
            "61bf8af06017de30ebb418e0",
            savedPoll._id,
            "poll"
        )
    }

    async votePoll(pollId, option_text) {
        const poll = await Poll.findById(pollId)
        // check if user has already voted for an option
        const userId = "61bf8af06017de30ebb418e0"
        const index = 0
        for (let i = 0; i < poll.options.length; i++) {
            if (poll.options[i].option_text === option_text) {
                index = i
            }
            if (poll.options[i].votes.includes(userId)) {
                return "You have already voted for this option"
            }
        }
        // vote for the option
        poll.options[index].votes.push(userId)
        poll.save()
        return "You have successfully voted for this option"
    }

    async getVotes(pollId) {
        const poll = await Poll.findById(pollId)
        // get votes for each option and return there names
        const votes = []
        for (let i = 0; i < poll.options.length; i++) {
            const voters = { text: poll.options[i].option_text, votes: [] }
            for (let j = 0; j < poll.options[i].votes.length; j++) {
                const user = await Users.findById(poll.options[i].votes[j])
                voters["votes"].push({
                    id: poll.options[i].votes[j],
                    name: user.firstName,
                })
            }
            votes.push(voters)
        }
        return votes
    }
}
