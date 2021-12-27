<template>
 <div>
   <h2>学校的名字: {{schoolName}}</h2>
 </div>
</template>

<script>
export default {
  name: "School",
  props: {
    schoolName: String

  }
}
</script>

<style scoped>

</style>
