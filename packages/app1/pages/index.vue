<script setup lang="ts">
import { ref } from '@nuxtjs/composition-api'
import { useHello } from '#composable1'
const message = ref(useHello('hello nuxt app1!'))
</script>

<template>
  <h1>{{ message }}</h1>
</template>
