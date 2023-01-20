<script setup lang="ts">
import { Meta } from './types'
const props = defineProps<{ meta: Meta }>()

</script>

<template>
  <div>
    <strong>{{meta.key}}</strong>
    <span>{{meta.value}}</span>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
