
<!--工具箱界面-->
<template>
  <div>
    <Nav :currentpage="3"></Nav>
     <!--轮播图 -->
    <div class="casual"><casual></casual></div>
    <div class="box">
      <div class="bussnav">
        <!-- <ul>
          <li :class="pages===1?'leftaside2':'leftaside1'" @click="toDetailpage(1)">{{ $t('menu.twobooking')}}</li>
          <li :class="pages===2?'leftaside2':'leftaside1'" @click="toDetailpage(2)">{{ $t('menu.twodeclare')}}</li>
          <li :class="pages===3?'leftaside2':'leftaside1'" @click="toDetailpage(3)">{{ $t('menu.twotransport')}}</li>
          <li :class="pages===4?'leftaside2':'leftaside1'" @click="toDetailpage(4)">{{ $t('menu.twostorage')}}</li>
        </ul> -->
        <div class="content-box">
          <div class="detailcontent">
            &nbsp;&nbsp;&nbsp;&nbsp;主营业务：订舱、报关、运输、仓储、证件办理、保税业务、关务方案定制、账册核销代理。<br>
            &nbsp;&nbsp;&nbsp;&nbsp;业务特色：在线下单方便快捷、货物信息全程反馈、系统制单差错率低、账册核销经验丰富;<br>
             &nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;关务人才储备服务完善、人员稳定降低风险、合作车队实力雄厚、快速送达无需担心！<br>
          </div>
          <!-- <div class="detailcontent" v-if="pages==2">
            &nbsp;&nbsp;&nbsp;&nbsp;{{ $t('content.twodeclare')}}
          </div>
          <div class="detailcontent" v-if="pages==3">
            &nbsp;&nbsp;&nbsp;&nbsp;{{ $t('content.twotransport')}}
          </div>
          <div class="detailcontent" v-if="pages==4">
            &nbsp;&nbsp;&nbsp;&nbsp;{{ $t('content.twostorage')}}
          </div> -->
       </div>
      </div>
      
    </div>
   </div>
</template>
<script>
import casual from '../components/casual'
  export default {
    name: "mainBussiness",
  components:{casual},
    data() {
      return {
      };
    },
    created(){
    },
    mounted() {
    },
    methods: {
    },
  
  }
</script>
<style lang="scss" scoped>
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
.box{
  width: 60%;
  margin: 2% auto;
  .bussnav{
    margin:5% auto;
    width: 100%;
    ul{
      height: 5rem;
        li{
          width:25%;
          float:left;
          line-height:5rem;
          text-align: center;
          color:#000;
          &:hover{
            color:rgb(211, 64, 64);
            cursor: pointer;
          }
        }
        .leftaside1{
           border-bottom:#f3f3f3;
        }
        .leftaside2{
          border-bottom:0.2rem solid rgb(211, 64, 64);
          color:rgb(211, 64, 64);
        }
    }
    .content-box{
      margin-top: 2rem;
      height: 20rem;
      background: #fff;
      .detailcontent{
        width: 90%;
        margin:auto;
        padding-top:4%;
        font-size: 1.2rem;
        letter-spacing: 0.2rem;
      }
   }
  }
}
@media  (max-width:1024px){
.box{
    width: 80%;
    .bussnav{
      ul{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      li{
          width:24.5%;
          font-size:0.1rem;
          line-height:3rem;
        }
    }
  }
}
  }
  @media  (max-width:768px){
  .box{
    width: 90%;
    .bussnav{
      ul{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      li{
          width:24.5%;
          font-size:0.1rem;
          line-height:3rem;
        }
    }
  }
}
  }
</style>