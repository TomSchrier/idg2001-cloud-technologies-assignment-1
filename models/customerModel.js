const mongoose = require("mongoose"); //import mongoose

// customer schema
const CustomerSchema = new mongoose.Schema({
    id: Number,
    personal_number: Number,
    account_number: Number,
    first_name: String,
    last_name: String,
    date_of_birth: Date,
    city: String,
    created_date: { type: Date, default: Date.now }
});

const Customer = mongoose.model('Customer', CustomerSchema); //convert to model named Customer
module.exports = Customer; //export for controller use
