console.log('start');

setTimeout(() => {
  console.log('setTimeout 1');
}, 0);

Promise.resolve().then(() => {
  console.log('promise 1');
  setTimeout(() => {
    console.log('setTimeout 2');
  }, 0);
});

Promise.resolve().then(() => {
  console.log('promise 2');
  Promise.resolve().then(() => {
    console.log('promise 3');
  });
});

console.log('end');
