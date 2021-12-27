<template>
 <div>
  <h2> 学生的姓名: {{studentName}}</h2>
   <h2>学生的年龄 : {{studentAge}} </h2>
 </div>
</template>

<script>
export default {
  name: "Student",
  props: {
    studentName: String,
    studentAge: String
  }
}
</script>

<style scoped>

</style>
