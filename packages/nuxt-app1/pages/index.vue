<script setup lang="ts">
import { ref } from '@nuxtjs/composition-api'
const message = ref('hello nuxt app1!')
</script>

<template>
  <h1>{{ message }}</h1>
</template>
