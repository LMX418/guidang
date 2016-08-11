var express = require('express')
var router = express.Router();



router.post('/getUser',function(req,res){
    var json = JSON.stringify({'name':'zs','age':20})
    res.end(json)
})
module.exports = router;