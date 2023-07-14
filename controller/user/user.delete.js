const userDB = require('../../data/user.db')

async function userDelete(req, res, next) {
    const userId = req.params.id;
    await userDB.deleteUser(userId);
    res.status(200).send('deleted !');
}

module.exports = userDelete;