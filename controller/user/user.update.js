const userModel = require("../../models/User");
const {model} = require("mongoose");

async function userUpdate(req, res, next) {
    const userId = req.params.id;
    const updatedUser = req.body;
    console.log(updatedUser);
    try {
        await userModel.findByIdAndUpdate(userId, updatedUser, {new: true});
        res.status(200).send('Updated !');
    } catch (e) {
        console.log(e);
        res.status(500).join({message: 'update fail'})
    }
}

module.exports = userUpdate;