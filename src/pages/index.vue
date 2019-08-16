<template>
  <div class="box">
    <Nav :currentpage="1"></Nav>
     <!--轮播图 -->
   <div class="casual"><casual></casual></div>
   <h2>东昊业务介绍</h2>
   <h5>订舱、报关、运输、存储、证件办理等...</h5>
   <div class="container content">
    <div class="row">
      <div class="con-intro">
        <router-link :to="{ path: '/aa'}">运输</router-link>
      </div>
      <div class="con-intro">
        查询
      </div>
      <div class="con-intro">
        报关
      </div>
    </div>
   </div>
   <!-- 企业文化图片以及文字 -->
   <h2>企业文化</h2>
   <h5>爱国、敬业、诚信、友善</h5>
   <div class="company-culture">
     <div class="culture-box">
      <h4>诚信</h4>
      <!-- <div class="culture-content">
          <h4>诚信</h4>
          <div>
            <p>做人要讲诚信做人要讲诚信做人要讲诚信做人要讲诚信做人要讲诚信做人要讲诚信做人要讲诚信做人要讲诚信做人要讲诚信做人要讲诚信！</p>
          </div>
      </div> -->
     </div>
   </div>
   <!-- 合作伙伴 -->
   <h2>合作伙伴</h2>
   <h5>并肩合作，共同发展</h5>
   <div class="container coop">
     <div class="row">
      <div class="coop-img"><img src="../assets/1.jpg"></div>
      <div class="coop-img"><img src="../assets/1.jpg"></div>
      <div class="coop-img"><img src="../assets/1.jpg"></div>
      <div class="coop-img"><img src="../assets/1.jpg"></div>
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

h2{
    margin-top: 4%;
    text-align: center;
  }
  h5{
    color:#888888;
    text-align: center;
    margin-bottom: 4%;
  }
  @media  (max-width:1024px) and (min-width:768px){
      h2{
        font-size: 1.4rem;
      }
      h5{
        font-size:0.5rem;
      }
    }
     @media  (max-width:767px){
      h2{
        font-size: 1rem;
      }
      h5{
        font-size:0.5rem;
      }
    }
//主体部分
.content{
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
    @media  (max-width:1024px) and (min-width:768px){
      .con-intro{
        width: 31%;
        margin: 1%;
        height:15rem;
      }
    }
     @media  (max-width:767px){
      .con-intro{
        width: 31%;
        margin: 1%;
        height:8rem;
      }
    }
}
//企业文化
.company-culture{
  width:100%;
  margin-top: 4%;
  background: #fff;
  .culture-box{
    display: inline-block;
    width: 24.7%;
    height: 20rem;
    background: #fff;
    position: relative;
    &:hover .culture-content{
      display: block;
    }

    img{
      width: 100%;
      height: 100%;
      object-fit:cover;
    }
    
    // .culture-content{
    //   position: absolute;
    //   top:0;
    //   left:0;
    //   width:100%;
    //   height: 20rem;
    //   z-index:5;
    //   color:#fff;
    //   display: none;
    //   background: #888888;
    //   h4{
    //     margin: 30% 0 0 45%;
    //   }
    //   div{
    //     width: 80%;
    //     margin:10% auto 0;
    //   }
    // }
  }
  @media  (max-width:768px){
    .culture-box{
       height: 8rem;
    }
  }
}

.coop{
  .coop-img{
    width: 23%;
    height: 10rem;
    margin: 0.6%;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  } 
  @media  (max-width:768px){
  .coop-img{
    height: 5rem;
  }
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
        width:7rem;
        height:6rem;
        margin-top:2rem;
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
@media  (max-width:1024px) and (min-width:768px){
 .footer{
   height: 10rem;
   position: relative;
   bottom:0;
   
   .href{
     height: 60%;
     width: 100%;
     .href-box{
       span{
          width: 5rem;
          height: 4rem;
          margin-top:1rem;
        }
     }
     
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
   height: 7rem;
   .href{
     height:55%;
      .href-box{
        width:100%;
        span{
          width: 3rem;
          height: 2rem;
          margin-top:1rem;
        }
      }
   }
   .publish{
     height:45%;
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

</style>
