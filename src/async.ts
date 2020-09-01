export const asyncAwait = async () => {
  const promiseResolve: Promise<number> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10)
    }, 4000)
  })
  const promiseReject: Promise<Error> = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Promise error'))
    }, 2000)
  })

  try {
    console.log('  ==============   Async / await example   ===============')
    console.log('')
    console.log('success running...')
    const successPromiseRes = await promiseResolve
    console.log('success value   ', successPromiseRes)
    console.log('')
    console.log('reject running...   ')
  } catch (err) {
    console.log(`reject error   ${err}`)
    console.log('reject end ')
  }
}
