//* Write a function using setTimeout() to simulate an API call
//? Using callback
/*
function fakeApiCall(callback){
    console.log("API call started")
    setTimeout(() => {
        const responseData = {
            success: true,
            data: {
                id: 1,
                name: "Sania",
                role: "Developer"
            }
        };

        console.log("API complete");
        callback(responseData)
    }, 2000);
}

fakeApiCall((response) => {
    console.log("Received response:", response)
})
*/
//? Version 1 using async/ await
/*
function fakeApiCall() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                success: true,
                data: {
                    id: 1,
                    name: "Faizan",
                    role: "developer",
                }
            });
        }, 2000)
    });
}

async function callApi() {
    try {
        console.log("API call started");
        const response = await fakeApiCall();
        console.log("API call completed")
        console.log("Data received:-", response);
    }
    catch (error) {
        console.log("Something went wrong", error)
    }
}
callApi();
*/

//? Using IIFE
/*
function fakeApiCall() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const shoulFail = Math.random() < 0.3; // 30 chances of fail
            console.log("time:-",shoulFail)
            if(shoulFail){
                reject("API Error: Failed to fetch data");
            }else{
                resolve({
                    success: true,
                    data: {
                        id: 29901,
                        name: "Faizan",
                        role: "Developer"
                    }
                })
            }
        }, 2000);
    });
}

(async () => {
    try{
        console.log("API started");
        const response = await fakeApiCall();
        console.log("Data fetch")
        console.log("Employee:-", response);
    }
    catch(error){
        console.error("failed to fetch data:", error)
    }
})();
*/

//? Version 2 using promise
/*
function fakeApiCall() {
    console.log("API call started");

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const shouldFail = Math.random() < 0.3;
            console.log("Fail:", shouldFail);

            if (shouldFail) {
                reject("API Error: Failed to fetch data")
            } else {
                const responseData = {
                    success: true,
                    data: {
                        id: 23303,
                        name: "Zara",
                        role: "Developer"
                    }
                };

                console.log("API call completed");
                resolve(responseData);
            }
        }, 2000);
    });
}

fakeApiCall()
    .then((response) => {
        console.log("Received response:", response)
    })
    .catch((error) => {
        console.error("Error:", error)
    })
*/

//* Convert a callback-based function into a promise-based function

//This is a callback based function
function fetchData(callback) {
    setTimeout(() => {
        const data = { name: "John", age: 30 };
        callback(null, data);
    }, 2000);
}

// Converted into promise based function
function fetchData() {
    return new Promise((resolve, reject) => {
        console.log("Data fetching");

        setTimeout(() => {
            const success = Math.random() > 0.4;
            const data = { name: "John", age: 30 };

            if (success) {
                resolve(data);
            } else {
                reject("Failed to fetch data")
            }
        }, 2000);
    });
}

fetchData()
    .then((response) => {
        console.log("Data received:-", response)
    })
    .catch((error) => {
        console.error("Error:", error)
    })