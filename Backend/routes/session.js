var express = require('express');
var router = express.Router();

/* GET login. */
router.get('/log',(req,res) => {
    session=req.session;
    if(session.userid){
        res.send("Welcome User <a href=\'/logout'>click to logout</a>");
    }else
    res.sendFile('views/index.html',{root:__dirname})
});
module.exports = router;
