function onStart(callback) {
    console.log("Starting the 'hello' function...");
    setTimeout(() => {
        console.log("Hello! This message was delayed.");
        callback(); // Calling the callback after the timeout
    }, 2000); // Delay of 2 seconds
}

// Callback function to log a completion message
function onCompletion() {
    console.log("Callback executed: Finished greeting!");
}

// Call the hello function and pass the onCompletion function as a callback
onStart(onCompletion);
 console.log("outside function waiting");
