// Function that simulates getting a response from another department
function getInformation(callback) {
     const currentTime = new Date();
    console.log("Waiting for information... "+currentTime.getSeconds());
    setTimeout(() => {
        const laterTime=new Date();
        console.log("Inside- set time out ..Waiting for information... "+laterTime.getSeconds());
        const info = "Information received";
        callback(info,laterTime); // Calling the callback with the received info
    }, 3000); // Simulates a 3-second delay
}

// Callback function to process the information
function processInformation(info,laterTime) {
    console.log("Processing: " + info+" "+ laterTime.getSeconds());
}

// Calling getInformation and passing processInformation as the callback
getInformation(processInformation);

