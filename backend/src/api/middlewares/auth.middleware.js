import jwt from "jsonwebtoken"

const isLoggedIn = async (req, res, next) => {
    console.log("verifying if user logged in")
    try {
        next()

        /*  const token = req.headers.authorization?.split(" ")[1]
        const isCustomAuth = token.length < 500

        let decodedData
        if (token && isCustomAuth) {
            decodedData = jwt.verify(token, "test")
            req.userId = decodedData?.id
            req.userName = decodedData?.name
        } else {
            decodedData = jwt.decode(token)
            req.userId = decodedData?.sub
        }
        next() */
    } catch (error) {
        console.log(error)
    }
}

export default isLoggedIn
