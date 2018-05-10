var mongoose = require('mongoose');

mongoose.Primse = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// var Todo = mongoose.model('Todo', {
//     text: {
//         type: String,
//         required: true,
//         minlength: 1,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     },
//     completedAt: {
//         type: Number,
//         default: null
//     }
// });

var User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }, userName: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }, password: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }, location: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }, email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

// var newTodo = new Todo({
//     text: 'Cook dinner'
// });

// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc);
// }, (e) => {
//     console.log(e);
// });

// var newTodoTwo = new Todo({
//     text: 'Defeat Micolash, Host of the nightmare',
//     completed: true,
//     completedAt: 10052018
// });

// newTodoTwo.save().then((doc) => {
//     console.log('Saved todo', doc);
// }, (e) => {
//     console.log(e);
// });

var newUser = new User({
    name: 'Mario Miranda',
    userName: 'mario_chan15',
    password: 'admin123',
    location: 'Curitiba',
    email: 'mario_chan15@hotmail.com'
});

newUser.save().then((doc) => {
    console.log('Saved user', doc);
}, (e) => {
    console.log(e);
});