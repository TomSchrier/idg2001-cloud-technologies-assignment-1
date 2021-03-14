const express = require('express'); //import express

// Create an express router object to set up our routes
const router  = express.Router(); 

// Import customer controller from /controllers/customerControllers.js file
const customerController = require('../controllers/customerControllers.js'); 

// Create routes with the controller function as the callback to handle the request

//https://www.digitalocean.com/community/tutorials/use-expressjs-to-deliver-html-files
router.get('/', customerController.getHomePage);

router.post('/newcustomer', customerController.createNewCustomer); 

router.get('/customer', customerController.getCustomerByPersonalNumber);

router.patch('/customer', customerController.updateCustomerDetails);

router.delete('/deletecustomer', customerController.deleteCustomerByPersonalNumber);

// Export the route to use in index.js 
module.exports = router; // export to use in server.js
