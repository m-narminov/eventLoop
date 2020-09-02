export const asyncAwait = async () => {
  try {
    const promiseResolve = () =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(10)
        }, 4000)
      })
    const promiseReject = () =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error('Promise error'))
        }, 2000)
      })

    console.log('==============   Async/await example   ===============')
    console.log('')
    console.log('resolve running...')
    const successPromiseRes = await promiseResolve()
    console.log('resolve value   ', successPromiseRes)
    console.log('resolve end')
    console.log('reject running...   ')
    await promiseReject()
  } catch (err) {
    console.log(`reject error   ${err}`)
    console.log('reject end ')
  } finally {
    console.log('==============   Async/await example   ===============')
  }
}
