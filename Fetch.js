document.querySelector("#fetchButton").addEventListener("click", async () => {
    const post = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
    const comments = await (await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)).json();
    console.log(post, comments[4].body)

    document.querySelector("#inputField").value = comments[4].body;
})