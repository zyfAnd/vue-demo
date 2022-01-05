<template>
  <button v-on:click="showInfo">点我</button>
  <el-button type="primary">主要按钮</el-button>
</template>

<script>
export default {
  name: "MyAction",
  methods:{
    showInfo(){
      alert("点我 点我！")
      console.log("click....")
    }
  }
}
</script>

