<template>
  <div class="box">
    <Nav :currentpage="1"></Nav>
     <!--轮播图 -->
   <div class="casual"><casual></casual></div>
   <h2>主营业务</h2>
   <h5>Main Bussiness</h5>
   
   <div class="container content">
    <div class="row">
      <div class=" con-intro">
        
      </div>
      <div class="con-intro">

      </div>
      <div class="con-intro">

      </div>
  
      <!-- <div class="col-lg-3 col-md-4 col-sm-6 col-xs-6">
        <div class="content-img">
          <router-link :to="{ name: 'login' }">
            <img src="../assets/user.png"/>
          </router-link>
        </div>
        <div class="content-signal">
          <h5>订舱</h5>
          <p>报关报关报关报关报关报关报关报关报关报关报关报关报关报关报关
          </p>
        </div>
      </div> -->
    </div>
   </div>
   <!-- 企业文化图片以及文字 -->
   <div class="company-culture">
     企业文化
   </div>
   <h2>工具箱</h2>
   <h5>Tool case</h5>
   <div class="container content">
    <div class="row">
      <div class="col-md-4 col-sm-6 col-xs-6 tool-img">
          <router-link :to="{ name: 'login' }">
            <img src="../assets/user.png"/>
          </router-link>
      </div>
      <div class="col-md-4 col-sm-6 col-xs-6">
          <router-link :to="{ name: 'login' }">
            <img src="../assets/user.png"/>
          </router-link>
      </div>
      <div class="col-md-4 col-sm-6 col-xs-6">
          <router-link :to="{ name: 'login' }">
            <img src="../assets/user.png"/>
          </router-link>
      </div>
      <div class="col-md-4 col-sm-6 col-xs-6">
          <router-link :to="{ name: 'login' }">
            <img src="../assets/user.png"/>
          </router-link>
      </div>
      <div class="col-md-4 col-sm-6 col-xs-6">
          <router-link :to="{ name: 'login' }">
            <img src="../assets/user.png"/>
          </router-link>
      </div>
      <div class="col-md-4 col-sm-6 col-xs-6">
          <router-link :to="{ name: 'login' }">
            <img src="../assets/user.png"/>
          </router-link>
      </div>
    </div>
   </div>
    <!--底部 -->
   <div class="footer">
     <!--友情链接 -->
     <div class="href">
       <div class="container">
       <div class="href-box">
          <span><a href="https://www.oocl.com/schi/Pages/default.aspx"><img src="../assets/friend1.jpg" /></a></span>
          <span><a href="https://www.kline.com/"><img src="../assets/friend2.jpg" /></a></span>
          <span><a href="https://www.rclgroup.com/"><img src="../assets/friend3.jpg" /></a></span>
          <span><a href="http://www.apl.com/"><img src="../assets/friend4.jpg" /></a></span>
          <span><a href="http://www.csav.com/special-services/en/Pages/Home.aspx"><img src="../assets/friend5.jpg" /></a></span>
          <span><a href="https://www.hapag-lloyd.com/en/home.html"><img src="../assets/friend6.jpg" /></a></span>
       </div>
       </div>
     </div>
      <!--版权 -->
     <div class="publish">
       <p >© 江苏东昊国际货运代理有限公司 　版权所有 Designed by anine</P>
       <p>苏ICP备09011779号</P>
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
     
    }
  },
  methods:{
    
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
// //轮播图
// .casual{
//  padding-top: -50rem;
//   border:1px solid #000;
// }
h2{
    margin-top: 4%;
    text-align: center;
  }
  h5{
    color:#888888;
    text-align: center;
    margin-bottom: 4%;
  }
//主体部分
.content{
    // img{
    //   width: 80%;
    //   height: 80%;
    // }
    .con-intro{
      width: 31%;
      margin: 1%;
      height:20rem;
      background: #fff;
      transition: all  .25s  ease-in;
      -moz-transition: all  .25s  ease-in;
      -webkit-transition: all  .25s  ease-in;
      &:hover{
        box-shadow: 5px 2px 0 0 rgba(190, 190, 190, 0.226);
        transform:translateY(-8px);
      }
    }
  
  // .content-img{
  //    width:30%;
  //    display: inline-block;
  //    img{
  //      width: 100%;
  //      height: 100%;
  //      object-fit: cover;
        
  //   }
  // }
  //   .content-signal{
  //     width: 70%;
  //     display: inline-block;
  //   // float: right;
  //       padding-left: 1%;
  //     h5{
  //       color:#000;
  //       margin: 0;
  //       text-align: left;
  //       display: inline;
  //     }
  //     p{
  //       width: 100%;
  //     }
  //   }
}
@media  (max-width:1024px){
  h2{
    font-size: 1.5rem;
  }
  h5{
    font-size: 1rem;
  }
  p{
    font-size: 0.6rem;
  }
}
@media  (max-width:767px){
  h2{
    font-size: 1.2rem;
  }
  h5{
    font-size: 0.8rem;
  }
  .content .content-img{
    width: 15%;
  }
}
//企业文化
.company-culture{
  width: 100%;
  height: 25rem;
  background: rgba(0, 0, 0, 0.13);
}
@media  (max-width:768px){
  .company-culture{
    height: 10rem;
  }
}
//底部
.footer{
  width: 100%;
  height: 15rem;
  position: relative;
  bottom:0;
 
  .href{
    height:65%;
    background: #EEE;
    .href-box{
      width:80%;
      margin: auto;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content:space-between;
      span{
        width:5rem;
        height:4rem;
        margin: 0.9rem;
        img{
        width:100%;
        height:100%;
      }
      }
    }
  }
  .publish{
    height:35%;
    background: #3d3d3d;
    text-align: center;
    p{
      color:#EEE;
      font-size:0.8rem;
      margin:0;
      padding:0.3rem;
    }
   p:first-child{
     padding-top:1.2rem;
   }
  }
}
@media  (max-width:768px){
 .footer{
   height: 10rem;
   position: relative;
   bottom:0;
   .wrap{
    height: 5rem;
  }
 
   .href{
     height: 60%;
     width: 100%;
   }
   .publish{
     height: 40%;
     p{
       font-size:0.01rem;
       padding:0.1rem;
     }
     p:first-child{
     padding-top:0.3rem;
   }
   }
 }
}
@media  (max-width:767px){
 .footer{
   height: 8rem;
   .wrap{
    height: 4rem;
  }
   .href{
     height:60%;
      .href-box{
        width:100%;
        span{
          width: 3rem;
          height: 2rem;
        }
      }
   }
   .publish{
     height: 40%;
   }
 }
}

</style>
