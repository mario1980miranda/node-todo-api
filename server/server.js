var mongoose = require('mongoose');

mongoose.Primse = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
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

var newTodoTwo = new Todo({
    text: 'Defeat Micolash, Host of the nightmare',
    completed: true,
    completedAt: 10052018
});

newTodoTwo.save().then((doc) => {
    console.log('Saved todo', doc);
}, (e) => {
    console.log(e);
});