import { setUpExpressServer, connectToMongoDB } from "./config/index.js"
import { setUpRoutes } from "./api/routes/index.js"
import { envConfig } from "./config/globals.js"
import bodyParser from "body-parser"
import path from "path"
import express from "express"
import dotenv from "dotenv"
import { errorHandler, notFound } from "./api/middlewares/error.middleware.js"
import session from "express-session"
import passport from "passport"
import cors from "cors"

import "../../backend/src/api/middlewares/passport.middleware.js"

connectToMongoDB(envConfig.dbURL)

const app = express()

dotenv.config()

app.use(cors())

//Middleware

app.use(express.json())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

setUpRoutes(app)

if (process.env.NODE_ENV === "production") {
    const __dirname = path.resolve()
    // console.log("__dirname")
    // console.log(__dirname)
    app.use(express.static(path.join(__dirname, "/frontend/build")))

    app.get("*", (req, res) =>
        res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
    )
} else {
    app.get("/", (req, res) => {
        res.send("API is running....")
    })
}

app.use(
    session({
        secret: "your secret line of secretness",
    })
)

app.use(passport.initialize())
app.use(passport.session())

app.listen(envConfig.port, () => {
    console.log(`server started at ${envConfig.port}`)
})

app.use(notFound)
app.use(errorHandler)
