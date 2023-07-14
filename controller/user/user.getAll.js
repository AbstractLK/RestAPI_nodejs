const userModel = require("../../models/User");

async function userGetAll(req, res, next) {
    const users = await userModel.find();
    res.status(200).json(users);
    // if(users){
    //     //res.status(200).send('All users');
    //     res.status(200).json(users);
    // }else {
    //     res.status(404).send('User not found');
    // }
}

module.exports = userGetAll;