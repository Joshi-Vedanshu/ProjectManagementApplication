require("dotenv").config()
const express = require("express")
const router = express()
router.use (express.json())

const jwt = require("jsonwebtoken")

router.get("/posts", validateToken, (req, res)=>{
    console.log("Token is valid")
    console.log(req.user.user)
    res.send(`${req.user.user} successfully accessed post`)
    })