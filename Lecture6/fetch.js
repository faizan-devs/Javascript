// AJAX is Asynchronous JS and XML
// JSON is Javascript Object Notation
// json() method: returns a second promise that resolves with the rsult of parsing the response body test as JSON.(input is JSON, output is JS object)

const { use } = require("react");

// In JavaScript, the fetch() function is used to make HTTP requests (like getting data from a server or an API). It returns a Promise that resolves to the response of the request.

//  Basic Syntax:
fetch(URL, Options)
    .then((response) => {
        // handle response from api
        return response
    })
    .catch(error => {
        // handle any errors
        console.error(error);
    });

// Simple Example – GET Request
fetch('https://api.example.com/data')
    .then(response => {
        response.json(); // parse JSON from the response
    })
    .then(data => {
        console.log(data); // use the data
    })
    .catch(error => {
        console.error("ERROR:-", error)
    });

// POST Request with JSON Body
fetch('https://api.example.com/data', {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify({
        name: "Faizan",
        age: 21
    })
})
    .then(response => response.json())
    .then(data => {
        console.log("User created", data)
    })
    .catch(error => {
        console.error("ERROR:-", error);
    });

//* Notes:
//* fetch() does not reject on HTTP errors like 404 or 500. You need to manually check response.ok.
//* Always use response.json() or response.text() depending on the content type.

// Example with async/await
async function getUser() {
    try {
        const response = await fetch('https://api.example.com/data');

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const user = await response.json();
        console.log(user);
    } catch (error) {
        console.error("Fetch failed", error);
    }
}