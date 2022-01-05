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
  // props:['name','age', 'gender']
  //接收的同时验证数据类型 声明数据类型
  // props:{
  //   name: String,
  //   age: Number,
  //   gender: String
  // }

  props:{
    name: {
      type: String, //限制数据类型
      required: true //这个字段必传
    },
    age:{
      type: Number,
      required: false
    },
    gender: {
      type: String,
      default:'男'
    }
  }
}
</script>

<style scoped>

</style>
