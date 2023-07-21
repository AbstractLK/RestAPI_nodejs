const jwt = require("jsonwebtoken");
const verifyToken = (req, res, next)=>{
    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    if(!token){
        return res.status(403).send("please sign in before access this resource!");
    }
    try {
        req.user = jwt.verify(token, process.env.JWT_SECURITY_KEY);
        console.log(req.user);
    }catch (e) {
        return res.status(401).send("invalid access token!");
    }
    return next();
}

module.exports = verifyToken;