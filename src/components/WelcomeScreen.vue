<template>
  <div>
    <h1 class="text-2xl">Welcome to the Global Properties App</h1>
    <LoginForm />
    <GlobalPropertiesCard />
    <MapView />
  </div>
</template>

<script setup lang="ts">
import GlobalPropertiesCard from './GlobalPropertiesCard.vue'
import LoginForm from './LoginForm.vue'
import MapView from './MapView.vue'
import { ref } from 'vue'
import { useStore } from '@/composables/useStore'

const { dcsHost, dcsPort, dcsPassword } = useStore()
</script>

<style scoped></style>
