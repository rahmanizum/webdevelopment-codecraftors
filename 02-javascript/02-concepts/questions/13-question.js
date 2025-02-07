console.log('X');

const promise1 = new Promise((resolve, reject) => {
  console.log('Y');
  setTimeout(() => {
    console.log('Z');
    resolve();
  }, 0);
});

promise1.then(() => {
  console.log('W');
});

console.log('V');
