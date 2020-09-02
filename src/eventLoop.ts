export const eventLoop = () => {
  console.log('============ Event loop ===============')
  const callstack: Array<Function> = [
    () => {
      console.log('function from callstack')
    },
  ]
  const callbeckQueue = []
  const webApi = []

  while (true) {
    console.log('----  Next iteration of event loop  ----')
    console.log('--- callstack ---')
    console.log(callstack)
    console.log('--- callbackQueue ---')
    console.log(callbeckQueue)
    while (callstack.length > 0) {
      const funcFromCallstack = callstack.pop()
      funcFromCallstack()
    }

    while (callbeckQueue.length > 0) {
      const funFromCbQueue = callbeckQueue.pop()
      callstack.push(funFromCbQueue)
    }

    console.log('---- End iteration of event loop ----')
    if (callstack.length === 0) {
      console.log('=========== Event loop =============')
      return
    }
  }
}
