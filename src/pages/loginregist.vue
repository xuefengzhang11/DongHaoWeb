<template>
  <div class="box">
    <div style="border-bottom:1px solid #eeeeee;">
    <div class="container logo-box">
      <span class="logo-img"><img src="../assets/weblogo.png"></span> 
      <span  class="logo-signal">欢迎登录东昊网站</span>
      <span class="toIndex"><a href="#" @click="toIndex">回到首页</a></span>
    </div>
    </div>
    <div class="loginIpt">
      <div class="login">
        <div class="login-top">
            <span style="border-right:0.1rem solid #EEEEEE"><a href="#" @click="loging(1)" :style="{color:id===1?'#FF6600':'#000'}">登录</a></span>
            <span><a href="#" @click="loging(2)" :style="{color:(id===0||id==2||id==3||id==4||id==5)?'#FF6600':'#000'}">注册</a>
                <ul>
                  <li @click="loging(2)">客户注册</li>
                  <li @click="loging(3)">供应商注册</li>
                  <li @click="loging(4)">员工注册</li>
                  <li @click="loging(5)">新人注册</li>
                </ul>
            </span>
        </div>
        <div  v-if="id===1">
          <div class="login-ipt">
            <i class="icon-user"></i>
            <input type="text" placeholder="邮箱/手机号" v-model="usertel">
            <p v-if="errorprompt==1">手机号输入/格式错误</p>
          </div>
          <div class="login-ipt">
            <i class="icon-pwd"></i>
            <input type="password" placeholder="密码" v-model="userpwd">
            <p v-if="errorprompt==2">密码输入错误</p>
          </div>
          <div class="login-code">
            <input type="text" placeholder="验证码" v-model="iptcode">
            <span><a href="#" @click="checkCode">换一个？</a>
              <span class="codeshow">
              {{checkcode}}
            </span>
            </span>
            <p v-if="errorprompt==3">验证码输入错误</p>
          </div>
          <button class="submit" @click="loginSuccess(1)">立即登录</button>
        </div>
        <div  v-if="id===0">
          <div class="selectregist" @click="loging(2)"><h3>客户注册</h3></div>
          <div class="selectregist" @click="loging(3)"><h3>供应商注册</h3></div>
          <div class="selectregist" @click="loging(4)"><h3>员工注册</h3></div>
          <div class="selectregist" @click="loging(5)"><h3>新人注册</h3></div>
        </div>
        <div  v-if="id===2||id==5||id==3||id==4">
          <div class="login-ipt ipt1" v-if="id==2">
            <i class="icon-user"></i>
            <input type="text" placeholder="姓名">
          </div>
          <div class="login-ipt ipt1">
            <i class="icon-user"></i>
            <input type="text" placeholder="邮箱/手机号" v-model="usertel">
          </div>
          <div class="login-ipt ipt1">
            <i class="icon-pwd"></i>
            <input type="password" placeholder="密码" v-model="userpwd">
          </div>
          <div class="login-ipt ipt1">
            <i class="icon-pwd"></i>
            <input type="password" placeholder="确认密码" v-model="repeadpwd">
          </div>
          <div class="login-ipt ipt1"  v-if="id==3">
            <i class="icon-pwd"></i>
            <input type="text" placeholder="公司名称">
          </div>
          <div class="login-code" style="margin:0;" v-if="id==3">
             <upload @fileChange="fileChange" >
             </upload>
          </div>
          <button class="submit" @click="loginSuccess(2)">立即注册</button>
        </div>
      </div>
    </div>
   <Bottom style="position:fixed;bottom:0;"></Bottom>
  </div>
  
</template>

<script>
import upload from './upload'
import crypto from 'crypto'
export default {
  name: 'customerlogin',
  components:{
    'upload':upload
  },
  data () {
    return {
      id:1, //1显示登录页面,2客户注册，3供应商注册，4员工注册，5新人注册
      usertel:'',
      userpwd:'',
      repeadpwd:'', //将注册或登录信息发送到后台存入数据库的时候一并将信息存入localstorage
      checkcode:'',//验证码
      iptcode:'',//用户输入的验证码
      errorprompt:0,//错误提示,1手机号错误，2密码错误，3验证码错误
      img:''
    }
  },
  created(){
  },
  mounted(){
    this.checkCode()
  },
  methods:{
    // 随机数组合验证码
    checkCode:function() {
      let code = "";
      let codeLength = 4; //验证码的长度  
      let random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'); //随机数  
      for(let i = 0; i < codeLength; i++) { //循环操作  
        let index = Math.floor(Math.random() * 62); //取得随机数的索引（0~35）  
        code += random[index]; //根据索引取得随机数加到code上  
      }
      this.checkcode = code; //把code值赋给验证码  
	 },
    toIndex:function(){
      this.$router.push({name:'index'})
    },
    loging:function(e){
        this.id=e
    },
    toMD5:function(pwd){
       //将密码用ASCII编码
      var usernameMi=''
      for(var i=pwd.length-1;i>=0;i--){
        var str = pwd.charAt(i);
        var code = str.charCodeAt();
        usernameMi+=code;
      }
      //将编码后的密码用md5的hash算法加密
      var newpwd;
      var md5 = crypto.createHash("md5");
      md5.update(usernameMi);
      var newpwd = md5.digest('hex');
      return newpwd
    },
    loginSuccess:function(e){
      if(this.usertel.length!=11){
        this.errorprompt=1 
     } else if(this.userpwd.length<6){
       this.errorprompt=2
     } else if(this.iptcode!=this.checkcode){
       this.errorprompt=3
     } else{
        var a=this.toMD5(this.userpwd)
        this.$router.push({name:'custeregist'})
     }
    },
    fileChange(file) {
    // 因为file是个FormData格式的对象所以可以直接通过接口开始上传，不需要做多余操作
       // this.img = this.HTTP + res.data.datas
    console.log(file)
    }
  }

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
  span{
    display: inline-block;
    width: 33%;
  }
  .logo-signal{
    font-size:2rem;
    margin:2% 0 0 2%;
    color:rgb(8, 8, 112);
  }
  .logo-img{
    width: 10%;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  .toIndex{
    display: block;
    float: right;
    margin:3% -5% 0 0;
  }

  @media  (max-width:768px){
      .logo-box span{
        display: block;
      }
      .logo-signal{
          font-size:1rem;
          text-align: center;
      }
      .toIndex{
        font-size: 0.1rem;
        margin-right: -10%;
      }
    }
    @media  (max-width:767px){
      .logo-img{
        width: 20%;
      }
      .logo-signal{
          font-size:0.1rem;
      }
    }
}
.loginIpt{
  width: 30%;
  margin:3% auto 7%;
  border:1px solid #bbbbbb;
  background: #fff;
  p{
    color:rgb(250, 17, 17);
  }
  @include clearfix;
  .login{
    width:80%;
    // float:right;
    margin:auto;
    height: 100%;
    .login-top{
      height: 10%;
      text-align: center;
      margin: 8% 0;
      span{
        display: inline-block;
        width: 49%;
        font-size: 1.6rem;
        &:last-child{
          position: relative;
          ul{
            position: absolute;
            left:20%;
            margin-top:1%;
            z-index:9;
            width: 60%;
            background: rgb(235, 235, 235);
            display: none;
            li{
              line-height: 3rem;
              font-size: 1.2rem;
              &:hover{
                cursor: pointer;
                background: #bbb;
                color:#fff;
              }
            }
          }
          &:hover ul{
            display: block;
          }
        }
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
    .ipt1{
        margin:8% 0;
    } 
    .login-code{
      position: relative;
      left:10%;
      margin: 10% 0;
      input{
        padding-left: 1rem;
        height: 2.0rem;
        width: 35%;
      }
      span{
        .codeshow{
          display: inline-block;
          width: 20%;
          background: #bbb;
        text-align: center;
        line-height: 2rem;
        color:#fff;
        }
      }
    }
    .submit{
      width: 80%;
      height: 3rem;
      position: relative;
      left:10%;
      margin-bottom:10%;
      border: none;
      background: #FF6600;
      color:#fff;
    }
  }   
}
 @media  (max-width:1024px) and (min-width:768px){
   .loginIpt{
     width: 70%;
     height: 30rem;
     margin-top:10%;
    .login-top span a{
       font-size:1rem;
     }
   }
 }
 @media (max-width:767px){
   .loginIpt{
     width: 90%;
     height: 20rem;
     margin-top: 20%;
     .loginContent{
       div{
         line-height: 1.5rem;
       }
      p{
        font-size: 0.4rem;
      }
     }
     .login-top span{
       float:left;
     }
     .login-top span a{
       font-size:0.8rem;
     }
     input::-webkit-input-placeholder {
        font-size: 0.3rem;
    }
    .login-code span a{
      font-size: 0.4rem;
    }
    .login-code input{
      line-height: 1.5rem;
      padding-left:0;
    }
    .login-code .codeshow{
      line-height: 1.5rem;
    }
    .login .submit{
       height: 2rem;
       font-size:0.2rem;
     }
     .login .login-ipt input{
       height: 1.8rem;
        padding-left:1.5rem;
     }
   }
 }

</style>
