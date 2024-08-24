<template>
  <div>
    <div class="flex gap-4 justify-center">
      <label for="dcsHost" class="mt-2">DCS Host: </label>
      <input type="text" class="py-2 px-4 border" v-model="dcsHost" />
      <label for="dcsPort" class="mt-2">DCS Port: </label>
      <input type="text" class="py-2 px-4 border" v-model="dcsPort" />
      <!-- <label for="dcsPassword" class="mt-2">DCS Password: </label>
      <input type="text" class="py-2 px-4 border" v-model="dcsPassword" /> -->
    </div>
    <button v-if="!connected" class="mt-4 p-2 w-1/2 bg-green-600 text-white" @click="connect">Connect</button>
    <button v-else class="mt-4 p-2 w-1/2 bg-red-600 text-white" @click="disconnect">Disconnect</button>
  </div>
</template>

<script setup lang="ts">
import GlobalPropertiesCard from './GlobalPropertiesCard.vue'
import { ref } from 'vue'
import { useStore } from '@/composables/useStore'
import { useServer } from '@/composables/useServer'

const { dcsHost, dcsPort } = useStore()
const { connect, connected, disconnect } = useServer()
</script>

<style scoped></style>
