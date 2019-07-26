<template>
  <div class="box ">
     <!--搜索栏 -->
    <div class="container logo-box">
      <span class="logo-img" style="display:inline-block;"><span>东昊国际</span></span>
      <span class="logo-select">
        <input type="text" placeholder="请输入港口信息" v-model="select" class="select-content"> 
        <button class="select-icon"><img src="../assets/select.png" alt="搜索"></button>
      </span>
      <span class="logo-user" style="display:inline-block;">
        <span v-if="islogin===false"><a href="#" @click="tologin(1)">登录</a>/<a href="#" @click="tologin(0)">注册</a></span>
        <span v-else><a href="#">个人中心</a></span>
      </span>
    </div>
     <!--导航栏 -->
    <div class="nav-box">
      <div style="width:80%;margin:auto;">
        <ul class="row position-relative">
          <li class="nav-title1" :style="{background:pages===1?'rgb(11, 121, 238)':'#3B99FC'}"><a href="#" >首页</a></li>
          <li class="nav-title1"><a href="">工具箱</a></li>
          <li class="nav-title1"><a href="">主营业务</a>
            <ul class="row" style="z-index:999;">
              <li><a href="">订舱</a></li>
              <li><a href="">报关</a></li>
              <li><a href="">运输</a></li>
              <li><a href="">仓储</a></li>
              <li><a href="">证件办理</a></li>
              <li><a href="">保税业务</a></li>
              <li><a href="">关务方案定制</a></li>
              <li><a href="">账册核销代理</a></li>
            </ul>
          </li>
          <li class="nav-title1"><a href="">在线下单</a></li>
          <li class="nav-title1"><a href="">货物追踪</a></li>
          <li class="nav-title1"><a href="">关于东昊</a></li>
        </ul>
       </div>
    </div>
     <!--轮播图 -->
   <div class="casual"><casual></casual></div>
   <!-- 公司的证书-->
    <div class="container">
        <div class="wrap">
          <ul id="list">
            <li><img src="../assets/credent1.jpg"/></li>
            <li><img src="../assets/credent2.jpg"/></li>
            <li><img src="../assets/credent3.jpg"/></li>
            <li><img src="../assets/credent4.jpg"/></li>
            <li><img src="../assets/credent5.jpg"/></li>
            <li><img src="../assets/credent6.jpg"/></li>
            <li><img src="../assets/credent7.jpg"/></li>
           </ul>
        </div>
    </div>
    <!--底部 -->
   <div class="footer">
     <!--友情链接 -->
     <div class="href container">
       <p>友情链接</p>
       <div class="href-box">
          <span><a href="https://www.oocl.com/schi/Pages/default.aspx"><img src="../assets/friend1.jpg" /></a></span>
          <span><a href="https://www.kline.com/"><img src="../assets/friend2.jpg" /></a></span>
          <span><a href="https://www.rclgroup.com/"><img src="../assets/friend3.jpg" /></a></span>
          <span><a href="http://www.apl.com/"><img src="../assets/friend4.jpg" /></a></span>
          <span><a href="http://www.csav.com/special-services/en/Pages/Home.aspx"><img src="../assets/friend5.jpg" /></a></span>
          <span><a href="https://www.hapag-lloyd.com/en/home.html"><img src="../assets/friend6.jpg" /></a></span>
       </div>
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
      select:'',  //搜索框里输入的内容
      islogin:false,//false未登录，true已登录
      pages:1,// 当前在首页为1
    }
  },
  methods:{
    tologin:function(e){
      var a =e;
      this.$router.push({name:'aa',params:{id:a}})
    }
  },
  watch: {
},
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
    width:40%;
    padding-left: 1rem;
    font-size:0.8rem;
    box-sizing:border-box;
}
//搜索栏
.logo-box{
  padding: 1%;
  .logo-img{
    width: 30%;
  }
  @media (max-width:768px){
    .logo-img{
      width: 20%;
    }
      .logo-img>span{
        display: none;
      }
    }
  .logo-select{
    width: 48%;
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
  .logo-user{
    width: 20%;
    text-align: center;
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
      width:12.5%; 
      text-align: center;
      line-height: 5rem;
      float:left;
      border-right:1px solid #eee;
    }
    &:hover{
      background: rgb(30, 133, 243);
      cursor: pointer;
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
      ul{
        margin-top: -4%;
        height:2rem;
        li{
          line-height:1.5rem;
          font-size: 0.3%;
        }
      }
    }
  }
}
//轮播图
.casual{
  width: 100%;
  height:30%;
}
//公司证书
.wrap{
    width: 100%;
    height: 10rem;
    position: relative; 
    overflow: hidden;
    
    #list{
        position: absolute;
        left: 0; 
        top: 0; 
        margin: 0; 
        padding: 0;    
        -webkit-animation:move 6s linear 0s infinite; 
        width:200%; 
        
        li {
            list-style: none; 
            width:10%; 
            height: 10rem;
            border: 1px solid #000; 
            background: #fff; 
            color: #fff; 
            text-align: center;
            float: left;
            margin-left: 0.1%;
            img{
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
        }
    }
    @-webkit-keyframes move{
    from {
          left: 0;
    }
    to {
          left:-100%;
    }
  }
  @keyframes move {
    from {
       left: 0;
    }
    to{
       left: -100%;
    }
  }
  &:hover #list {
    -webkit-animation-play-state: paused; /*动画暂停播放*/
  }
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
    p{
      padding:0.5rem 0;
    }
    .href-box{
      margin-top: -0.2rem;
      width:100%;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content:space-between;
    }
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
