const userDB = require('../../data/user.db');
const token = require('./generateToken');

async function registerUser(req, res) {
    const data = req.body;
    const isExist = await userDB.isExist(data.email);
    if (isExist) {
        console.log('Already registered');
        res.send(!isExist);
    }else {
        try {
            const savedUser = await userDB.insert(data);
            const accessToken = await token.generateAccessToken(savedUser._id, data.name, data.email, data.role, '2h');
            res.status(200).json({accessToken: accessToken, name: data.name, role:data.role});
            console.log('User created successfully');
        } catch (error) {
            console.log(error+' ');
            res.status(400).json({message: 'user registration failed !'});
        }
    }
}


module.exports = registerUser;