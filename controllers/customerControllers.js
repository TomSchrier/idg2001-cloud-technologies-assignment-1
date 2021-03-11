//import customer model
const Customer = require('../models/customerModel');

// createNewcustomer function for post /customer route
/*const createNewCustomer = (req, res) => {
    res.json({ message: "POST createNewcustomer" }); // dummy function for now
};*/

const createNewCustomer = (req, res) => {

    const newCustomer = new Customer({
        id: req.query.id,
        personal_number: req.query.personal_number,
        account_number: req.query.account_number,
        first_name: req.query.first_name,
        last_name: req.query.last_name,
        date_of_birth: req.query.date_of_birth,
        city: req.query.city
    });

    newCustomer
        .save()
        .then(() => res.status(200).json(`–SUCCESS: User ${req.query.first_name} is now saved to the database.`))
        .catch((error) => res.status(500).json(`–ERROR: There was an error adding the user ${req.query.first_name} to the database.`));
};

const getCustomerByPersonalNumber = (req, res) => {
    res.json({ message: "GET getCustomer" });
}

const deleteCustomerByPersonalNumber = (req, res) => {
    res.json({ message: "DELETE customer" });
};

const updateCustomerDetails = (req, res) => {
    res.json({ message: "UPDATE UpdateCustomerDetails" });
};

//export functions so we can import it to our routes/customerRoutes.js
module.exports = {
    createNewCustomer,
    getCustomerByPersonalNumber,
    deleteCustomerByPersonalNumber,
    updateCustomerDetails
};