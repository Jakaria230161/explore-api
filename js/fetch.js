// fetch exploring here
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => console.log(response)); // .json is not similar but close to  JSON.pares.
    // .then(json => console.log(json))

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then(res => res.json())
//     .then(json => console.log(json));


function loadData() {
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    fetch(url)
        .then(response => response.json())
        .then(json => console.log(json))
}


function fetchData() {
    const url1 = "https://jsonplaceholder.typicode.com/todos/1";
    fetch(url1)
        .then(res => res.json())
    .then(data => console.log(data))
}