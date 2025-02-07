
// question:
// Create a promise that creates a post and then deletes the post.
// If the array is empty, return an error message.
// If the array is not empty, return the deleted post.
// create a post, delete the post, create a post, delete the post, delete the post, delete the post


const posts = [{title: 'POST1'}];
function createPost(post) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push(post);
            resolve(`Post ${post.title} created`);
        }, 3000)
    }) 
}


function deletePost(){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if(posts.length > 0){
                const poppedElement  = posts.pop();
                resolve(poppedElement);
            } else {
                reject("ERROR: ARRAY IS EMPTY")
            }
        }, 1000)
    })
}

createPost({title: 'POST2'})
    .then((res) => {
        console.log(res)
        return deletePost()
    })
    .catch((err) => console.log(err))
    .then((res) => {
        console.log(res)
        return createPost({title: 'POST3'})
    })
    .catch((err) => console.log(err))
    .then((res) => {
        console.log(res)
        return deletePost()
    })
    .catch((err) => console.log(err))
    .then((res) => {
        console.log(res)
        return deletePost()
    })
    .catch((err) => console.log(err))
    .then((res) => {
        console.log(res)
        return deletePost()
    })
    .catch((err) => console.log(err))



