<template>
  <div class="box">
    <div style="border-bottom:1px solid #eeeeee;">
    <div class="container logo-box">
      <span class="logo-img">换成logo</span> 
      <span  class="logo-signal">欢迎登录东昊网站</span>
      <span class="toIndex"><a href="#" @click="toIndex">回到首页</a></span>
    </div>
    </div>
    <div class="loginIpt">
      <div class="loginContent">
         <div style="background:#66FFFF;">
           <p style="padding-top:2rem;">在线下单方便快捷</P>
           <p>货物信息全程反馈</P>
         </div>
        <div style="background:#66FFCC;">
          <p style="padding-top:2rem;">系统制单差错率低</P>
           <p>账册核销经验丰富</P>
        </div>
        <div style="background:#66FF99;">
          <p style="padding-top:2rem;">关务人才服务完善</P>
           <p>人员稳定降低风险</P>
        </div>
        <div style="background:#66FF66;">
          <p style="padding-top:2rem;">合作车队实力雄厚</P>
          <p>快速送达无需担心</P>
        </div>
      </div>
      <div class="login">
        <div class="login-top">
            <span style="border-right:0.1rem solid #EEEEEE"><a href="#" ref="mylogin" @click="loging()" :style="{color:id===1?'#FF6600':'#000'}">登录</a></span>
            <span><a href="#" ref="myregist" @click="registing()" :style="{color:id===0?'#FF6600':'#000'}">注册</a></span>
        </div>
        <div  v-if="id===1">
          <div class="login-ipt">
            <i class="icon-user"></i>
            <input type="text" placeholder="用户名/邮箱/手机号" v-model="usertel">
          </div>
          <div class="login-ipt">
            <i class="icon-pwd"></i>
            <input type="password" placeholder="密码" v-model="userpwd">
          </div>
          <button class="submit" @click="loginSuccess">立即登录</button>
        </div>
        <div  v-else>
          <div class="login-ipt">
            <i class="icon-user"></i>
            <input type="text" placeholder="用户名/邮箱/手机号" v-model="usertel">
          </div>
          <div class="login-ipt">
            <i class="icon-pwd"></i>
            <input type="password" placeholder="密码" v-model="userpwd">
          </div>
          <div class="login-ipt">
            <i class="icon-pwd"></i>
            <input type="password" placeholder="确认密码" v-model="repeadpwd">
          </div>
          <button class="submit" @click="registSuccess">立即注册</button>
        </div>
      </div>
    </div>
    <div class="publish">
       <p style="margin-bottom:0.8rem;padding-top:0.8rem;">© 江苏东昊国际货运代理有限公司 　版权所有 Designed by anine</P>
       <p style="margin-bottom:0.5rem;">苏ICP备09011779号</P>
     </div>
  </div>
  
</template>

<script>

export default {
  name: 'login',
  data () {
    return {
      id:0, //1显示登录页面，0显示注册页面
      usertel:'',
      userpwd:'',
      repeadpwd:'' //将注册或登录信息发送到后台存入数据库的时候一并将信息存入localstorage
    }
  },
  created(){
    this.id=this.$route.params.id
  },
  mounted(){

  },
  methods:{
    toIndex:function(){
      this.$router.push({name:'index'})
    },
    loging:function(){
      this.id=1
    },
    registing:function(){
      this.id=0
    },
    registSuccess:function(){
      if(this.usertel.length===11&&this.userpwd.length>=6&&this.userpwd===this.repeadpwd){
        console.log(7)
        this.$router.push({name:'index'})
      }
    },
    loginSuccess:function(){
      if(this.usertel.length===11&&this.userpwd.length>=6){
        console.log(8)
        this.$router.push({name:'index'})
      }
    }
  }, 
}
</script>

<style lang="scss" scoped>
@mixin backimg{
  position: absolute;
  left:0.3rem;
  top:0.5rem;
  z-index:4;
  width: 1rem;
  height: 1rem;
}
@mixin clearfix() {
  &::after {
    display: block;
    content: "";
    clear: both;
  }
}
.box{
  width: 100%;
  height: 100%;
}
.logo-box{
  padding: 1%;
  .logo-signal{
    font-size:1.5rem;
    margin:2% 0 0 10%;
  }
  .toIndex{
    display: block;
    float: right;
    margin:1% 20% 0 0;
  }
  @media  (max-width:768px){
    .logo-box span{
      display: block;
    }
    .logo-img{
      margin: auto;
    }
     .logo-signal{
        font-size:1rem;
        text-align: center;
     }
     .toIndex{
       font-size: 0.1rem;
       margin-right: 10%;
     }
  }
}
.loginIpt{
  height:35rem;
  width: 40%;
  margin:5% auto;
  border:1px solid #bbbbbb;
  @include clearfix;
  .loginContent{
    height: 100%;
    width: 39%;
    float:left;
    border-right: 1px dashed #bbb;
    div{
      height:25%;
      p{
        text-align: center;
        color:#fff;
        padding-top:0.7rem;
      }
    }
  }
  .login{
    width:60%;
    float:right;
    height: 100%;
    .login-top{
      height: 10%;
      text-align: center;
      margin: 8% 0;
      span{
        display: inline-block;
        width: 49%;
        font-size: 1.6rem;
      }
    }
    .login-ipt{
      position: relative;
      left:10%;
      margin: 10% 0;
      .icon-user{
        @include backimg;
        background:url('../assets/user.png') 0px 0px no-repeat;
      }
      .icon-pwd{
        @include backimg;
        background:url('../assets/pwd.png') 0px 0px no-repeat;
      }
      input{
        width: 80%;
        height: 2.0rem;
        padding-left:2rem;
      }
    }
    .submit{
      width: 80%;
      height: 3rem;
      position: relative;
      left:10%;
      border: none;
      background: #FF6600;
      color:#fff;
    }
  }    
}
 @media screen and  (max-width:1024px){
   .loginIpt{
     width: 60%;
   }
 }
 @media screen and  (max-width:768px){
   .loginIpt{
     width: 80%;
     height: 20rem;
     margin-top: 20%;
     .loginContent p{
       font-size: 0.4rem;
     }
     .login-top span{
       float:left;
     }
     .login-top span a{
       font-size:1.4rem;
     }
     input::-webkit-input-placeholder {
        font-size: 0.3rem;
    }
   }
 }

.publish{
  width: 100%;
  position: absolute;
  bottom:0;
    height:8%;
    background: #888888;
    text-align: center;
    p{
      color:#EEE;
      font-size:0.9rem;
    }
  }
   @media screen and  (max-width:768px){
     .publish p{
       font-size: 0.2rem;
     }
   }
</style>
