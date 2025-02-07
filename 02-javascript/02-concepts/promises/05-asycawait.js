let posts = [
    {title: 'Post One', body: 'This is Post One', createdAt: new Date().getTime()},
    {title: 'Post Two', body: 'This is Post Two', createdAt: new Date().getTime()}
];

const list = document.getElementById('list');

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({...post, createdAt: new Date().getTime()});
            resolve(`Post ${post.title} created`);
        }, 1000);
    });
}

function printPosts() {
    let output = '<ul>';
    posts.forEach((post) => {
        output += `<li>${post.title}</li>`;
    });
    output += '</ul>';
    list.innerHTML = output;
}

async function init() {
    await createPost({title: 'Post Three', body: 'This is Post Three'});
    await createPost({title: 'Post Four', body: 'This is Post Four'});
    printPosts();
}
init();
