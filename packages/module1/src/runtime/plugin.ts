import { defineNuxtPlugin } from '@nuxtjs/composition-api'

export default defineNuxtPlugin((_, inject) => {
  console.log('This is module1 plugin!')
  inject('hello', (message: string) => {
    console.log(message)
    return message
  })
})
