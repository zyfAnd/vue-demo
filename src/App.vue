<template>
  <div id="app">
    <School school-name="清华"/>
    <Student student-name="张三" student-age="18"/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import School  from "@/components/School";
import Student from "@/components/Student";
export default {
  name: 'App',
  components: {
    Student,
    School
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
