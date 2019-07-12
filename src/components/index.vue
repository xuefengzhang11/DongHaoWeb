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
  <div class="container">
    <span class="a"><a href="#">谷歌真</a></span>
    <span class="a"><a href="#">谷歌真</a></span>
    <span class="a"><a href="#">谷歌真</a></span>
    <span class="a"><a href="#">谷歌真</a></span>
    <span class="a"><a href="#">谷歌真</a></span>
  </div>
  </div>
  
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      name:'',
      sex:'',
      data:[]
    }
  },
  methods:{
    submit(){
      this.$get(this.url.test)
      .then((response) => {
        this.data=response
        for(var i=0;i<this.data.length;i++){
          console.log(this.data[i].name)
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style style="scss" scoped>
.container{
display:flex;
flex-wrap:nowrap;
justify-content: space-between;

}

</style>
