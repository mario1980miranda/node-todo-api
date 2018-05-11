const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findOneAndRemove({_id: ''}).then((todo) => {

});

Todo.findByIdAndRemove('5af50a0dac86535041b3a602').then((todo) => {
    console.log(todo);
});