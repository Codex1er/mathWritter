<template>
  <span>Trucs en latex: {{latex}}</span>
</template>

<script>
export default {
  props: ["is-selected", "latex"]
}
</script>

<style lang="css" scoped>
textarea {
  height: inherit
}
</style>
