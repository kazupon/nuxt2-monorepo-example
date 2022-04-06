declare module '@nuxt/types/app' {
  interface Context {
    $hello(message: string): string
  }
}

export interface Options {
  a: boolean
  b: number
  c: string
}
