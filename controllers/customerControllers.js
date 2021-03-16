/* 
CUSTOMER CONTROLLER
This file contains the main logic of the application. There are functions defined below that get exported and used in the routes.
*/

//import customer model
const Customer = require('../models/customerModel');

//POST create new customer
const createNewCustomer = (req, res) => {
    let successfulResponseString = `SUCCESS: The customer ${req.body.first_name} has been added to the database.`;
    let errorResponeString = `ERROR: The customer with the name ${req.body.first_name} can not be added to the database. This can be because a customer already exists with the ID, personal number, or account number provided.`

    //fill our model with the information the user has entered in the form
    const newCustomer = new Customer({
        id: req.body.id,
        personal_number: req.body.personal_number,
        account_number: req.body.account_number,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        date_of_birth: req.body.date_of_birth,
        city: req.body.city
    });

    //use the .save method to save the new customer to the database
    newCustomer
        .save()
        .then(() => res.status(200).render('createcustomer.ejs', { response: successfulResponseString }))
        .catch((error) => res.status(500).render('createcustomer.ejs', { response: errorResponeString }));
};

//GET get customer by personal number
const getCustomerByPersonalNumber = (req, res) => {
    let personalNumberToFind = parseInt(req.query.personal_number);
    let customerDoesNotExistString = `There are no customers with the personal number ${personalNumberToFind}. You can add the customer by visiting the "Create Customer" page.`;

    //use the .find method to return a customer from the databse if found
    Customer.find({ personal_number: personalNumberToFind })
        .then(customers => {
            if (customers.length === 0) {
                res.status(200).render('index.ejs', { response: customerDoesNotExistString })
            } else {

                let customerToDisplay = `Customer found: ${customers[0].first_name} ${customers[0].last_name}. Their account number is: ${customers[0].account_number}`;
                res.status(200).render('index.ejs', { response: customerToDisplay })
            }
        })
        .catch((error) => { res.status(500).json(`–ERROR: ${error}.`) });
};

//DELETE a customer by their personal number
const deleteCustomerByPersonalNumber = (req, res) => {
    let responseString = `SUCCESS: The customer with the personal number ${req.body.personal_number} has been deleted from the database.`

    //use the .findOneAndDelete method to find a customer in the database, and then delete the customer if found
    Customer.findOneAndDelete({ personal_number: req.body.personal_number })
        .then(() => res.status(200).render('deletecustomer.ejs', { response: responseString }))
        .catch((error) => res.status(500).json(error))
};

//PATCH update a customer by entering their ID
const updateCustomerDetails = (req, res) => {
    let responseString = `SUCCESS: The customer with the personal number ${req.body.personal_number} has been updated.`
    
    //find a customer with a matching personal number (personalNumberToFilter)
    let personalNumberToFilter = parseInt(req.body.personal_number);

    let newId = req.body.id;
    let newAccountNumber = req.body.account_number;
    let newFistName = req.body.first_name;
    let newLastName = req.body.last_name;
    let newDateOfBirth = req.body.date_of_birth;
    let newCity = req.body.city;

    //This could be a loop
    //Currently only one item can be updated at the time
    if (newId) {
        Customer.findOneAndUpdate({ personal_number: personalNumberToFilter }, { id: newId })
            .then(() => res.status(200).render('updatecustomer.ejs', { response: responseString }))
            .catch((error) => res.status(500).json(error));
    };

    if (newAccountNumber) {
        Customer.findOneAndUpdate({ personal_number: personalNumberToFilter }, { account_number: newAccountNumber })
            .then(() => res.status(200).render('updatecustomer.ejs', { response: responseString }))
            .catch((error) => res.status(500).json(error));
    };

    if (newFistName) {
        Customer.findOneAndUpdate({ personal_number: personalNumberToFilter }, { first_name: newFistName })
            .then(() => res.status(200).render('updatecustomer.ejs', { response: responseString }))
            .catch((error) => res.status(500).json(error));
    };

    if (newLastName) {
        Customer.findOneAndUpdate({ personal_number: personalNumberToFilter }, { last_name: newLastName })
            .then(() => res.status(200).render('updatecustomer.ejs', { response: responseString }))
            .catch((error) => res.status(500).json(error));
    };

    if (newDateOfBirth) {
        Customer.findOneAndUpdate({ personal_number: personalNumberToFilter }, { date_of_birth: newDateOfBirth })
            .then(() => res.status(200).render('updatecustomer.ejs', { response: responseString }))
            .catch((error) => res.status(500).json(error));
    };

    if (newCity) {
        Customer.findOneAndUpdate({ personal_number: personalNumberToFilter }, { city: newCity })
            .then(() => res.status(200).render('updatecustomer.ejs', { response: responseString }))
            .catch((error) => res.status(500).json(error));
    };
};

//export functions so we can import it to our routes/customerRoutes.js
module.exports = {
    createNewCustomer,
    deleteCustomerByPersonalNumber,
    getCustomerByPersonalNumber,
    updateCustomerDetails
};