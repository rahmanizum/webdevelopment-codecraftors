console.log(1);

async function async1() {
  console.log(2);
  await async2();
  console.log(3);
}

async function async2() {
  console.log(4);
}

setTimeout(() => {
  console.log(5);
}, 0);

async1();

new Promise((resolve) => {
  console.log(6);
  resolve();
}).then(() => {
  console.log(7);
});

console.log(8);
