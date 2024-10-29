// db.server is use d to establish the connection
const mongoose = require('mongoose');  //act like a bridge(mongoose export
require('dotenv').config();
//const mongoURL = process.env.MONGODB_URL_LOCAL //define url where to define (to connect with db)// local url
const mongoURL=process.env.MONGODB_URL  // YE DOTENV FILE SE AAYA HAI
//set up mongodb connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
//get default connection
//mongoose maintain a default connections object representing the mongodb connection.
const db = mongoose.connection; //maintain mongoose to establish connection(db obj)

//define event listener keyword for database connection
db.on('connected', () => {
    console.log('Connected to Mongodb server');
})

db.on('error', (err) => {
    console.log('error to Mongodb server', err);
})

db.on('disconnected', () => {
    console.log('Disconnected to Mongodb server');
})

//ultimately export above connection to run on server file
module.exports = db; //represent mongodb connection
