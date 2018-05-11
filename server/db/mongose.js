var mongoose = require('mongoose');

mongoose.Primse = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

module.exports = {
    mongoose
};