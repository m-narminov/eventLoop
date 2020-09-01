export const promiseResolveExample = () => {
  const promise = new Promise((resolve, reject) => {
    resolve(123)
  })
  promise
    .then(res => {
      console.log(`Promise resolve ${res}`)
    })
    .catch(e => {
      console.log(`Promise resolve error ${e}`)
    })
}

export const promiseRejectExample = () => {
  const promise = new Promise((resolve, reject) => {
    reject(0)
  })

  promise
    .then(res => {
      console.log('Promise reject then ') // unreachable
    })
    .catch(e => {
      console.log(`Promise reject error ${e}`)
    })
}
