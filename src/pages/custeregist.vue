<template>
  <div class="box">
    <div style="border-bottom:1px solid #eeeeee;">
      <div class="container logo-box">
        <span class="logo-img"><img src="../assets/weblogo.png"></span> 
        <span  class="logo-signal">欢迎登录东昊网站</span>
        <span class="toIndex"><a href="#" @click="toIndex">回到首页</a></span>
      </div>
    </div>
    <div class="userinfo">
      <div class="userdisplay">
        <div class="userinfo-box">
            <div>
              <span class="usericon"><img src="../assets/usericon.png"></span>
              <span class="username"><h2>客户姓名</h2></span>
            </div>
            <div>
              <h3>公&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;司</h3>
            </div>
            <div>
              <h3>职&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;级</h3>
            </div>
            <div>
              <h3>追踪状态</h3>
            </div>
            <div>
              <h3>接货验收</h3>
            </div>
          
        </div>
        <div class="userinfo-box">
            <div >
              <span class="userinfo-btn"><button :class="pages===1?'btn1':'btn2'" @click="changepages(1)">查货表单</button></span>
              <span class="userinfo-btn"><button :class="pages===2?'btn1':'btn2'" @click="changepages(2)">纠错入口</button></span>
            </div>
            <div>
               <input type="text" v-model="username">
            </div>
            <div>
               <input type="text" v-model="userpos">
            </div>
            <div>
               <input type="text" v-model="goodsinfo">
            </div>
            <div>
               <input type="text" v-model="acceptgoods">
            </div>
        </div>
      </div>
      <div class="orderdate">
        <input type="text" v-model="companyname">
      </div>
    </div>
   <Bottom style="position:fixed;bottom:0;"></Bottom>
  </div>
  
</template>

<script>
import crypto from 'crypto'
export default {
  name: 'custdetaillogin',
  data () {
    return {
      pages:1,
      username:'',
      userpos:'',
      goodsinfo:'',
      acceptgoods:'',
      companyname:'XX省XX市XX公司'
    }
  },
  created(){
  },
  mounted(){

  },
  methods:{
    toIndex:function(){
      this.$router.push({name:'index'})
    },
    changepages:function(e){
      var a=e
      if(a==1){
        this.pages=1
      } else{
        this.pages=2
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
.userinfo{
  width: 40%;
  height:27rem ;
  border:0.01rem solid #000;
  box-sizing: border-box;
  margin:5% auto;
  .userdisplay{
    display: flex;
    flex-direction: row;
  }
  .userinfo-box{
    display: inline-block;
    &:first-child{
      width: 35%;
      border-right:0.06rem dotted #000;
      box-sizing: border-box;
    } 
    &:last-child{
      width: 65%;
    }
    div{
      &:nth-child(even){
        background: rgba(182, 181, 181, 0.774);
      }
      &:nth-child(odd){
        background: rgba(228, 226, 226, 0.774);
      }
      height: 4rem;
      &:first-child{
        height: 7rem;
        background: rgb(238, 238, 238);
      }
      .usericon{
        display: inline-block;
        width: 30%;
        height: 5rem;
        margin: 1rem 4%;
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .username{
        display: inline-block;
        width: 60%;
        color:rgb(8, 8, 112);
        font-weight: 600;
      }
      h3{
        text-align: center;
        line-height: 4rem;
        color:rgb(20, 20, 20);
      }
      .userinfo-btn{
        display: inline-block;
        width: 49.5%;
        button{
          width: 60%;
          height: 2.5rem;
          margin:2rem 3rem;
          border:none;
          &:hover{
            background: rgb(235, 133, 50);
            cursor: pointer;
          }
        }
        .btn1{
          background: rgb(231, 117, 24);
          border:1px solid rgba(46, 46, 46, 0.185);
        }
        .btn2{
          background: rgb(220, 220, 220);
          border:1px solid rgba(46, 46, 46, 0.185);
        }
      }
    }
  }
  .orderdate{
    background: rgba(182, 181, 181, 0.774);
    width: 100%;
    height: 4rem;
  }
  input{
    width:100%;
    height: 100%;
    border:none;
    background: none;
    text-align:center;
    &:last-child{
      text-align:right;
    }
  }
}
@media (max-width:1024px) and (min-width:768px) {
  .userinfo{
    width:80%;
    margin-top:15%;
    .userinfo-box{
      div{
        .usericon{
          width: 25%;
        }
        .userinfo-btn{
          width: 49%;
        }
        h3{
          font-size: 1.4rem;
        }
        .username{
         h2{
            font-size: 1.7rem;
         }
        }
      }
    }
  }
}
@media (max-width:768px){
  .userinfo{
    width:90%;
    height: 19rem;
    margin-top:15%;
    .userinfo-box{
      div{
        height: 3rem;
        &:first-child{
          height: 4rem;
        }
        .usericon{
            width: 40%;
            margin:2% 5%;
            img{
              width: 70%;
              height: 70%;
            }
        }
        .userinfo-btn{
          width: 49%;
        }
        h3{
          font-size: 0.2rem;
          line-height: 3rem;
        }
        .username{
           width: 44%;
           margin-left:-6%;
         h2{
            font-size: 0.6rem;
            
         }
        }
        .userinfo-btn{
          button{
            width: 80%;
            height: 2rem;
            margin:1rem;
            font-size: 0.8rem;
          }
        }
      }
    }
     .orderdate{
        height: 3rem;
        font-size: 0.3rem;
      }
  }
}
</style>
