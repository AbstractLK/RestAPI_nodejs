const userDB = require('../../data/user.db');
const bcrypt = require('bcryptjs');
const token = require('./generateToken');


async function login(req, res) {
    // console.log(req.body);
    // res.send("ok");
    const {email, pass} = req.body;
    if (!(email && pass)) return res.status(400).send("All inputs are required!");

    const user = await userDB.searchByEmail(email);
    if(user && await bcrypt.compare(pass, user.password)){
        const accessToken = await token.generateAccessToken(user._id, user.name, email, user.role, "2h");
        return res.status(200).json({accessToken:accessToken, name:user.name, role:user.role});
    }
    return res.status(200).send("false");
    
}

module.exports = login;