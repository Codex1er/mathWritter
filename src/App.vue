<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import headtitle from './components/headtitle.vue'
</script>

<template>
  <div id="wrapper">
    <headtitle title="Mon devoir de math" name="tatan"  date="ven 22 juillet"/>
  </div>
</template>

<style scoped>
  #wrapper {
    background-color: var(--bs-gray-200);
    max-width: 80em;
    margin: auto
  }
</style>
