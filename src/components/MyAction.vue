<template>
  <button v-on:click="showInfo">点我</button>
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

