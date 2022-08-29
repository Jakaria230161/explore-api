// using fetch with function = only data displayed
function loadData2() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(res => res.json())
        .then (data => console.log(data))
}


// another one example of fetch = user data displayed
function loadUser() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => displayUser(data))
}

function displayUser(data) {
    console.log(data);
}


//  another is one example of posts related = post data displayed

function loadLastButtonPost() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => displayPost(data))
}

function displayPost(posts) {
    console.log(posts);
}