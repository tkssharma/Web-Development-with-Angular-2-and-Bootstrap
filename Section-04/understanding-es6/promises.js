let promise = readFile("example.txt");

// listen for both fulfillment and rejection
promise.then(function(contents) {
    // fulfillment
    console.log(contents);
}, function(err) {
    // rejection
    console.error(err.message);
});

promise.catch(function(err) {
    // rejection
    console.error(err.message);
});

//------------------------------------------------------//
let promise = readFile("example.txt");

// listen for just fulfillment - errors are not reported
promise.then(function(contents) {
    // fulfillment
    console.log(contents);
});

// listen for just rejection - success is not reported
promise.then(null, function(err) {
    // rejection
    console.error(err.message);
});

promise.catch(function(err) {
    // rejection
    console.error(err.message);
});

// is the same as:

promise.then(null, function(err) {
    // rejection
    console.error(err.message);
});


//-------------------------------------------------------------//

let fs = require("fs");

function readFile(filename) {
    return new Promise(function(resolve, reject) {
        // trigger the asynchronous operation
        fs.readFile(filename, { encoding: "utf8" }, function(err, contents) {
            // check for errors
            if (err) {
                reject(err);
                return;
            }
            // the read succeeded
            resolve(contents);
        });
    });
}
let promise = readFile("example.txt");
// listen for both fulfillment and rejection
promise.then(function(contents) {
    // fulfillment
    console.log(contents);
}, function(err) {
    // rejection
    console.error(err.message);
});



//------------------------------------------------------------//

var foo = new Promise(function(resolve, reject) {
    //Check if the current timestamp is an even number and resolve
    if (Date.now() % 2 === 0) {
        //Pass a status code of 200 to the success callback function
        resolve(200);
    } else {
        //Pass a status code of 404 to the failure callback function
        reject(404);
    }
});
//When the promise has successfully resolved, execute the following
//callback function
foo.then(function(status) {
    console.log("Successfully resolved: " + status);
});

//When the promise is rejected i.e. an error, execute the following
//callback function
foo.catch(function(status) {
    console.log("An error occurred: " + status);

});



let promise = readFile("example.txt");

// listen for both fulfillment and rejection
promise.then(function(contents) {
    // fulfillment
    console.log(contents);
}, function(err) {
    // rejection
    console.error(err.message);
});

promise.catch(function(err) {
    // rejection
    console.error(err.message);
});