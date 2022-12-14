// localStorage
class LocalCache {
  setCache(key: string, value: any) {
    window.localStorage.setItem(key, value)
  }

  getCache(key: string) {
    return window.localStorage.getItem(key)
  }
  removeCache(key: string) {
    window.localStorage.removeItem(key)
  }
}

export default new LocalCache()
