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

// promise1 = createPost({title: 'Post Three', body: 'This is Post Three'});
// promise2 = createPost({title: 'Post Four', body: 'This is Post Four'});
// promise3 = createPost({title: 'Post Five', body: 'This is Post Five'});
// promise4 = fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) => res.json())

// const response = Promise.all([promise1, promise2, promise3,promise4])
// response.then((res)=>{
//     console.log(res);
//     printPosts();
// })

async function createPosts() {
    try {
        res1 = await createPost({title: 'Post Three', body: 'This is Post Three'});
        console.log(res1)
        res2 = await createPost({title: 'Post Four', body: 'This is Post Four'});
        console.log(res2)
        res3 = await createPost({title: 'Post Five', body: 'This is Post Five'});
        console.log(res3)
        res4 = await fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) => res.json())
        console.log(res4)
        printPosts();
        
    } catch (error) {
        console.log(error)
    }
}
createPosts();
