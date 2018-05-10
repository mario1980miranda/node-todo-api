const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5af4bb8a01826f5c38977acc';
var idUser = '5af46987e3616750061dbe45';

if (!ObjectID.isValid(id)) {
    console.log('ID not valid!!!');
}

Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log('Id not found');
    }
    console.log('Todo by ID', todo);
}).catch((e) => console.log(e));

User.findById(idUser).then((user) => {
    if (!user) {
        return console.log('Id not found')
    }
    console.log('User by ID', user);
}).catch((e) => console.log(e));