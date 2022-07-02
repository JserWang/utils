function toString(v: any) {
  return Object.prototype.toString.call(v)
}

export function is(val: unknown, type: string) {
  return toString(val) === `[object ${type}]`
}
