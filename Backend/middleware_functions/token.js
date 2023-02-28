const jwt = require("jsonwebtoken")
require("dotenv").config()

function generateAccessToken(email) {
    return jwt.sign(email, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15m" })
}
// refreshTokens
let refreshTokens = [];
function generateRefreshToken(email) {
    const refreshToken = jwt.sign(email, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "20m" })
    refreshTokens.push(refreshToken)
    return refreshToken
}

module.exports = { generateAccessToken, generateRefreshToken }