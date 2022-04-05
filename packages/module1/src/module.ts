import { resolve } from 'pathe'
import type { Module } from '@nuxt/types'
import { createCommonJS } from 'mlly'
import type { Options } from '../types/module'

const { __dirname } = createCommonJS(import.meta.url)

const Module1: Module<Options> = function (moduleOptions) {
  // Use this, this.options, this.nuxt
  // Use moduleOptions
  console.log('moduel1 loaded!', moduleOptions)

  this.addPlugin({
    src: resolve(__dirname, './runtime/plugin.js')
  })
}

export default Module1
