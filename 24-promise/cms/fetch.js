const url = 'https://jsonplaceholder.typicode.com/posts';

// with fetch, need to make 2 requests
fetch(url)
    // we receive an object here without a body. Use response.json to fetch the body
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))