import ExpiredStorage from './ExpiredStorage'
import { StorageTypeEnum } from './types'

export const Local = new ExpiredStorage(StorageTypeEnum.Local)

export const Session = new ExpiredStorage(StorageTypeEnum.Session)
