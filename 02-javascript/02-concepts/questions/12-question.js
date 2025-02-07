console.log('A');

setTimeout(() => {
    console.log('B');
    Promise.resolve().then(() => {
        console.log('C');
    });
}, 0);

promise = new Promise((resolve, reject) => {
    console.log('D');
    resolve('E');
});


Promise.resolve().then(() => {
    console.log('F');
});

promise.then((res)=>console.log(res))

setTimeout(() => {
    console.log('G');
}, 0);

console.log('H');


