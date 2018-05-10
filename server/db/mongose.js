var mongoose = require('mongoose');

mongoose.Primse = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
    mongoose
};