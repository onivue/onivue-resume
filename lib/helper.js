export function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

// SOURCE: https://dmitripavlutin.com/how-to-compare-objects-in-javascript/
export function objectCompare(object1, object2) {
  const keys1 = Object.keys(object1)
  const keys2 = Object.keys(object2)
  if (keys1.length !== keys2.length) {
    console.warn(keys1, keys2)
    return false
  }
  for (const key of keys1) {
    const val1 = object1[key]
    const val2 = object2[key]
    const areObjects = isObject(val1) && isObject(val2)
    if (areObjects && !objectCompare(val1, val2)) {
      return false
    }
    if (!areObjects && val1 !== val2) {
      // console.warn('DIFF,', val1, val2)
      return false
    }
  }
  return true
}
function isObject(object) {
  return object != null && typeof object === 'object'
}
