/* 
CUSTOMER MODEL

This file contains the model for a customer, each new customer inserted 
into the database must follow this Schema if it doesn't, it won't be inserted.
*/

const mongoose = require("mongoose"); //import mongoose

//customer schema
const CustomerSchema = new mongoose.Schema({
    personal_number: { type: Number, unique: true, required: true },
    account_number: { type: Number, unique: true, required: true },
    first_name: { type: String, trim: true },
    last_name: { type: String, trim: true },
    date_of_birth: Date,
    city: { type: String, uppercase: true, trim: true },
    created_date: { type: Date, default: Date.now },
    updated_date: Date
});

const Customer = mongoose.model('Customer', CustomerSchema); //convert to model named Customer
module.exports = Customer; //export for controller use
