const userDB = require('../../data/user.db');
const jwt = require('jsonwebtoken');

async function registerUser(req, res) {
    const data = req.body;
    const isExist = await userDB.isExist(data.contact);
    if (isExist) {
        console.log('Already registered');
        res.send(!isExist);
    }else {
        try {
            const savedUser = await userDB.insert(data);
            const accessToken = await generateAccessToken(savedUser._id, data.name, data.contact, '2h');
            res.status(200).json({accessToken: accessToken, name: data.name});
            console.log('User created successfully');
        } catch (error) {
            console.log(error+' ');
            res.status(400).json({message: 'user registration failed !'});
        }
    }
}


function generateAccessToken(userId, name, contact, expireAt) {
    return jwt.sign(
        {id: userId, name: name, contact: contact},
        process.env.JWT_SECURITY_KEY,
        {expiresIn: expireAt}
    );
}

let control = {
    registerUser,
    generateAccessToken
}
module.exports = control;