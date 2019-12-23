<template>
  <div style="position:fixed;top:0px;z-index:999;width:100%">
    <!--搜索栏 -->
    <div class="logo-box">
      <div class="logo-container">
      <span class="logo-img">{{ $t('menu.welcome')}}</span>
      <span class="logo-user" style="display:inline-block;">
        <span class="logo-tel">
          <span @click="changeLaguages()" style="color:rgb(102, 56, 228);">{{ $t('menu.change')}}</span>
        </span>
        <span class="logo-regist" v-if="islogin===false"><a href="#" @click="tologin()">{{ $t('menu.login')}}</a></span>
        <span class="logo-regist" v-else><a href="#">退出</a></span>
      </span>
      </div>
    </div>
     <!--导航栏 -->
    <div class="nav-box">
      <div style="position: relative;">
        <span class="nav-logo"><img src="../assets/weblogo.png"></span>
        <ul class="row">
          <li :class="pages===1?'nav-title1':'nav-title2'" @click="toNav(1)">{{ $t('menu.home')}}</li>
          <li :class="pages===3?'nav-title1':'nav-title2'" @click="toNav(3)">{{ $t('menu.mainbussiness')}}</li>
          <li :class="pages===5?'nav-title1':'nav-title2'" @click="toNav(5)">{{ $t('menu.goodstrace')}}</li>
          <li :class="pages===6?'nav-title1':'nav-title2'" @click="toNav(6)">{{ $t('menu.abouts')}}</li>
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
  inject:['reload'],
    data() {
        return{
          select:'',  //搜索框里输入的内容
          islogin:false,//false未登录，true已登录
          pages:this.currentpage,
          countryid:'' //选择的国家语言
        }
    },
    methods:{
      tologin:function(){
        this.$router.push({name:'loginregist'})
      },
      toNav:function(e){
        this.pages=e
        if(e==1){
          this.$router.push({name:'index'})
        }else if(e==5){
          this.$router.push({name:'goods'})
        }else if(e==6){
          this.$router.push({name:'abouts'})
        }else if(e==2){
          this.$router.push({name:'hscode'})
        }else if(e==3){
          this.$router.push({name:'mainBussiness'})
        }
      },
      toPageid:function(){
        this.reload()
      },
      changeLaguages:function(){
        this.$router.push({name:'changelanguage'})
      }
    },
    created(){
      
    },
    mounted() {  
       if(this.$route.params.countryid=='美国'){
        this.$i18n.locale='en'
      } else if (this.$route.params.countryid=='中国'){
        this.$i18n.locale='ch'
      }
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
        span{
          &:hover{
            cursor: pointer;
          }
        }
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
  height: 8rem;
  // background: #E58221;
  background: #fff;
  &>div{
    width: 70%;
    margin: auto;
    .nav-logo{
      display: inline-block;
      width: 10%;
      margin:1rem 4rem;
      img{
        width: 100%;
        height: 100%;
        object-fit:cover;
      }
    }
    ul{
      float:right;
      width: 80%;
      padding-left:5%;
      margin-bottom: 0;
    }
    li{
      width:20%; 
      text-align: center;
      line-height: 8rem;
      &:hover{
        color: rgb(30, 133, 243);
        cursor: pointer;
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
@media  (max-width:767px){
  .nav-box{
    height:4rem;
    font-size: 0.01%;
    &>div{
      width:100%;
      .nav-logo{
      margin:1rem 2rem;
    }
      ul{
        padding:0;
      }
      li{
        line-height:4rem;
        ul{
          height: 1.8rem;
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
@media (max-width:1024px) and (min-width:768px){
  .nav-box{
    height:6rem;
    &>div{
      .nav-logo{
      margin:1.5rem 1rem;
    }
      ul{
        padding:0;
        li{
        line-height:6rem;  
        font-size:0.01rem;
        ul{
          position: absolute;
          top:3rem;
          li{
            line-height: 2rem;
            font-size:0.01rem;
          }
         }
        }
      }
      
    }
  }
}

</style>
