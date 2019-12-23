
<!--货物追踪界面-->
<template>
  <div class="box">
    <Nav :currentpage="5"></Nav>
    <!-- <div class="goods-img"><img src="../assets/1.jpg"></div> -->
    <div class="goods-ipt">
      <input type="text" placeholder="请输入要查询的单号">
    </div>
    <div class="map">
      <div v-for="(item,index) in data" :key="index">
        <span class="circle"></span>
        <span>{{item.date}}</span>
        <span>{{item.time}}</span>
        <span>你的包裹当前在{{item.pos}}</span>
      </div>
    </div>

  </div>
</template>
<script>
 
  export default {
    name: "goods",
    
    data() {
      return {
       data:[
         {date:"2010-2-3",time:'10:23',pos:"北京"},
         {date:"2010-2-4",time:'10:23',pos:"上海"},
         {date:"2010-2-7",time:'10:23',pos:"田径"}
       ]
      };
    },
    mounted() {
    },
    methods: {
      
    }
  }
</script>
<style lang="scss" scoped>
.goods-ipt{
  margin:12% 0 2% 0;
  width: 100%;
  text-align: center;
  input{
    display: block;
    margin: auto;
    width: 25%;
    height:2rem;
    text-align: center;
  }
}
@media  (max-width:1024px){
  .goods-ipt{
    margin:20% 0 2% 0;
    input{
        width:35%;
      
      }
  }
}
@media  (max-width:767px){
    .goods-ipt{
      margin:30% 0 2% 0;
      input{
        width:50%;
        font-size:0.1rem;
        height:1.3rem;
      }
    }
}
.map{
  width: 60%;
  margin: 0 auto 7rem;
 div{
   margin: 2% auto;
   text-align: center;
 }
 span{
  display:inline-block;
  margin-right: 5%;
 }
 .circle{
   width: 0.5rem;
   height: 0.5rem;
   background: #000;
   border-radius: 50%;
   margin-right:2%;
 }
}
@media  (max-width:1024px){
  .map{
    width: 80%;
    margin-top:3rem;
  }
}
@media  (max-width:767px){
  .map{
    width: 80%;
    font-size:0.1rem;
    .circle{
       width: 0.3rem;
       height: 0.3rem;
    }
  }
}
</style>