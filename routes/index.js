const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const todos = require('./modules/todos')
const users = require('./modules/users')
const auth = require('./modules/auth') // 引用模組
const { authenticator } = require('../middleware/auth') 

router.use('/todos', authenticator, todos)
router.use('/users', users)
router.use('/auth', auth)  // facebook
router.use('/', authenticator, home)

module.exports = router

