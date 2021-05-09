import { isString } from './is'

/**
 * used to dotenv
 * @param val
 * @returns
 */
export const toBoolean = (val: any): boolean => {
  if (isString(val)) {
    return val === 'true' ? true : val === 'false' ? false : !!val
  }
  return !!val
}
