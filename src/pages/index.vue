<template>
  <div class="box">
     <!--搜索栏 -->
    <div class="container logo-box">
      <span class="logo-img" style="display:inline-block;">东昊国际</span>
      <span class="logo-select">
        <input type="text" placeholder="请输入港口信息" v-model="select" class="select-content"> 
        <button class="select-icon"><img src="../assets/select.png" alt="搜索"></button>
      </span>
    </div>
     <!--导航栏 -->
    <div class="nav-box">
      <div style="width:80%;margin:auto;">
        <ul class="row position-relative">
          <li class="nav-title1"><a href="">网站首页</a></li>
          <li class="nav-title1"><a href="">主营业务</a>
            <ul class="row d-sm-none d-xs-none" style="z-index:999;">
              <li><a href="">国际海运</a></li>
              <li><a href="">国际空运</a></li>
              <li><a href="">专业报关</a></li>
              <li><a href="">大件运输</a></li>
              <li><a href="">保税业务</a></li>
              <li><a href="">外贸代理</a></li>
              <li><a href="">内贸运输</a></li>
            </ul>
          </li>
          <li class="nav-title1"><a href="">公共信息查询</a></li>
          <li class="nav-title1"><a href="">行业动态</a></li>
          <li class="nav-title1"><a href="">关于东昊</a></li>
          <li class="nav-title1"><a href="">联系我们</a></li>
        </ul>
       </div>
    </div>
     <!--轮播图 -->
   <div class="casual"><casual></casual></div>
    <!--底部 -->
   <div class="footer">
     <!--友情链接 -->
     <div class="href">
      
     </div>
      <!--版权 -->
     <div class="publish">
       <p style="margin-bottom:0.8rem;padding-top:0.8rem;">© 江苏东昊国际货运代理有限公司 　版权所有 Designed by anine</P>
       <p style="margin-bottom:0.5rem;">苏ICP备09011779号</P>
     </div>
   </div>
  </div>
  
</template>

<script>
import casual from '../components/casual'
export default {
  components:{casual},
  name: 'index',
  data () {
    return {
      select:'',
    }
  },
  methods:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@mixin clearfix() {
  &::after {
    display: block;
    content: "";
    clear: both;
  }
}
@mixin select-ipt{
    width: 50%;
    padding-left: 1rem;
    font-size:0.8rem;
    box-sizing:border-box;
}
//搜索栏
.logo-box{
  padding: 1%;
  .logo-img{
    width: 35%;
  }
  .logo-select{
    width: 65%;
    .select-content{
      @include select-ipt;
      height:2rem;
    }
    .select-icon{
      background: #3B99FC;
      display:inline-block;
      height:2.1rem;
      width:2.1rem;
      border: none;
      margin:0.1rem 0 0 -0.3rem;
    }
    @media (max-width:768px){
      .select-content{
        height:1.3rem;
        @include select-ipt;
      }
      .select-icon{
        background: #3B99FC;
        height:1.3rem;
        width:1.3rem;
        border: none;
      }
    }
  }
}
// 导航栏
.nav-box{
  height: 2.5rem;
  background: #3B99FC;
  .nav-title1{
    width:16.6%; 
    text-align: center;
    line-height: 2.5rem;
    ul{
      position: absolute;
      top:2.5rem;
      left:15px;
      right:15px;
      bottom:0;
      background: #FFF;
      border:1px solid #3B99FC;
      height: 5rem;
      display: none;
    }
    ul li{
      width:14.2%; 
      text-align: center;
      line-height: 5rem;
      float:left;
      &:hover{
       
      }
    }
    &:hover{
      background: rgb(11, 121, 238);
    }
  &:hover ul{
      display: block;
   }
  }
  .nav-title1>a{
    color:#fff;
  }

}
@media  (max-width:768px){
  .nav-box{
    height: 1.5rem;
    font-size:1%;
    .nav-title1{
      line-height:1.5rem;
    }
  }
}
//轮播图
.casual{
  width: 100%;
  height:30%;
}
//底部
.footer{
  width: 100%;
  height: 20%;
  background: #EEEEEE;
  position: absolute;
  bottom:0;
  .href{
    height:60%;
  }
  .publish{
    height:40%;
    background: #888888;
    text-align: center;
    p{
      color:#EEE;
      font-size:0.9rem;
    }
  }
}
</style>
