<template>
  <div>
    <div class="flex flex-col gap-1 justify-center">
      <label for="dcsHost" class="mt-2">DCS Host: </label>
      <input type="text" class="py-1 px-4 border bg-zinc-900 border-zinc-800 text-zinc-100" v-model="dcsHost" />
      <label for="dcsPort" class="mt-2">DCS Port: </label>
      <input type="text" class="py-1 px-4 border bg-zinc-900 border-zinc-800 text-zinc-100" v-model="dcsPort" />
      <!-- <label for="dcsPassword" class="mt-2">DCS Password: </label>
      <input type="text" class="py-2 px-4 border" v-model="dcsPassword" /> -->
    </div>
    <button v-if="!connected" class="mt-8 p-2 w-full bg-green-600 text-white" @click="connect">Connect</button>
    <button v-else class="mt-8 p-2 w-full bg-red-600 text-white" @click="disconnect">Disconnect</button>
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
