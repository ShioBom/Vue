<!--
 * @author: Tonya
 * @email: yu.tang02@hand-china.com
 * @Date: 2019-08-17 16:16:14
 * @LastEditTime: 2019-08-17 16:45:24
 -->
<template>
  <div id="app">
   <transform-pseudo-class></transform-pseudo-class>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import TransformPseudoClass from './components/border-problem/transform-pseudo-class';

export default {
  name: 'app',
  components: {
    HelloWorld,
    TransformPseudoClass
  },
  data(){
    return{
      active:0
    }
  },
  methods:{
    change(ind){
      this.active = ind;
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
