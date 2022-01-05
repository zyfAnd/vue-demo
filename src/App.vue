<template>
  <div id="app">
<!--    <Student name="li san" age="19" gender=" male"/>-->
<!--    <hr>-->
<!--    <Student name="zhang san" age="20" gender=" female"/>-->
<!--    <hr>-->
    <Student name="li si"/>

    <MyAction />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MyAction from "@/components/MyAction";
import Student from "@/components/Student";
export default {
  name: 'App',
  components: {
    MyAction,
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
