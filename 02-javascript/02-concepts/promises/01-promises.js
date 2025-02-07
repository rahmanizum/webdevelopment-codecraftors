console.log('Start');
middlePromise = new Promise((ajay, muhammed) => {
    console.log("Middle 1 init");
    const success = true;
    setTimeout(() => {
        if (success) ajay('Middle success');
        else muhammed('Middle error');
    }, 2000);
})


middlePromise.then((message) => {
    console.log(message);
    console.log("Completed");
}).catch((message) => {
    console.log(message);
})


