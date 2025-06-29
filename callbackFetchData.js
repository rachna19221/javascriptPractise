function fetchDataFromServer(callback, errorCallback) {
  setTimeout(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP error! Status: " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        callback(data); // Call the success callback
      })
      .catch((error) => {
        errorCallback(error.message); // Call the error callback
      });
  }, 3000); // Simulate 3 seconds delay
}
function handleSuccess(data) {
  console.log("Data fetched via callback:", data);
}

function handleError(errorMessage) {
  console.error("Error via callback:", errorMessage);
}

// Call with callbacks
console.log("Fetching data...");
fetchDataFromServer(handleSuccess, handleError);