# Node.js JWT Authentication
This is a simple Node.js authentication app that uses JWT for token-based authentication. It allows users to sign up and login to the app, and returns a JWT token that can be used to authenticate subsequent API requests.

The app is organized into separate modules for better code organization, maintainability, and scalability. The modules include:

index.js: the main entry point for the Node.js application
routes.js: defines the routes and maps them to the corresponding controller functions
controllers/authController.js: contains the controller functions that handle the incoming requests and send the response back to the client
services/authService.js: contains the business logic for the authentication process
models/userModel.js: defines the user schema and creates a model for user data
