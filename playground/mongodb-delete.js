// MongoDB module V2
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to Connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');

    // delete many
    // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
    //     console.log(result);
    // });
    // delete one
    // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
    //     console.log(result);
    // });
    // find one and delete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });
    // db.collection('Users').deleteMany({name: 'Ozzy'}).then((result) => {
    //     console.log(result);
    // });
    db.collection('Users').findOneAndDelete({_id: new ObjectID("5af45596a0da02034983d47a")}).then((result) => {
        console.log(result);
    });
    // db.close();
});