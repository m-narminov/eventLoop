import { resolve } from 'path'
import { rejects } from 'assert'

module.exports = {
  promiseResolveExample: () => {
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
  },

  promiseRejectExample: () => {
    const promise = new Promise((resolve, reject) => {
      reject(0)
    })

    promise
      .then(res => {
        console.log('Promise reject then ')
      })
      .catch(e => {
        console.log(`Promise reject error ${e}`)
      })
  },
}
