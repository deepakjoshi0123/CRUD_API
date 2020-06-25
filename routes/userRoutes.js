const express = require('express');
const {body} = require('express-validator')
const userCtrl = require('../controllers/userController')
const router = express.Router();


router.post('/create',userCtrl.postAddUser)
router.delete('/del',userCtrl.delete)
router.get('/showAll',userCtrl.showAll)
router.get('/search',userCtrl.search)

module.exports = router ; 