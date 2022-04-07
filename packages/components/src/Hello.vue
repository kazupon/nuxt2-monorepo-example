<script setup lang="ts">
import { ref } from '@nuxtjs/composition-api'
const msg = ref('Hello Component1!')
</script>

<template>
  <h2>{{ msg }}</h2>
</template>
