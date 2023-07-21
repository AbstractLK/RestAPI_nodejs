const taskDB = require('../../data/task.db');

async function create(req, res) {
    const {name, status} = req.body;
    await taskDB.insert(name, status);
    return res.status(200).json({message: "Task created!"});
}

async function update(req, res) {
    const {id, name, status} = req.body;
    await taskDB.update(id, {
        task: name,
        status: status
    });
    return res.status(200).json({message: "Task updated!"});
}

async function remove(req, res) {
    const {id} = req.body;
    await taskDB.deleteTask(id);
    return res.status(200).json({message: "Task deleted!"});
}

async function all(req, res) {
    const tasks = await taskDB.searchAll();
    return res.status(200).json(tasks);
}

async function isDuplicate(req, res) {
    const {name} = req.body;
    const tasks = await taskDB.isExist(name);
    return res.status(200).json(tasks);
}


let control = {
    create,
    update,
    remove,
    all,
    isDuplicate
}

module.exports = control;
