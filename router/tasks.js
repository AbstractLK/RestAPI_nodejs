const express = require("express");
const router = express.Router();
const taskController = require('../controller/task/task.cotroller');
const roles = require('../util/enum/userRoles');

const authMW = require('../middlewares/authMW');
const checkRoles = require('../middlewares/checkRoles');

router.post('/create', [authMW, checkRoles([roles.teacher, roles.student])], taskController.create);
router.patch('/update', [authMW, checkRoles([roles.teacher])], taskController.update);
router.delete('/remove', [authMW, checkRoles([roles.student])], taskController.remove);
router.get('/all', [authMW, checkRoles([roles.teacher, roles.student])], taskController.all);
router.get('/isDuplicate', [authMW, checkRoles([roles.teacher, roles.student])], taskController.isDuplicate);

module.exports = router;