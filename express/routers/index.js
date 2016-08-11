var express = require('express');

var router = express.Router();

router.post('/signUp',function(req,res){
    console.log(req.body)
    if(req.body.username != 'admin'){
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
        res.end('没有权限')
    }else{
        res.render('index', { 
            title: 'Hey', 
            data: [
                {'name':'zs','tags':'1,2,3,4'},
                {'name':'zs2','tags':'11,22,33,44'},
            ]
        }); 
    }

})

module.exports = router;

