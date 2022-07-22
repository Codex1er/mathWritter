
<template>
  <div id="wrapperhead">
    <h1>{{title}}</h1>
    <a>Par {{name}}</a>
    <a>Le {{date}}</a>
    <div id="marge">
      <a>commentaires :</a> <br>
      <textarea name="name" rows="8" cols="80"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title','name','date']
}
</script>

<style scoped>
 h1 {
   margin: 1em;
 }

 #wrapperhead {
   margin: 1em;
   padding: 1em;
 }
 a {
   margin: 3em;
 }
 #marge {
   display: block;
   height: 10em;
   margin: 1em;
   padding: 1em;
   border: solid 1em;
   border-color: red;
 }
 textarea {
   height: 5em;
   width: 100%;
   resize: none
 }

</style>
