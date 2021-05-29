# Quandoo challenge 2021 - Fabio Gomes

This challenge consists in two parts:  
UI task: design a test suite for login functionality on http://the-internet.herokuapp.com/login (existing user credentials are displayed on the page);  
API task: go to https://reqres.in. Get user credentials from GET single user endpoint.  
Using the credentials implement an E2E scenario for registration and login. Verify that every endpoint returns the correct token.  

### Framework
For this challenge I am using Cypress, a Javascript based framework with a large community.
Some of the benefits of Cypress are:
- Has a great debug tool
- It's easy to implement, maintain and run
- Can be added to the CI/CD pipeline
- Offers the ability to parallelize and run group tests
- Allows us to design UI and API tests.

### Next improvements
1. With the new GPDR, the wrong credentials message should not identify wich credential field has invalid data (username or password).
2. After login, it should be nice to have the account information to identify who is logged in the application (e.g. Welcome message with the user name).
3. It would be nice to have a feature to recover/remember password.


## Getting started

### Installing Node.js
You should have Node.js installed on your system.  
To install Node.js, click [on this link](https://nodejs.org/en/download/).

### Installing Cypress
1. Run 
```
run npm install cypress
```

## Running tests
A) Recommended for running tests locally:
```
npx cypress open
```
B) Running tests headless:
```
npm run cypress
```

After a moment, the Cypress Test Runner will launch.
 
## System requirements

Cypress is a desktop application that is installed on your computer. The desktop application supports these operating systems:

- macOS 10.9 and above (64-bit only)
- Linux Ubuntu 12.04 and above, Fedora 21 and Debian 8 (64-bit only)
- Windows 7 and above
