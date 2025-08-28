/**
 * Creates an Array that supports negative indices / indexes.
 * You can pass a single parameter of type `Array`
 * or multiple parameters of any primitive type.
 *
 *
 * **NOTE**: the actual return type is `Proxy` but since `Proxy`
 * objects behave the same way as the `target` object
 * whose behavior they modify, the return type is overridden.
 * @param {...any|any[]} [items]
 * @returns {any[]}
 */
export function UArray(...items: (any | any[])[]): any[] {
  const argsCount: number = items.length
  let args: any[]

  if (argsCount === 0) {
    args = []
  } else if (argsCount === 1 && Array.isArray(items[0])) {
    args = items[0]
  } else {
    args = items.slice()
  }

  return new Proxy(args, {
    get(target: any[], prop: string | symbol) {
      if (typeof prop === 'symbol') {
        return Reflect.get(target, prop)
      }

      let index: number = Number(prop)

      if (typeof prop === 'string' && Number.isNaN(index)) {
        return Reflect.get(target, prop)
      }

      if (index < 0) {
        index += target.length
      }

      return index >= 0 && index < target.length ? target[index] : undefined
    }
  })
}
