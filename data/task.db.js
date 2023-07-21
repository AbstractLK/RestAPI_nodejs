const taskModel = require("../models/task");

function searchAll() {
    return taskModel.find();
}

function searchTaskById(id) {
    return taskModel.findById(id);
}

function filterBy(filter) {
    return taskModel.find(filter).lean(true);
}

async function isExist(value) {
    const res = await taskModel.exists({task: value});
    return (res !== null);
}

async function insert(name, status) {
    const task = new taskModel({
        task: name,
        status: status
    });
    return (await taskModel.create(task));
}

async function update(id, updatedTask) {
    await taskModel.findByIdAndUpdate(id, updatedTask, {new: true});
}

function deleteTask(id) {
    return taskModel.findByIdAndDelete(id);
}


let taskDb = {
    searchAll,
    searchTaskById,
    filterBy,
    isExist,
    insert,
    update,
    deleteTask
}

Object.freeze(taskDb);

module.exports = taskDb;