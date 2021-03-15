//import customer model
const Customer = require('../models/customerModel');

//POST create new customer
const createNewCustomer = (req, res) => {

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
        .then(() => res.status(200).json(`–SUCCESS: User ${req.body.first_name} is now saved to the database.`))
        .catch((error) => res.status(500).json(`–ERROR: There was an error adding the user ${req.body.first_name} to the database. This might be because the user already is in the database.`));
};

//GET get customer by personal number
const getCustomerByPersonalNumber = (req, res) => {
    let personalNumberToFind = parseInt(req.query.personal_number);

    if (!personalNumberToFind) {
        res.status(400).json("–ERROR: You need to specify a personal number in the query")
    } else {
        Customer.find({ personal_number: personalNumberToFind })
            .then(customers => {
                if (customers.length === 0) {
                    res.status(200).send(`No customer with the personal number ${personalNumberToFind} was found in the`)
                } else {
                    res.status(200).json(customers)
                }
            })
            .catch((error) => { res.status(500).json(`–ERROR: ${error}.`) });
    };
};

//DELET customer by personal number
const deleteCustomerByPersonalNumber = (req, res) => {
    let personalNumberToDelete = parseInt(req.body.personal_number);

    if (!personalNumberToDelete) {
        res.status(400).json("–ERROR: You need to specify a personal number in the body")
    } else {
        Customer.findOneAndDelete({ personal_number: personalNumberToDelete })
            .then(() => res.status(200).json(`–SUCCESS: The customer with the personal number ${personalNumberToDelete} has been removed from the database`))
            .catch((error) => res.status(500).json(error));
    }
};

//PATCH update a customer by entering their id
const updateCustomerDetails = (req, res) => {
    let personalNumberToFilter = parseInt(req.body.personal_number);

    let newId = parseInt(req.body.id);
    let newAccountNumber = req.body.account_number;
    let newFistName = req.body.first_name;
    let newLastName = req.body.last_name;
    let newDateOfBirth = req.body.date_of_birth;
    let newCity = req.body.city;

    //can be a loop
    //only one item can be updated at a time
    if (!personalNumberToFilter) {
        res.status(400).json("–ERROR: You need to provide a personal number for the customer that needs to be updated.");
    } else {
        if (newId) {
            Customer.findOneAndUpdate({ personal_number: personalNumberToFilter }, { id: newId })
                .then(() => res.status(200).json(`–SUCCESS: The ID of the customer with the personal number ${personalNumberToFilter} was updated to ${newId}`))
                .catch((error) => res.status(500).json(error));
        };

        if (newAccountNumber) {
            Customer.findOneAndUpdate({ personal_number: personalNumberToFilter }, { account_number: newAccountNumber })
                .then(() => res.status(200).json(`–SUCCESS: The account number of the customer with the personal number ${personalNumberToFilter} was updated to ${newAccountNumber}`))
                .catch((error) => res.status(500).json(error));
        };

        if (newFistName) {
            Customer.findOneAndUpdate({ personal_number: personalNumberToFilter }, { first_name: newFistName })
                .then(() => res.status(200).json(`–SUCCESS: The first name of the customer with the personal number ${personalNumberToFilter} was updated to ${newFistName}`))
                .catch((error) => res.status(500).json(error));
        };

        if (newLastName) {
            Customer.findOneAndUpdate({ personal_number: personalNumberToFilter }, { last_name: newLastName })
                .then(() => res.status(200).json(`–SUCCESS: The last name of the customer with the personal number ${personalNumberToFilter} was updated to ${newLastName}`))
                .catch((error) => res.status(500).json(error));
        };

        if (newDateOfBirth) {
            Customer.findOneAndUpdate({ personal_number: personalNumberToFilter }, { date_of_birth: newDateOfBirth })
                .then(() => res.status(200).json(`–SUCCESS: The date of birth of the customer with the personal number ${personalNumberToFilter} was updated to ${newDateOfBirth}`))
                .catch((error) => res.status(500).json(error));
        };

        if (newCity) {
            Customer.findOneAndUpdate({ personal_number: personalNumberToFilter }, { city: newCity })
                .then(() => res.status(200).json(`–SUCCESS: The city of the customer with the personal number ${personalNumberToFilter} was updated to ${newCity}`))
                .catch((error) => res.status(500).json(error));
        };
    };
};

//export functions so we can import it to our routes/customerRoutes.js
module.exports = {
    createNewCustomer,
    deleteCustomerByPersonalNumber,
    getCustomerByPersonalNumber,
    updateCustomerDetails
};