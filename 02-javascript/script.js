total_data = []


middle1Promise = new Promise((res, rej) => {
rej("Error in middle 1");
})

middle3Promise = new Promise((res, rej) => {
    res()
    total_data.push({ name: "middle 3", age: 25 });

})

middle2Promise = new Promise((res, rej) => {
    res();
    total_data.push({ name: "middle 2", age: 25 });
})

function print() {
    total_data.forEach((data) => {
        console.log(data);
    })
}

middle1Promise
.then(() => middle2Promise)
.catch((err) => console.log(err))
.then(() =>  middle3Promise)
.catch((err) => console.log(err))



