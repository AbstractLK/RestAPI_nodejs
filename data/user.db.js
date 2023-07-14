const userModel = require('../models/User');

async function insert(data) {
    const user = {
        name: data.name,
        password: data.pass,
        reg_date: new Date(),
        age: data.age,
        address: data.address,
        contact: data.contact
    };

    return (await userModel.create(user));
}

async function update(userId, updatedUser) {
    return (await userModel.findByIdAndUpdate(userId, updatedUser, {new: true}));
}

async function searchByName(name) {
    return (await userModel.find({name: name}));
}

async function searchById(id) {
    return (await userModel.findById(id));
}

async function countAllUsers() {
    return (await userModel.countDocuments());
}

async function deleteUser(userId) {
    return (await userModel.deleteOne({_id: userId}));
}

async function isExist(value) {
    const res = await userModel.exists({contact: value});
     return (res !== null);
}

let userDB = {
    insert,
    update,
    deleteUser,
    searchById,
    searchByName,
    countAllUsers,
    isExist
}

Object.freeze(userDB);
module.exports = userDB;