const express = require('express'); //import express

// Create an express router object to set up our routes
const router  = express.Router(); 

// Import customer controller from /controllers/customerControllers.js file
const customerController = require('../controllers/customerControllers.js'); 

// Create our  route with the controller function as the callback to handle the request 
router.post('/customer', customerController.createNewCustomer); 

router.get('/customer', customerController.getCustomerByPersonalNumber);

router.patch('/customer', customerController.updateCustomerDetails);

router.delete('/customer', customerController.deleteCustomerByPersonalNumber);

// Export the route to use in index.js 
module.exports = router; // export to use in server.js
