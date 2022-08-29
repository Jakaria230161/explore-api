
function loadComments() {
    fetch("https://jsonplaceholder.typicode.com/comments")
        .then(res => res.json())
        .then(data => displayComments(data))
}

function displayComments(comments) {
    // console.log(comments);
    const commentsContainer = document.getElementById("comment-container");
    for (const comment of comments) {
        const commentDiv = document.createElement("div");
        commentDiv.innerHTML = `
            <h1>Name : ${comment.name}</h1>
            <h2>Comments: ${comment.body} </h2>
            <h4>email: ${comment.email}</h4>
        `;
        commentsContainer.appendChild(commentDiv);
    }
}

loadComments();

