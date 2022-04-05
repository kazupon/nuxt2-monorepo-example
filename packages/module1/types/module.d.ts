declare module '@nuxt/types' {
  interface Context {
    $hello(message: string): void
  }
}

export interface Options {
  a: boolean
  b: number
  c: string
}
