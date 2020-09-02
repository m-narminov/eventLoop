export const eventLoop = () => {
  console.log('============ Event loop ===============')
  const callstack: Array<Function> = [
    () => {
      console.log('function 1 from callstack')
    },
    () => {
      console.log('function 2 from callstack')
    },
    () => {
      console.log('function 3 from callstack')
    },
  ]
  const callbeckQueue = [
    () => {
      console.log('function 1 from callbeckQueue')
    },
    () => {
      console.log('function 2 from callbeckQueue')
    },
    () => {
      console.log('function 3 from callbeckQueue')
    },
    () => {
      console.log('function 4 from callbeckQueue')
    },
  ]
  const webApi = [
    () => {
      console.log('function 1 from webApi')
    },
    () => {
      console.log('function 2 from webApi')
    },
    () => {
      console.log('function 3 from webApi')
    },
    () => {
      console.log('function 4 from webApi')
    },
  ]

  while (true) {
    console.log('----  Next iteration of event loop  ----')

    console.log('--- callstack ---')
    callstack.forEach(element => {
      console.log(element)
    })
    while (callstack.length > 0) {
      const funcFromCallstack = callstack.pop()
      funcFromCallstack()
    }
    console.log('--- callstack ---')
    callstack.forEach(element => {
      console.log(element)
    })

    console.log('--- callbackQueue ---')
    callbeckQueue.forEach(element => {
      console.log(element)
    })
    while (callbeckQueue.length > 0) {
      const funFromCbQueue = callbeckQueue.pop()
      callstack.push(funFromCbQueue)
    }
    console.log('--- callbackQueue ---')
    callbeckQueue.forEach(element => {
      console.log(element)
    })

    console.log('--- webApi ---')
    webApi.forEach(element => {
      console.log(element)
    })
    while (webApi.length > 0) {
      const funcFromWebApi = webApi.shift()
      callbeckQueue.push(funcFromWebApi)
    }
    console.log('--- webApi ---')
    webApi.forEach(element => {
      console.log(element)
    })

    console.log('---- End iteration of event loop ----')
    if (callstack.length === 0) {
      console.log('=========== Event loop =============')
      return
    }
  }
}
