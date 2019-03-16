let publisher = {
  subscribers: {
    any: []
  },
  addscribe(fn, type) {
    type = type || 'any'
    if (typeof this.subscribers[type] === 'undefined') {
      this.subscribers[type] = []
    }
    this.subscribers[type].push(fn)
  },
  unscribe(fn, type) {
    this.visitScriber('unscribe', fn, type)
  },
  publish(publication, fn) {
    this.visitScriber('publish', publication, fn)
  },
  visitScriber(action, arg, type) {
    type = type || 'any'
    let subscribers = this.subscribers[type]
    let i = 0
    let max = subscribers.length
    for (; i < max; i++) {
      if (action === 'publish') {
        subscribers[i](arg)
      } else {
        if (subscribers[i] === arg) {
          subscribers.splice(i, 1)
        }
      }
    }
  }
}

export default publisher
