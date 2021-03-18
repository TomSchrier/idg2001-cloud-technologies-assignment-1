# IDG2001 – Cloud Technologies – Group Famous – Assignment 1

Tom Schrier and Ingunn Hatlehol Andreassen

## The file structure
We decided to start from scratch and use the provided code as inspiration rather than building on top of it. We are using a 'Model–view–controller' approach where the code is divided up into different files across different folders.

- The pages a user will see are stores as .ejs in the folder `views` (for example `views/index.ejs`) 
- The routes are stored in the folder `routes`    
- The logic for each CRUD operation is stored in the `controllers` folder
- The model for the database is stored in the `models` folder (using `mongoose`)

## How to use
To use the application run the command `npm install` in the root folder of the project. Then, visit localhost.*port*. The application can also be visited on https://abcbank-tomschr.herokuapp.com/

## Latency
The latency calculation can be found in another document in the delivery. The code with latency is *not* deployed on Heroku, only attached to the delivery.