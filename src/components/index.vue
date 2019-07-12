<template>
  <div class="hello">
   <label for="username">用户名：<input type="text" placeholder="请输入用户名" v-model="name" id="username"></label><br>
   <label>性别：</label>
     <input type="radio" value='男' v-model="sex">男
     <input type="radio" value='女' v-model="sex">女
     {{sex}}
    <br>
     <button @click="submit()">提交</button>
     <br>
     
  </div>
  
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      name:'',
      sex:''
    }
  },
  methods:{
    submit(){
      this.$get('10.10.10.72/api/test')
      .then((response) => {
        console.log(response)
        console.log(444)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
