import express from 'express'
import { GetUser, CreateUser } from './../model/User'

const router = express.Router()

router.get('/users', GetUser)
router.post('/users', CreateUser)

module.exports = router
