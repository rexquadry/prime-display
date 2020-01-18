Application to display a table of product of prime numbers
Demo can be found at http:jatrexweb.com/prime-display/index.html

The application requires Node JS to be installed on the test PC
To test the application;
1.  Install node JS (if you haven't already)
2.  Clone the repository
3.  Run npm install to install dependencies
4. run "npm test" to run test cases . You can also add more test cases (mocha-chai) by adding to the "tests.js" file

To change the amount of prime numbers, modify the arguments passed to the "generatePrimeNumbers" function in "index.html".
The function accepts 2 arguments, the amount of prime numbers to return, and the amount of numbers to try from. The default values are 10 and 50