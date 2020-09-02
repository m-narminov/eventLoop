class Subject {
  constructor() {}
}

class Subscription {
  constructor(to: Observable) {}
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
  str: string

  constructor() {
    return new Proxy(this, {
      set: (object, key, value, proxy) => {
        object[key] = value
        console.log(
          `set ${object.constructor.name}[${key.toString()}] = ${value}`
        )
        return true
      },
    })
  }

  subscribe({ next, error, complete }): Subscription {
    return new Subscription(this)
  }
}

export const observableExample = () => {
  let proxy = new Observable()
  proxy.a = 12
  proxy.str = 'set str'
}
