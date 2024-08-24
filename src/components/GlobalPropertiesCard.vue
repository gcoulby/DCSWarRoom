<template>
  <div>
    <!-- render all GlobalProperties to screen -->
    <div class="flex gap-4 justify-center">
      <p>FileType:</p>
      <p>{{ globalProperties['FileType'] }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/composables/useStore'
import { GlobalProperties } from '@/types'

const { globalProperties } = useStore()
</script>

<style scoped></style>
