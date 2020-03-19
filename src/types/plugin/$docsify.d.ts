
interface $docsify {
  plugins: Array<any>
  // should be:
  // manifest?: Promise<Manifest>
  // but there's no reference to Manifest from here
  manifest?: Promise<any>
}


declare var $docsify: $docsify

declare function find (selector: string): HTMLElement
declare function find (parent: HTMLElement, selector: string): HTMLElement

interface DocsifyEventTarget extends EventTarget {
  tagName: string
}
interface DocsifyEvent extends Event {
  target: DocsifyEventTarget
}

interface DocsifyHook {
  init: (handler: () => void | Promise<void>) => void | Promise<void>
  mounted: (handler: () => void | Promise<void>) => void | Promise<void>
}

interface Docsify {
  dom: {
    style: (styles: string) => void
    create: (div: string, html: string) => HTMLElement
    find: {
      (selector: string): HTMLElement
      (parent: HTMLElement, selector: string): HTMLElement
    }
    getNode: (selector: string) => any
    toggleClass: (
      element: HTMLElement,
      className: string
    ) => void
    before: (
      target: HTMLElement,
      insert: HTMLElement
    ) => void
    on: (
      element: HTMLElement,
      eventName: string,
      handler: (event: DocsifyEvent) => void
    ) => void
  }
}

declare var Docsify: Docsify