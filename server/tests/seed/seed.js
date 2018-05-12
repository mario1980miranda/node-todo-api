const {ObjectID} = require('mongodb');
const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');
const jwt = require('jsonwebtoken');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();
const users = [{
    _id: userOneId,
    email: 'mario.miranda@gmail.com',
    password: 'userOnePassword',
    tokens: [ {
        access: 'auth',
        token: jwt.sign(
            {
                _id: userOneId, access: 'auth'
            }, 
            'abc123'
        ).toString()
    }]
}, {
    _id: userTwoId,
    email: 'jen@example.com',
    password: 'userTwoPassword',
    completed: true,
    completedAt: 333,
    tokens: [ {
        access: 'auth',
        token: jwt.sign(
            {
                _id: userTwoId, access: 'auth'
            }, 
            'abc123'
        ).toString()
    }]
}];

const populateUsers = (done) => {
    User.remove({}).then(() => {
        var userOne = new User(users[0]).save();
        var userTwo = new User(users[1]).save();

        return Promise.all([userOne, userTwo]);
    }).then(() => done());
};

const todos = [{
    _id: new ObjectID(),
    text: 'First Test ToDo',
    _creator: userOneId
}, {
    _id: new ObjectID(),
    text: 'Second Test ToDo',
    completed: true,
    completedAt: 1526012039453,
    _creator: userTwoId
}];

const populateTodos = (done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
};

module.exports = {
    todos,
    populateTodos,
    users,
    populateUsers
};