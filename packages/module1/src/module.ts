import { resolve } from 'path'
import type { Module } from '@nuxt/types'

declare module '@nuxt/types' {
  interface Context {
    $hello(message: string): string
  }
}

export interface Options {
  a: boolean
  b: number
  c: string
}

const Module1: Module<Options> = function (moduleOptions) {
  // Use this, this.options, this.nuxt
  // Use moduleOptions
  console.log('moduel1 loaded!', moduleOptions)

  this.addPlugin({
    src: resolve(__dirname, './runtime/plugin.js')
  })
}

export default Module1
