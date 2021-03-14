const express = require('express'); //import express

// Create an express router object to set up our routes
const router  = express.Router(); 

// Import customer controller from /controllers/customerControllers.js file
const customerController = require('../controllers/customerControllers.js'); 

// Create routes with the controller function as the callback to handle the request
router.post('/newcustomer', customerController.createNewCustomer); 

router.get('/getcustomer', customerController.getCustomerByPersonalNumber);

router.patch('/updatecustomer', customerController.updateCustomerDetails);

router.delete('/deletecustomer', customerController.deleteCustomerByPersonalNumber);

// Export the route to use in index.js 
module.exports = router; // export to use in server.js