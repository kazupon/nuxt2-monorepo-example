<script setup lang="ts">
import { ref } from '@nuxtjs/composition-api'
import { useHello } from '#composable1'
import { formatDate } from '#helpers'
const message = ref(useHello('hello nuxt app1!'))
</script>

<template>
  <div>
    <h1>{{ message }}</h1>
    <p>Now Date: {{ formatDate(new Date()) }}</p>
  </div>
</template>
