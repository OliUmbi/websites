interface Listener {
  name: string,
  callback: () => void
}

let listeners: Listener[] = [];

export const local = {
  set(name: string, value: string): void {
    localStorage.setItem(name, value)
    local.update(name)
  },
  get(name: string): () => string | null {
    return () => {
      return localStorage.getItem(name)
    }
  },
  subscribe(name: string): (callback: () => void) => () => void {
    return (callback: () => void) => {
      listeners.push({
        name: name,
        callback: callback
      })

      return () => {
        listeners = listeners.filter(listener => listener.callback !== callback)
      }
    }
  },
  update(name: string): void {
    for (let listener of listeners) {
      if (listener.name === name) {
        listener.callback()
      }
    }
  }
};
