console.log('M');

setTimeout(() => {
  console.log('N');
  Promise.resolve().then(() => {
    console.log('O');
  });
  setTimeout(() => {
    console.log('P');
  }, 0);
}, 0);

Promise.resolve().then(() => {
  console.log('Q');
  setTimeout(() => {
    console.log('R');
  }, 0);
});

console.log('S');
