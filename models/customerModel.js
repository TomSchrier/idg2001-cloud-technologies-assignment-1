const mongoose = require('mongoose');

//Schema for a customer in the bank
const CustomerSchema = new mongoose.Schema({
    id: Number,
    personal_number: Number,
    account_number: Number,
    first_name: String,
    last_name: String,
    date_of_birth: Date,
    city: String,
    date: {type:String, default: new Date()},
});

const Customer = mongoose.model("Customer", CustomerSchema);
module.exports = Customer;