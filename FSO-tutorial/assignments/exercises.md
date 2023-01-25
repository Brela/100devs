## 3.1: Phonebook backend step1 ✅ 
Implement a Node application that returns a hardcoded list of phonebook entries from the address http://localhost:3001/api/persons.

## 3.2: Phonebook backend step2 ✅ 
Implement a page at the address http://localhost:3001/info that looks roughly like this:
The page has to show the time that the request was received and how many entries are in the phonebook at the time of processing the request.

## 3.3: Phonebook backend step3 ✅ 
Implement the functionality for displaying the information for a single phonebook entry. The url for getting the data for a person with the id 5 should be http://localhost:3001/api/persons/5
If an entry for the given id is not found, the server has to respond with the appropriate status code.

## 3.4: Phonebook backend step4 ✅ 
Implement functionality that makes it possible to delete a single phonebook entry by making an HTTP DELETE request to the unique URL of that phonebook entry.
Test that your functionality works with either Postman or the Visual Studio Code REST client.

## 3.5: Phonebook backend step5 ✅ 
Expand the backend so that new phonebook entries can be added by making HTTP POST requests to the address http://localhost:3001/api/persons.
Generate a new id for the phonebook entry with the Math.random function. Use a big enough range for your random values so that the likelihood of creating duplicate ids is small.

## 3.6: Phonebook backend step6 ✅ 
Implement error handling for creating new entries. The request is not allowed to succeed, if:
* The name or number is missing
* The name already exists in the phonebook
Respond to requests like these with the appropriate status code, and also send back information that explains the reason for the error, e.g.:

{ error: 'name must be unique' }

## 3.12: Command-line database
Create a cloud-based MongoDB database for the phonebook application with MongoDB Atlas.
Create a mongo.js file in the project directory, that can be used for adding entries to the phonebook, and for listing all of the existing entries in the phonebook.

The application should work as follows. You use the program by passing three command-line arguments (the first is the password), e.g.:

node mongo.js yourpassword Anna 040-1234556
As a result, the application will print:

added Anna number 040-1234556 to phonebook
The new entry to the phonebook will be saved to the database. Notice that if the name contains whitespace characters, it must be enclosed in quotes:

node mongo.js yourpassword "Arto Vihavainen" 045-1232456
If the password is the only parameter given to the program, meaning that it is invoked like this:

node mongo.js yourpassword
Then the program should display all of the entries in the phonebook:

phonebook:
Anna 040-1234556
Arto Vihavainen 045-1232456
Ada Lovelace 040-1231236
You can get the command-line parameters from the process.argv variable.
