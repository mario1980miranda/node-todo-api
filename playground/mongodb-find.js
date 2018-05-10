// MongoDB module V2
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to Connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');
    // db.collection('Todos').find().toArray().then((documents) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(documents, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });
    // db.collection('Todos').find({completed: false}).toArray().then((documents) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(documents, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });
    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });
    db.collection('Users').find({name: 'Ozzy'}).toArray().then((users) => {
        console.log('Users');
        console.log(JSON.stringify(users, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });
});