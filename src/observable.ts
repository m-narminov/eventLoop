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
}

export const observableExample = () => {
  let proxy = new Observable()
  proxy.a = 12
  proxy.str = 'set str'
}
