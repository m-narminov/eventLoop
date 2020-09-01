class Subject {
  constructor() {}
}

class Subscription {
  constructor() {}
}

class Observer {
  next: Function
  error: Function
  complete: Function
  constructor({ next, error, complete }) {
    this.next = next
    this.error = error
    this.complete = complete
  }
}

class Observable {
  a: number
  constructor() {
    return new Proxy(this, {
      set: (object, key, value, proxy) => {
        object[key] = value
        console.log('set object property')
        return true
      },
    })
  }

  subscribe({ next, error, complete }): Subscription {
    return new Subscription()
  }
}

export const observableExample = () => {
  let proxy = new Observable()
  proxy.a = 12
}
