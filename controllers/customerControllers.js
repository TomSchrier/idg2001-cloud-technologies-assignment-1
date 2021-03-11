// createNewcustomer function for post /customer route
const createNewCustomer = (req, res, next) => {
    res.json({message: "POST createNewcustomer"}); // dummy function for now
};

//export functions so we can import it to our routes/customerRoutes.js
module.exports = {createNewCustomer};