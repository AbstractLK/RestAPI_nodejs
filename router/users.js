const express = require('express');
const router = express.Router();

//post method
router.get('/dashboard',(req,res)=>{
    res.send('User Dashboard!');
});

module.exports = router;