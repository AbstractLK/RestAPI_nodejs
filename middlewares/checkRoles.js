function checkRoles(allowedRoles) {
    function auth(req, res, next) {
        return allowedRoles.includes(req.user.role) ? next() : res.status(401).send("permission denied");
    }
    return auth;
}

module.exports = checkRoles;