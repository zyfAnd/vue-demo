### Vue

##### 学习网站

| Vue官网      | https://cn.vuejs.org/v2/guide/                   |
| ------------ | ------------------------------------------------ |
| 表严肃       | https://biaoyansu.com/22.9                       |
| B站kuangshen | https://www.bilibili.com/video/BV18E411a7mC?p=13 |
|              |                                                  |

##### 安装Webpack

```shell
npm install webpack -g
npm install webpack-cli 
```



##### 脚手架创建项目

项目的结构分析

- src
-

##### Vue基础

######  props

```javascript
## 配置 props 
   功能：接收外部传入的数据
     1. 传递数据
       <Student name="Zhang San"/>
     2. 接收数据
        2.1 第一种方式
             props:['name','gae']
        2.3 第二种方式
             props:{
               name: String,
               age: Number
               gender: String
             }
        2.4 第三种方式
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
```



###### Vue的件事处理

```javascript
  <button @click="showInfo">点我</button>
  <button v-on:click="showInfo2" >点我</button>、
```



MyAction Vue component

```javascript
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
```

