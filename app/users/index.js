var router = require('express').Router()
var needUser = require('./need-user')



router.post('/users/login', decryptBody, passwordCrypt, auth)
router.post('/users/signup', decryptBody, passwordCrypt, signUp)
router.get('/users/verify/:verifyID', verification)

module.exports = router