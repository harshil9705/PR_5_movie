const {Router} = require('express')
const {signup, dlt, login, welcome,alldata, moviecreate } = require('../controllers/user.contoller')
const { signupmiddle, signinmiddle, moviemiddle } = require('../middleware/user.middleware')
const router = Router()

router.get('/',welcome)
router.post('/user/signup',signupmiddle,signup)
router.post('/user/login',signinmiddle,login)
router.delete('/user/delete/:id',dlt)
router.get('/user/',alldata)
router.post('/movie/create',moviemiddle,moviecreate)


module.exports = {router}