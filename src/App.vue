<template>
  <div id="app">
    <router-view v-if="isRouterAlive"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  provide(){
    return{
      reload:this.reload,
    }
  },
  data(){
    return{
      isRouterAlive:true,
    }
  },
  methods:{
    reload(){
      this.isRouterAlive=false
      this.$nextTick(function(){
        this.isRouterAlive=true
      })
    },

  },
  
}
</script>

<style lang="scss">

*{
  margin:0;
  padding:0;
}
a{
  color:#000;
  &:hover{
    text-decoration: none;
  }
}
ul li{
  list-style: none;
}
#app {
  color: #2c3e50;
  background: #f3f3f3;
  min-height: 100%;
  width: 100%;
  position: absolute;
}
</style>
