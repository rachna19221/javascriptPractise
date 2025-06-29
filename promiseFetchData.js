function fetchPostFromAPI() {
  console.log("Calling API using fetch and promises...");

  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => {
      if (!response.ok) {
        // Handle HTTP errors (e.g., 404, 500)
        throw new Error("HTTP error! status: " + response.status);
      }
      return response.json(); // Convert response to JSON
    })
    .then((data) => {
        
      console.log("Post data (Promise):", data);
      console.log("seeing where it will be printed 2---") // Log actual post data
    })
    .catch((error) => {
      console.error("Error fetching post:", error); // Catch network or conversion errors
    });
}

// ✅ Call the function
fetchPostFromAPI();
console.log("seeing where it will be printed 1---")
