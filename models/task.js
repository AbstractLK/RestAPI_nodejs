const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    task:   {type: String, required: true},
    status: {type: String, required: true}
},{
    timestamps: {createdAt: 'created', updatedAt: 'updated'}
});

module.exports = mongoose.model("task", dataSchema);