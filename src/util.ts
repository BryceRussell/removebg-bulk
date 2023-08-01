export function $<T extends Element = HTMLElement>(selector: any, context: Document | HTMLElement = document) {
  return typeof selector === 'string' && context.querySelector<T>(selector) || null
}

export function $$<T extends Element = HTMLElement>(selector: any, context: Document | HTMLElement = document) {
  return typeof selector === 'string' && context.querySelectorAll<T>(selector) || null
}

export function bind<T extends Element = HTMLElement> (
  selector: string | T | [string, HTMLElement],
  func: (this: T) => void
) {
  const opts = Array.isArray(selector) && selector || [selector]
  for (const el of ($$<T>(...(opts as [string, HTMLElement])) ?? [opts[0] as T])) func.call(el);
}

export function named<T>(
  element: Element,
  result: Record<string, Element> = {}
) {
  type Children = { [K in { [K in keyof T]: T[K] extends Element ? K : never }[keyof T]]: T[K] }
  for (const name of Object.getOwnPropertyNames(element.children)) {
    if (!isNaN(+name)) continue
    result[name] = element.children.namedItem(name)!
  }
  for (let i = 0; i < element.children.length; i++) {
    const child = element.children[i];
    if (child && child.children.length > 0) {
      Object.assign(result, named(child, result))
    }
  }
  return result as Children;
}