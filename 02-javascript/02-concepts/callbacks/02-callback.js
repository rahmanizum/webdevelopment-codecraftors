posts = [
    {title: 'Post One', body: 'This is Post One', createdAt: new Date().getTime()},
    {title: 'Post Two', body: 'This is Post Two', createdAt: new Date().getTime()}
];

const list = document.getElementById('list');

function createPost(post,callback) {
    setTimeout(() => {
        posts.push(post);
        if(callback) callback();
    }, 1000);
}


function printPosts() {
    let output = '<ul>';
    posts.forEach((post) => {
        output += `<li>${post.title}</li>`;
    });
    output += '</ul>';
    list.innerHTML = output;
}

createPost({title: 'Post Three', body: 'This is Post Three', createdAt: new Date().getTime()},() => {
    createPost({title: 'Post Four', body: 'This is Post Four', createdAt: new Date().getTime()},() => {
        createPost({title: 'Post Five', body: 'This is Post Five', createdAt: new Date().getTime()},() => {
            printPosts();
        });
    });
});

