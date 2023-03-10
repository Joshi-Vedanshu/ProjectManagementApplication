const express = require('express');
const cookieParser = require("cookie-parser");
const sessions = require('express-session');

app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false 
}));

