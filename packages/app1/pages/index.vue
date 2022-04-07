<script setup lang="ts">
import { ref } from '@nuxtjs/composition-api'
import { useHello } from '#composables'
import { formatDate } from '#helpers'
import '#styles/shared.css'

const message = ref(useHello('hello nuxt app1!'))
</script>

<template>
  <div>
    <h1 class="shared-red">{{ message }}</h1>
    <p>Now Date: {{ formatDate(new Date()) }}</p>
  </div>
</template>
