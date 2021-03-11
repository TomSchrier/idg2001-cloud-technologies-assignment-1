//import customer model
const Customer = require('../models/customerModel');

// createNewcustomer function for post /customer route
/*const createNewCustomer = (req, res) => {
    res.json({ message: "POST createNewcustomer" }); // dummy function for now
};*/

//POST create new customer
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

//GET get customer by personal number
/*
const getCustomerByPersonalNumber = (req, res) => {
    res.json({ message: "GET getCustomer" });
}*/

const getCustomerByPersonalNumber = (req, res) => {
    let personalNumberToFind = parseInt(req.query.personal_number);

    if (personalNumberToFind) {
        //find by personal_number
        Customer.find({ personal_number: personalNumberToFind })
            .then(customers => { res.status(200).json(customers) })
            .catch((error) => { res.status(500).json(error) });
    };
};

/*
const deleteCustomerByPersonalNumber = (req, res) => {
    res.json({ message: "DELETE customer" });
};*/

const deleteCustomerByPersonalNumber = (req, res) => {
    let personalNumberToDelete = parseInt(req.query.personal_number);

    if (!personalNumberToDelete) {
        res.status(400).json("You need to specify a personal number in the query")
    } else {
        Customer.findOneAndDelete({ personal_number: personalNumberToDelete })
            .then(() => res.status(200).json(`The customer with the personal number ${personalNumberToDelete} has been removed from the database`))
            .catch((error) => res.status(500).json(error));
    }
};

/*
const updateCustomerDetails = (req, res) => {
    res.json({ message: "UPDATE UpdateCustomerDetails" });
};*/

const updateCustomerDetails = (req, res) => {
    let id = req.query.id;
    let newAccountNumber = parseInt(req.query.account_number);
    /*let newFirstName = req.query.first_name;
    let newLastName = req.query.last_name;
    let newDateOfBirth = req.query.date_of_birth;
    let newCity = req.query.city;*/

    if (!id) {
        res.status(400).json("You need to provide a id");
    } else {
        if (newAccountNumber) {
            Customer.findOneAndUpdate({ id: id }, { account_number: newAccountNumber })
                .then(() => res.status(200).json(`The status of acc with the id ${id} was updated to ${newStatus}`))
                .catch((error) => res.status(500).json(error));
        };

        /*if (newPlace) {
            Student.findOneAndUpdate({ userName: userNameToFind }, { place: newPlace })
                .then(() => res.status(200).json(`The place of ${userNameToFind} was updated to ${newPlace}`))
                .catch((error) => res.status(500).json(error));
        };

        if (newUserName) {
            Student.findOneAndUpdate({ userName: userNameToFind }, { userName: newUserName })
                .then(() => res.status(200).json(`The name of ${userNameToFind} was updated to ${newUserName}`))
                .catch((error) => res.status(500).json(error));
        }; */
    };
};

//export functions so we can import it to our routes/customerRoutes.js
module.exports = {
    createNewCustomer,
    getCustomerByPersonalNumber,
    deleteCustomerByPersonalNumber,
    updateCustomerDetails
};