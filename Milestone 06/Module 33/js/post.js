function loadPosts(){
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(post => showPosts(post))
}

function showPosts(posts){
    const postContainer = document.getElementById("post_Container");
    for (const post of posts) {
        // console.log(post);
        const div = document.createElement("div");
        div.classList.add("posts");
        div.innerHTML = `
        <h2>${post.id}</h2>
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        `;
        postContainer.appendChild(div);
    }
}

loadPosts();