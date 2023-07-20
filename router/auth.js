const express = require('express');
const router = express.Router();
const userController = require('../controller/user')
const authMW = require("../middlewares/authMW");
const roles = require('../util/enum/userRoles');
const checkRoles = require('../middlewares/checkRoles');

//post method
router.post('/registration',userController.registration);

//update method
router.put('/update-user/:id',userController.update);

//delete method
router.delete('/delete-user/:id',authMW ,userController.userDelete);

router.get('/getAll',[authMW, checkRoles([roles.student, roles.teacher])], userController.getAll);

//get method
router.post('/',userController.login);

module.exports = router;