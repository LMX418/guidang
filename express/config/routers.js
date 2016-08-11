var index = require('../routers/index.js')

var list = require('../routers/list.js')

var login = require('../routers/login.js')

var getUser = require('../routers/getUser.js')

module.exports = function(app){
    app.get('/',login)

    app.post('/signUp',index)

    app.get('/list',list)

    app.post('/getUser',getUser)
}