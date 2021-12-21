import passport from "passport"
import { Strategy as LocalStrategy } from "passport-local"

import userModel from "../../models/user.model.js"
import bcrypt from "bcryptjs"

passport.use(
    new LocalStrategy(
        {
            usernameField: "username",
            passwordField: "password",
        },
        async (username, password, done) => {
            try {
                const user = await userModel.findOne({
                    username: username,
                })

                if (!user) {
                    console.log("user not found")
                    return done(null, false, { message: "User not found" })
                }

                bcrypt.compare(password, user.password, (err, isMatch) => {
                    console.log("isMatch", isMatch)
                    if (err) {
                        console.log(err)
                        console.log("bcrypt compare error")

                        return done(null, false, { message: "Error" })
                    }
                    if (isMatch) {
                        console.log("password matched")
                        return done(null, user)
                    }
                })
            } catch (error) {
                return done(error)
            }
        }
    )
)

passport.serializeUser(function (user, done) {
    done(null, user._id)
})
passport.deserializeUser(function (user, done) {
    userModel.findById(id, function (err, user) {
        done(err, user)
    })
})
