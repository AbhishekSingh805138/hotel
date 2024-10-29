const mongoose = require('mongoose');

//create schema or model person data kaisa dhikega hmko
const personschema = new mongoose.Schema({
    name: {
        type: String,
        required: true// required means hmko name chaiye hi chaiye hmko kaise bhi
    },
    age: {
        type: Number
    },
    work: {
        type: String,
        enum: ['chef', 'waiter', 'manager'],
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String
    },
    salary: {
        type: Number,
        required: true
    }
})


//now from above schema create person model
const Person = mongoose.model('Person', personschema);
module.exports = Person;