import passport from "passport"
import { Strategy as LocalStrategy } from "passport-local"

import userModel from "../../models/user.model.js"

passport.use(
    new LocalStrategy(
        {
            usernameField: "username",
            passwordField: "password",
        },
        async (email, password, done) => {
            try {
                const user = await userModel.findOne({ email })
                if (!user) {
                    return done(null, false, { message: "User not found" })
                }
                if (!user.comparePassword(password)) {
                    return done(null, false, { message: "Wrong password" })
                }
                return done(null, user)
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
