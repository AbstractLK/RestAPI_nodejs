const userModel = require("../../models/User");
const userDB = require('../../data/user.db');

async function registerUser(req, res, next) {
    const data = req.body;

    const isExist = await userDB.isExist(data.contact);
    if (isExist) {
        console.log('Already registered');
        res.send(isExist);
    }else {

        try {
            await userDB.insert(data);
            res.status(200).send(isExist);
            console.log('User created successfully');
        } catch (error) {
            console.log(error+' ');
            res.status(400).json({message: 'user registrsation failed !'});
        }
    }


}

module.exports = registerUser;