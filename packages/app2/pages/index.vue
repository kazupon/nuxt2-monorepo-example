<script setup lang="ts">
import { ref, useContext } from '@nuxtjs/composition-api'
import { Hello } from '#component1'
// TODO: vscode 上で型解決できるようにする
const { $hello } = useContext()
const message = ref($hello('hello nuxt app2!'))
</script>

<template>
  <div>
    <h1>{{ message }}</h1>
    <Hello />
  </div>
</template>
