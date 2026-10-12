<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <!-- Render the current route only so the shop can occupy the full page -->
  <RouterView />
</template>

<style>
/* Ensure root fills the viewport so pages can be fullscreen */
html, body, #app {
  height: 100%;
  margin: 0;
}
#app {
  min-height: 100vh;
  background: #f6f7fb;
}
</style>
