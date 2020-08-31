const asyncExample = require('./async')
const { promiseResolveExample, promiseRejectExample } = require('./promise')
const observableExample = require('./observable')

const eventLoop = () => {
  console.log()
}

promiseResolveExample()

promiseRejectExample()
