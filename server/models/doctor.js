const mongoose = require('mongoose');

// Define the subcollection schema
const appointmentSchema = new mongoose.Schema({
    day: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    }
}, { _id: false }); // Set _id to false to prevent Mongoose from automatically creating an _id field for subdocuments

// Define the main schema
const drSchema = new mongoose.Schema({
    _id: mongoose.Schema.ObjectId,
    name: {
        type: String,
        required: true
    },
    specialization: {
        type: String,
        required: true
    },
    contactinfo: {
        type: String,
        required: true,
        unique: true,
    },
    shedule: [appointmentSchema] // Use an array to store multiple subdocuments
}, { collection: "doctor", versionKey: false });


const Doctor = mongoose.model('doctor', drSchema);

module.exports = Doctor;
