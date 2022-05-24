const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema ({
    user: {type: String, required: true},
    exercise: {type: String, required: true},
    duration: {type: String},
    date: {type: Date}
});

const exercise = mongoose.model('todo', exerciseSchema);

module.exports = exercise;