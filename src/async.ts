module.exports = async () => {
  const result = await new Promise((resolve, reject) => {
    resolve(10)
  })
  console.log(`Async / await example `)
}
