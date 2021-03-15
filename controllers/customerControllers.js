//import customer model
const Customer = require('../models/customerModel');

//POST create new customer
const createNewCustomer = (req, res) => {
    let responseString = `SUCCESS: The customer ${req.body.first_name} has been added to the database.`;

    const newCustomer = new Customer({
        id: req.body.id,
        personal_number: req.body.personal_number,
        account_number: req.body.account_number,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        date_of_birth: req.body.date_of_birth,
        city: req.body.city
    });

    newCustomer
        .save()
        .then(() => res.status(200).render('createcustomer.ejs', { response: responseString }))
        .catch((error) => res.status(500).json(`–ERROR: There was an error adding the user ${req.body.first_name} to the database. This might be because the user already is in the database.`));
};

//GET get customer by personal number
const getCustomerByPersonalNumber = (req, res) => {
    let personalNumberToFind = parseInt(req.query.personal_number);
    let customerDoesNotExistString = `There are no customers with the personal number ${personalNumberToFind}`;

    Customer.find({ personal_number: personalNumberToFind })
        .then(customers => {
            if (customers.length === 0) {
                res.status(200).render('index.ejs', { response: customerDoesNotExistString })
            } else {
                //Needs better display
                res.status(200).render('index.ejs', { response: customers })
            }
        })
        .catch((error) => { res.status(500).json(`–ERROR: ${error}.`) });
};

//DELET customer by personal number
const deleteCustomerByPersonalNumber = (req, res) => {
    let responseString = `SUCCESS: The customer with the personal number ${req.body.personal_number} has been deleted from the database.`
    
    Customer.findOneAndDelete({ personal_number: req.body.personal_number })
        .then(() => res.status(200).render('deletecustomer.ejs', { response: responseString }))
        .catch((error) => res.status(500).json(error))
};

//PATCH update a customer by entering their id
const updateCustomerDetails = (req, res) => {
    let responseString = `SUCCESS: The customer with the personal number ${req.body.personal_number} has been updated.`
    let personalNumberToFilter = parseInt(req.body.personal_number);

    let newId = req.body.id;
    let newAccountNumber = req.body.account_number;
    let newFistName = req.body.first_name;
    let newLastName = req.body.last_name;
    let newDateOfBirth = req.body.date_of_birth;
    let newCity = req.body.city;

    //can be a loop
    //only one item can be updated at a time
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