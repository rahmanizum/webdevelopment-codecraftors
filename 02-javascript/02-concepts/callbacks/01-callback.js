function create1stPost(callback) {
    setTimeout(() => {
        console.log('Post One');
        if(callback) callback();  
    }, 3000);
}

function create2ndPost(callback) {
    setTimeout(() => {
        console.log('Post Two');
        if(callback) callback();
    }, 2000);
}

function create3rdPost(callback) {
    setTimeout(() => {
        console.log('Post Three');
        if(callback) callback();
    }, 1000);
}

create1stPost(() => {
    create2ndPost(() => {
        create3rdPost(() => {
            console.log('All Posts Created');
        });
    });
});


