<template>
  <span>Trucs en latex: {{latex}}</span>
  <vue-mathjax :formula="formula" />
</template>

<script>
import VueMathjax from 'vue-mathjax-next';
export default {
  props: ["is-selected", "latex"],
  components: {
    'vue-mathjax': VueMathjax
  },
  data() {
    return {
      formula: '$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$'
    }
  }
}
</script>

<style lang="css" scoped>
textarea {
  height: inherit
}
vue-matjax {
  display: inline;
  text-align: left
}
span, div {
  display: inline;
  text-align: left

}
</style>
