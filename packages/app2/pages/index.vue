<script setup lang="ts">
import { ref } from '@nuxtjs/composition-api'
const message = ref('hello nuxt app2!')
</script>

<template>
  <div>
    <h1>{{ message }}</h1>
    <p>{{ $hello('Hello World!') }}</p>
  </div>
</template>
