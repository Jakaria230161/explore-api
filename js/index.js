
function loadUser2() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => displayUser2(data))
}


function displayUser2(data) {
    const ul = document.getElementById("users-list");
    for (const user of data) {
        const li = document.createElement("li");
        li.innerText = user.name;
        ul.appendChild(li);
    }
}


//

function loadPost() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => displayPost(data))
}

function displayPost(post) {
    const ul1 = document.getElementById("user-list");
    for (const user of post) {
        const li1 = document.createElement("li");
        li1.innerText = user.title;
        ul1.appendChild(li1);
    }

}