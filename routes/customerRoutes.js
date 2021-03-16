/* 
CUSTOMER ROUTES

This file contains the callback functions that will be executed when the uses accesses a route
*/

const express = require('express'); //import express

//Create an express router object to set up our routes
const router = express.Router();

//Import customer controller from /controllers/customerControllers.js file
const customerController = require('../controllers/customerControllers.js');

//Create routes with the controller function as the callback to handle the request
router.post('/createcustomer', customerController.createNewCustomer);

router.get('/getcustomer', customerController.getCustomerByPersonalNumber);

router.post('/updatecustomer', customerController.updateCustomerDetails);

router.post('/deletecustomer', customerController.deleteCustomerByPersonalNumber);

//Export the route to use in index.js 
module.exports = router;