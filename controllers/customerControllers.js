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
        .catch((error) => res.status(500).json(`–ERROR: There was an error adding the user ${req.body.first_name} to the database.`));
};

//GET get customer by personal number
const getCustomerByPersonalNumber = (req, res) => {
    let personalNumberToFind = parseInt(req.query.personal_number);

    if (!personalNumberToFind) {
        res.status(400).json("You need to specify a personal number in the query")
    } else {
        Customer.find({ personal_number: personalNumberToFind })
            .then(customers => { res.status(200).json(customers) })
            .catch((error) => { res.status(500).json(error) });
    };
};

//DELET customer by personal number
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

//PATCH update a customer by entering their id
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

        if (newPlace) {
            Student.findOneAndUpdate({ userName: userNameToFind }, { place: newPlace })
                .then(() => res.status(200).json(`The place of ${userNameToFind} was updated to ${newPlace}`))
                .catch((error) => res.status(500).json(error));
        };

        if (newUserName) {
            Student.findOneAndUpdate({ userName: userNameToFind }, { userName: newUserName })
                .then(() => res.status(200).json(`The name of ${userNameToFind} was updated to ${newUserName}`))
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