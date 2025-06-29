async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    console.log(data);
    console.log("testing where it will be printed part two");
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}


// Calling the async function
fetchData();
console.log("testing where it will be printed");