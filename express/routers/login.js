var express = require('express')
var router = express.Router();

router.get('/',function(req,res){
    res.render('login', {
        title:'login',
        data:[1,2,3,4]
    })
})
module.exports = router;