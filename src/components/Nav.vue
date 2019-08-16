<template>
  <div>
    <!--搜索栏 -->
    <div class="logo-box">
      <div class="logo-container">
      <span class="logo-img">你好，欢迎来到东昊国际！</span>
     
      <span class="logo-user" style="display:inline-block;">
        <span class="logo-tel"><img src="../assets/tel.png">&nbsp;&nbsp;0512-62959147</span>
    
        <span class="logo-regist" v-if="islogin===false"><a href="#" @click="tologin(1)">登录</a>/<a href="#" @click="tologin(0)">注册</a></span>
        <span class="logo-regist" v-else><a href="#">个人中心</a></span>
      </span>
      </div>
    </div>
     <!--导航栏 -->
    <div class="nav-box">
      <div style="position: relative;">
        <span class="nav-logo"></span>
        <ul class="row">
          <li :class="pages===1?'nav-title1':'nav-title2'" @click="toNav(1)">首页</li>
          <li :class="pages===2?'nav-title1':'nav-title2'">工具箱
            <ul class="row" style="z-index:999;">
              <router-link :to="{ path: '/hsCode' ,query:{pageid:1}}"><li style="width:16.6%;">HS编码模糊查询</li></router-link>
              <router-link :to="{ path: '/hsCode' ,query:{pageid:2}}"><li style="width:16.6%;">申报要素查询</li></router-link>
              <router-link :to="{ path: '/hsCode' ,query:{pageid:3}}"><li style="width:16.6%;">通关税率查询</li></router-link>
              <router-link :to="{ path: '/hsCode' ,query:{pageid:4}}"><li style="width:16.6%;">海关最新政策查询</li></router-link>
              <router-link :to="{ path: '/hsCode' ,query:{pageid:5}}"><li style="width:16.6%;">通关状态查询</li></router-link>
              <router-link :to="{ path: '/hsCode' ,query:{pageid:6}}"><li style="width:17%;">企业信息查询</li></router-link>
            </ul>
          </li>
          <li :class="pages===3?'nav-title1':'nav-title2'">主营业务
            <ul class="row" style="z-index:999;">
              <li>订舱</li>
              <li>报关</li>
              <li>运输</li>
              <li>仓储</li>
             <li>证件办理</li>
              <li>保税业务</li>
              <li>关务方案定制</li>
              <li>账册核销代理</li>
            </ul>
          </li>
          <li :class="pages===4?'nav-title1':'nav-title2'" @click="toNav(4)">在线下单</li>
          <li :class="pages===5?'nav-title1':'nav-title2'" @click="toNav(5)">货物追踪</li>
          <li :class="pages===6?'nav-title1':'nav-title2'" @click="toNav(6)">关于东昊</li>
        </ul>
       </div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    currentpage:{
      type:Number
    }
  },
    data() {
        return{
          select:'',  //搜索框里输入的内容
          islogin:false,//false未登录，true已登录
          pages:this.currentpage,
        }
    },
    methods:{
      tologin:function(e){
        var a =e; //a=1为登录，a=0为注册
        this.$router.push({name:'login',params:{id:a}})
      },
      toNav:function(e){
        this.pages=e
        if(e==1){
          this.$router.push({name:'index'})
        } else if(e==4){
          this.$router.push({name:'purchase'})
        }else if(e==5){
          this.$router.push({name:'goods'})
        }else if(e==6){
          this.$router.push({name:'abouts'})
        }
      },
    },
    created(){
    
    },
    mounted() {  
    
  } ,
  watch:{
    
  }
  
}
</script>
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
  width: 100%;
  padding: 0.4% 0;
  background: #3d3d3d;
  color:rgb(184, 184, 184);
  .logo-container{
    width: 70%;
    margin:auto;
     .logo-img{
        padding-left:2%;
      }
    .logo-user{
      width: 30%;
      text-align: center;
      float:right;
      .logo-tel{
        padding-right:20%;
      }
      .logo-regist a{
        color:rgb(184, 184, 184);
      }
   }
    @media  (max-width:1024px){
      .logo-user{
          width: 50%;
          .logo-tel img{
            width: 15px;
          }
        }
    }
    @media  (max-width:768px){
      .logo-img{
        font-size:0.01%;
      }
      .logo-user{
        width: 50%;
        .logo-tel{
          font-size:0.1%;
          padding-right:0;
          img{
            width: 15px;
          }
        }
        .logo-regist{
          font-size:0.1%;
        }
      }
    } 
  }
  @media  (max-width:1024px){
    .logo-container{
        width: 100%;
    }
  }
}
// 导航栏
.nav-box{
  height: 6rem;
  background: #fff;
  &>div{
    width: 70%;
    margin: auto;
    .nav-logo{
      display: inline-block;
      width: 20%;
    }
    ul{
      float:right;
      width: 80%;
      padding-left:5%;
      margin-bottom: 0;
    }
    li{
      width:16.6%; 
      text-align: center;
      line-height: 6rem;
      color: #000;
      &:hover{
        color: rgb(30, 133, 243);
        cursor: pointer;
      }
      &:hover ul{
        display: block;
      }
      ul{
        width: 100%;
        position: absolute;
        top:6rem;
        left:15px;
        right:15px;
        bottom:0;
        background: #FFF;
        border:1px solid #3B99FC;
        height: 5rem;
        display: none;
        padding:0;
         li{
          text-align: center;
          line-height: 5rem;
          float:left;
          border-right:1px solid #eee;
          color:#000;
          width: 12.5%;
          &:hover{
            background: #fff;
            border-bottom:1px solid #3B99FC;
          }
        }
      }
    }
    .nav-title1{
        color:rgb(30, 133, 243);
      }
      .nav-title2{
        color:#000;
      }
  }

}
@media  (max-width:768px){
  .nav-box{
    height:2rem;
    font-size: 0.01%;
    &>div{
      width:100%;
      ul{
        padding:0;
      }
      li{
        line-height:2rem;
        ul{
          height: 3rem;
          position: absolute;
          top:2rem;
          li{
            line-height: 1.4rem;
            font-size:0.01rem;
            word-wrap: break-word; 
            word-break: normal; 
          }
        }
      }
    }
  }
}
@media  (max-width:1024px) and (min-width:768px){
  .nav-box{
    height:3rem;
    &>div{
      width:100%;
      ul{
        padding:0;
        li{
        line-height:3rem;  
        font-size:0.01rem;
        ul{
          position: absolute;
          top:3rem;
          height: 3rem;
          li{
            line-height: 3rem;
          }
         }
        }
      }
      
    }
  }
}

</style>
