let posts = [
    { title: "Post One", body: "This is Post One", createdAt: new Date().getTime() },
    { title: "Post Two", body: "This is Post Two", createdAt: new Date().getTime() }
];

const list = document.getElementById("list");

function createPost(post, delay, callback) {
    setTimeout(() => {
        posts.push({ ...post, createdAt: new Date().getTime() });
        if (callback) callback();
    }, delay);
}

function printPosts() {
    let output = "<ul>";
    posts.forEach((post) => {
        output += `<li>${post.title}</li>`;
    });
    output += "</ul>";
    list.innerHTML = output;
}

createPost({ title: "Post Three", body: "This is Post Three" }, 3000, () => {
    createPost({ title: "Post Four", body: "This is Post Four" }, 2000, () => {
        createPost({ title: "Post Five", body: "This is Post Five" }, 1000, () => {
            printPosts();
        });
    });
});
