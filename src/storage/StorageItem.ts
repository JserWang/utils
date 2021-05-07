export default class StorageItem<T> {
  data: T
  expires?: number | null
  constructor(data: T, expires?: number) {
    this.data = data
    this.expires = expires ? Date.now() + expires : null
  }
}
