/* 
CUSTOMER MODEL

This file contains the model for a customer, each new customer inserted 
into the database must follow this Schema if it doesn't, it won't be inserted.
*/

const mongoose = require("mongoose"); //import mongoose

//customer schema
const CustomerSchema = new mongoose.Schema({
    id: { type: Number, unique: true },
    personal_number: { type: Number, unique: true },
    account_number: { type: Number, unique: true },
    first_name: String,
    last_name: String,
    date_of_birth: Date,
    city: String,
    created_date: { type: Date, default: Date.now }
});

const Customer = mongoose.model('Customer', CustomerSchema); //convert to model named Customer
module.exports = Customer; //export for controller use
