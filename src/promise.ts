export const promiseResolveExample = () => {
  const promise: Promise<number> = new Promise((resolve, reject) => {
    resolve(123)
  })
  return promise
}

export const promiseRejectExample = () => {
  const promise: Promise<number> = new Promise((resolve, reject) => {
    reject(0)
  })

  return promise
}

export const promiseExample = () => {
  console.log('=========== Promise ===========')
  promiseResolveExample()
    .then(res => {
      console.log(res)
    })
    .catch(e => {
      console.log(`Error in Promise example: ${e.message}`)
    })
    .finally(() => {
      console.log('=========== Promise resolve ===========')
    })

  promiseRejectExample()
    .then(res => {
      console.log(res)
    })
    .catch(e => {
      console.log(`Error in Promise example: ${e}`)
    })
    .finally(() => {
      console.log('=========== Promise reject ===========')
    })
}
