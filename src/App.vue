<template>
  <div id="app">
    <Student name="li san" age="19" gender=" male"/>
    <hr>
    <Student name="zhang san" age="20" gender=" female"/>
    <hr>
    <Student name="li si" age="18" gender=" male"/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import Student from "@/components/Student";
export default {
  name: 'App',
  components: {
    Student
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
