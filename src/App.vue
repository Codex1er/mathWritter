<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import headtitle from './components/headtitle.vue'
import intitle from './components/intitle.vue'
import textzone from './components/textzone.vue'
import mathzone from './components/mathzone.vue'

</script>

<template>
  <div id="wrapper">
    <headtitle title="Mon devoir de math" name="tatan"  date="ven 22 juillet"/>
    <intitle title="Problème de Math" power="1"></intitle>
    <textzone text="Alors ici on va faire ceci puis cela et encore cela . Ca va vous suivez? "></textzone>
    <mathzone latex="x**2+y**2=1"></mathzone>
    <mathzone latex="x**2+y**2=2"></mathzone>

    <div id="console">
      Enter : <textarea name="name" rows="1" cols="80"></textarea>
    </div>
  </div>
</template>

<style scoped>
  #wrapper {
    display: block;
    min-height: 92vh;
    background-color: var(--bs-gray-200);
    max-width: 80em;
    margin: auto;
    padding: 4em;
    padding-top: 0em;
    margin-top: 0em;
    margin-bottom: 0em;
    position: relative
  }
  #console {
    position: fixed;
    display: block;
    bottom: 0.5em;
    width: 80em

  }
  textarea {
    resize: none;
    width: 80%;
    background-color: var(--bs-gray-dark);
    color: var(--bs-green)
  }
</style>
