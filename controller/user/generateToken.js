const jwt = require("jsonwebtoken");

function generateAccessToken(userId, name, email, role, expireAt) {
    return jwt.sign(
        {id: userId, name: name, email: email, role: role},
        process.env.JWT_SECURITY_KEY,
        {expiresIn: expireAt}
    );
}

let control = {
    generateAccessToken
}

module.exports = control;