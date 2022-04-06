<script setup lang="ts">
import { ref } from '@nuxtjs/composition-api'
import { Hello } from '#component1'
const message = ref('hello nuxt app2!')
</script>

<template>
  <div>
    <h1>{{ message }}</h1>
    <p>{{ $hello('Hello World!') }}</p>
    <Hello />
  </div>
</template>
