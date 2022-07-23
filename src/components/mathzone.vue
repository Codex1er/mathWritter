<template>
  <div class="">
    <button type="button" name="button">=></button>
    <span>{{latex}}</span>
    <vue-mathjax :formula="formula" />
  </div>
</template>

<script>
import VueMathjax from 'vue-mathjax-next';
MathJax.Hub.config.displayAlign="left"
console.log(MathJax.Hub.config);

// VueMathjax.props.options.displayAlign = "left"
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
  text-align: left;
}
span {
  display: inline-block;
  text-align: left
}
div {
  display: inline-block;
  text-align: left;
  margin: 1em
}
button {
  margin: 0.5em
}

</style>
