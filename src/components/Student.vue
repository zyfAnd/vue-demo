<template>
 <div>
   <h2>学生的年龄 : {{msg}} </h2>
  <h2> 学生的姓名: {{name}}</h2>
   <h2>学生的性别: {{gender}}</h2>
   <h2>学生的年龄 : {{age}} </h2>
 </div>
</template>

<script>
export default {
  name: "Student",
  data(){
    return {
      msg: "Am student"
    }
  },
  props:['name','age', 'gender']
}
</script>

<style scoped>

</style>
