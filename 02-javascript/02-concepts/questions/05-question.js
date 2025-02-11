console.log('start')

const promisefun = () => (new Promise((resolve, reject) => {
  console.log(1);
  resolve('success')
}))


console.log('middle')

promisefun().then(res => {
  console.log(res)
})

console.log('end')