import StorageItem from './StorageItem'
import { StorageTypeEnum } from './types'

const getStorage = (type: StorageTypeEnum): Storage =>
  type === StorageTypeEnum.Session ? window.sessionStorage : window.localStorage

export default class ExpiredStorage {
  private storage: Storage

  constructor(type: StorageTypeEnum) {
    this.storage = getStorage(type)
  }

  /**
   *
   * @param key
   * @param value
   * @param expires
   */
  setItem<T>(key: string, value: T, expires?: number): void {
    try {
      const item = new StorageItem(value, expires)

      this.storage.setItem(key, JSON.stringify(item))
    } catch (err) {
      throw new Error(`Storage setItem ${key} error: ${JSON.stringify(err)}`)
    }
  }

  /**
   *
   * @param key
   * @returns
   */
  getItem<T>(key: string): T | null {
    if (!key) {
      return null
    }

    try {
      const storageItem = this.get(key)

      if (storageItem === null) {
        return storageItem
      }

      if (this.isExpired<T>(storageItem)) {
        this.removeItem(key)
        return null
      }

      return storageItem.data as T
    } catch (err) {
      throw new Error(`Storage get ${key} error: ${JSON.stringify(err)}`)
    }
  }

  private get<T=any>(key: string): StorageItem<T> | null {
    const value = this.storage.getItem(key)

    if (!value) {
      return null
    }

    return JSON.parse(value) as StorageItem<T>
  }

  removeItem(key: string): void {
    this.storage.removeItem(key)
  }

  /**
   * Get storageItem time left to live
   * @param key
   * @returns
   */
  getTimeLeft<T=any>(key: string | StorageItem<T>): number | null {
    let storageItem: StorageItem<T> | null

    if (typeof key === 'string') {
      storageItem = this.get(key)
    } else {
      storageItem = key
    }

    if (storageItem && storageItem.expires) {
      return storageItem.expires - Date.now()
    }
    return null
  }

  /**
   * Check whether the storageItem has expired
   * @param key
   * @returns
   */
  isExpired<T=any>(key: string | StorageItem<T>): boolean {
    const timeLeft = this.getTimeLeft<T>(key)

    return timeLeft !== null && timeLeft <= 0
  }

  /**
   *
   */
  clear(): void {
    this.storage.clear()
  }
}
