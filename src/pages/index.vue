<!--首页界面-->
<template>
  <div class="box">
    <Nav :currentpage="1"></Nav>
     <!--轮播图 -->
   <div class="casual"><casual></casual></div>
   <h2>{{ $t('content.bussiness')}}</h2>
   <h5>{{ $t('content.detailbussiness')}}</h5>
   <div class="container content">
    <div class="row">
      <div class="con-intro">
        <img src="../assets/transport.png">
        <span><h2>{{ $t('content.transport')}}</h2></span>
      </div>
      <div class="con-intro">
         <img src="../assets/query.png">
         <span><h2>{{ $t('content.query')}}</h2></span>
      </div>
      <div class="con-intro">
        <img src="../assets/customs.png">
        <span><h2>{{ $t('content.customs')}}</h2></span>
      </div>
    </div>
   </div>
   <!-- 企业文化图片以及文字 -->
   <h2>{{ $t('content.culture')}}</h2>
   <h5>{{ $t('content.detailcult')}}</h5>
   <div class="company-culture">
     <div class="cultureback"></div>
   </div>
   <!-- 合作伙伴 -->
   <h2>{{ $t('content.companer')}}</h2>
   <h5>{{ $t('content.detailcompaner')}}</h5>
   <div class="container coop">
     <div class="row">
      <div class="coop-img"><img src="../assets/friend1.jpg" /></div>
      <div class="coop-img"><img src="../assets/friend2.jpg" /></div>
      <div class="coop-img"><img src="../assets/friend3.jpg" /></div>
      <div class="coop-img"><img src="../assets/friend4.jpg" /></div>
      <div class="coop-img"><img src="../assets/friend5.jpg" /></div>
      <div class="coop-img"><img src="../assets/friend6.jpg" /></div>
     </div>
    </div>
    <Bottom></Bottom>
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
  mounted(){
    //判断浏览器页面是否在本网站，用户是否关掉或者切换其他网页
    var hiddenProperty ='hidden' in document ? 'hidden' :    
    'webkitHidden' in document ? 'webkitHidden' :    
    'mozHidden' in document ? 'mozHidden' :    
    null;
    var visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange');
    var onVisibilityChange = function(){
        if (!document[hiddenProperty]) {    
            console.log('页面激活');
        }else{
            console.log('会话被切换')
        }
    }
    document.addEventListener(visibilityChangeEvent, onVisibilityChange);
  },
  methods:{
    
  },
  watch: {
    
},
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
.casual{
  margin-top: 8rem;
}
@media  (max-width:1024px) and (min-width:768px){
  .casual{
    margin-top: 6rem;
  }
}
@media  (max-width:767px){
  .casual{
    margin-top: 4rem;
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
      border-radius:3px;
      transition: all  .25s  ease-in;
      -moz-transition: all  .25s  ease-in;
      -webkit-transition: all  .25s  ease-in;
      position: relative;
      &:hover{
        box-shadow: 5px 2px 0 0 rgba(190, 190, 190, 0.226);
        transform:translateY(-8px);
      }
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        span{
          display: inline-block;
          width: 50%;
          height: 5rem;
          border:1px solid #fff;
          color:#fff;
          position: absolute;
          top:60%;
          left:25%;
          h2{
            line-height: 3.8rem;
            letter-spacing: 0.4rem;
          }
        }  
    }
    @media  (max-width:1024px) and (min-width:768px){
      .con-intro{
        width: 31%;
        margin: 1%;
        height:15rem;
        .introimg{
          height: 8rem;
        }
        span{
          width: 50%;
          height: 4rem;
          left:25%;
          h2{
            line-height:3.5rem;
          }
        }
      }
    }
     @media  (max-width:767px){
      .con-intro{
        width: 31%;
        margin: 1%;
        height:8rem;
        .introimg{
          height: 4rem;
        }
        span{
          width: 60%;
          height: 2rem;
          left:20%;
          h2{
            line-height:1.5rem;
            font-size:10px;
          }
        }
      }
    }
}
//企业文化
.company-culture{
  width:100%;
  height: 20rem;
  margin-top: 4%;
 .cultureback{
   height: 100%;
    background: url('../assets/cultureback.png');
    background-size:cover;
 }
}
@media  (max-width:1024px) and (min-width:768px){
  .company-culture{
    height: 14rem;
  }
}
@media  (max-width:767px){
  .company-culture{
    height: 8rem;
  }
}
.coop{
  width: 100%;
  margin-bottom:3%;
  .coop-img{
    width:14%;
    height: 10rem;
    margin: 1.3%;
    height: 7rem;
    img{
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  } 
}
@media  (max-width:768px){
  .coop{
    margin-bottom:3rem;
    .coop-img{
    height: 3rem;
  }
  }
  
  }
  @media  (min-width:768px) and (max-width:1024px){
    .coop{
    margin-bottom:8%;
    .coop-img{
    height: 5rem;

  }
  }
  
}
</style>