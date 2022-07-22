<template>
  <h1 v-if="1==power">{{title}}</h1>
  <h2 v-if="2==power">{{title}}</h2>
  <h3 v-if="3==power">{{title}}</h3>
  <h4 v-if="4==power">{{title}}</h4>
  <h5 v-if="5==power">{{title}}</h5>
  <h6 v-if="6==power">{{title}}</h6>

</template>

<script>
export default {
  props: ["title", "power"]
}
</script>

<style lang="css" scoped>
  h1 {
    text-align: left
  }
</style>
