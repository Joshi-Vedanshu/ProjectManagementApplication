const jwt = require("jsonwebtoken")
require("dotenv").config()

function generateAccessToken(email) {
    return jwt.sign({ id: email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15m" })
}

// refreshTokens
let refreshTokens = [];
function generateRefreshToken(email) {
    const refreshToken = jwt.sign({ id: email }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "20m" })
    refreshTokens.push(refreshToken)
    return refreshToken
}

function validateToken(token) {
    if (token == null) return false;
    return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            return false;
        }
        else {
            return true;
        }
    });
}

function validateRefreshToken(token) {
    if (token == null) return false;
    return jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) {
            return false;
        }
        else {
            return true;
        }
    });
}

function getUserFromTheToken(token) {
    if (token == null) return false;
    return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            return null;
        }
        else {
            return user;
        }
    });
}

module.exports = { generateAccessToken, generateRefreshToken, validateToken, validateRefreshToken, getUserFromTheToken }