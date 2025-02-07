let posts = [
    { title: 'Post One', body: 'This is Post One', createdAt: new Date().getTime() },
    { title: 'Post Two', body: 'This is Post Two', createdAt: new Date().getTime() }
];

const list = document.getElementById('list');

function createPost(post) {
    return new Promise((resolve, reject) => {
        const success = true;
        setTimeout(() => {
            if (success) {
                posts.push(post);
                resolve(`Post added: ${post.title}`);
            } else reject('Error: Something went wrong');
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

const post3 = { title: 'Post Three', body: 'This is Post Three', createdAt: new Date().getTime() };
const post4 = { title: 'Post Four', body: 'This is Post Four', createdAt: new Date().getTime() };
const post5 = { title: 'Post Five', body: 'This is Post Five', createdAt: new Date().getTime() };

createPost(post3)
.then(() => createPost(post4))
.catch((err) => console.log(err))
.then(() => createPost(post5))
.catch((err) => console.log(err))
.then(() => printPosts())
.catch((err) => console.log(err));





