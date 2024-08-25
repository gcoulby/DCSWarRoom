<template>
  <div>
    <div class="flex justify-between items-center">
      <div class="w-2/12 h-[100vh] p-4 bg-zinc-800 text-slate-50">
        <SideBar />
      </div>
      <div class="w-10/12 h-full">
        <MapView />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MapView from './MapView.vue'
import SideBar from './SideBar.vue'
</script>

<style scoped></style>
