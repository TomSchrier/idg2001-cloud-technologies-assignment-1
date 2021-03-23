# IDG2001 – Cloud Technologies – Group Famous – Assignment 1

Tom Schrier and Ingunn Hatlehol Andreassen

**changelog for second delivery:**
- birthdays can not be set in the future
- added a "time updated" when a customer is updated
- It is not possible to delete a customer that is not found in the database
- Account numbers are now generated randomly when a new user is added to the database

**NOTE: the latency folder is unchanged and the database is updated with new documents (screenshot in the delivery folder)**

## The file structure
We decided to start from scratch and use the provided code as inspiration rather than building on top of it. We are using a 'Model–view–controller' approach where the code is divided up into different files across different folders.

 - The pages a user will see are stored as .ejs in the folder `views` (for
   example `views/index.ejs`) 
- The routes are stored in the folder `routes`    
- The logic for each CRUD operation is stored in the `controllers` folder
- The model for the database is stored in the `models` folder (using `mongoose`)

## How to use
To use the application run the command `npm install` in the root folder of the project. 
After `node_modules` had finished downloading, you can run the command `node index.js` to start a local instance of the application. The local instance can be found by visiting localhost.*port*. 

The application can also be visited on https://abcbank-tomschr.herokuapp.com/

## Latency
We have tried to calculate the latency when adding a user to the database. (While the application is running on Heroku) The results of our measurements can be found in the attached "latency" Folder. The Latency folder contains a excel document, PDF-file that contains the screenshots showing how the latency is measured and finally the code used while meauring the latence (this is a copy of the original application with some small `console.log(Date.Now())` and a modification to the .ejs, otherwise its the same.)

## The data that is currently in the database
We have also included some screenshots of the current data in the database. The data shown on the screenshots can be used for testing the CRUD operaitons.