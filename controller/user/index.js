const getAll = require('./user.getAll');
const registration = require('./user.registration');
const userDelete = require('./user.delete');
const update = require('./user.update');

module.exports = {
    getAll,
    registration,
    userDelete,
    update
}