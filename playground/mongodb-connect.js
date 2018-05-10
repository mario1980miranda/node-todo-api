// MongoDB module V2
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to Connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 4));
    // });

    db.collection('Users').insertOne({
        name: 'Ozzy',
        age: 68,
        location: 'Curitiba'
    }, (err, result) => {
        if(err){
            return console.log('Unable to insert user', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 4));
    });

    db.close();
});