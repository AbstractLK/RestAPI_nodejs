const express = require('express');
const router = express.Router();
const userController = require('../controller/user')

//post method
router.post('/registration',userController.registration);

//update method
router.put('/update-user/:id',userController.update);

//delete method
router.delete('/delete-user/:id',userController.userDelete);

router.get('/getAll', userController.getAll);

//get method
router.get('/', (req,res)=>{
    res.send('user login !');
    console.log('login page');
});

module.exports = router;