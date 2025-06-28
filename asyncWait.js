// Function simulating data gathering
const gatherData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data gathered");
        }, 2000);
    });
};

// Async function to manage project
const manageProject = async () => {
    try {
        const data = await gatherData(); // Waits for gatherData to complete
        console.log(data); // Output: Data gathered
        // Continue with more tasks
    } catch (error) {
        console.error("Error: " + error); // Handles any errors
    }
};

// Call the async function
manageProject();

