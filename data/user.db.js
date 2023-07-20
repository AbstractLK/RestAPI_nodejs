const userModel = require('../models/User');
const bcrypt = require('bcryptjs');

async function insert(data) {
    const encryptedPassword = await bcrypt.hash(data.pass, 10);
    const user = {
        name: data.name,
        email: data.email,
        password: encryptedPassword,
        reg_date: new Date(),
        age: data.age,
        address: data.address,
        contact: data.contact,
        role: data.role
    };

    const savedUser = await userModel.create(user);
    return (savedUser);
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

function searchByEmail(email) {
    return userModel.findOne({email: email});
}

async function countAllUsers() {
    return (await userModel.countDocuments());
}

async function deleteUser(userId) {
    return (await userModel.deleteOne({_id: userId}));
}

async function isExist(value) {
    const res = await userModel.exists({email: value});
     return (res !== null);
}

let userDB = {
    insert,
    update,
    deleteUser,
    searchById,
    searchByName,
    searchByEmail,
    countAllUsers,
    isExist,
}

Object.freeze(userDB);
module.exports = userDB;