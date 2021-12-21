import asyncHandler from "express-async-handler"

import passport from "passport"
import userModel from "../../models/user.model.js"

import { Strategy as LocalStrategy } from "passport-local"

export const authUser = asyncHandler(async (req, res, next) => {

    
})
