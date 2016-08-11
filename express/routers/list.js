var express = require('express')
var router = express.Router();

router.get('/list',function(req,res){
    res.render('list', {
        title:'list',
        data:[1,2,3,4]
    })
})
module.exports = router;