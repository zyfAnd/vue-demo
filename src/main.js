/*
* 该文件是项目的入口文件
* */
//引入Vue
import Vue from 'vue'
//引入App 组件  他是所有的组件的父组件
import App from './App.vue'
//关闭Vue的生产提示
Vue.config.productionTip = false

//创建Vue 的实例对象 vm
new Vue({
  //
  el: '#app',
  render: h => h(App)
  //将App 放入容器
})

