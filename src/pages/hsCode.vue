
<template>
  <div>
    <Nav :currentpage="2"></Nav>
    
    <!-- <div class="box">
      <div class="leftnav">
        <ul>
          <li :class="pages===1?'leftaside2':'leftaside1'" @click="toDetailpage(1)">HS编码模糊查询</li>
          <li :class="pages===2?'leftaside2':'leftaside1'" @click="toDetailpage(2)">申报要素查询</li>
          <li :class="pages===3?'leftaside2':'leftaside1'" @click="toDetailpage(3)">通关税率查询</li>
          <li :class="pages===4?'leftaside2':'leftaside1'" @click="toDetailpage(4)">海关最新政策查询</li>
          <li :class="pages===5?'leftaside2':'leftaside1'" @click="toDetailpage(5)">通关状态查询</li>
          <li :class="pages===6?'leftaside2':'leftaside1'" @click="toDetailpage(6)">企业信息等级及处罚查询</li>
        </ul>
      </div>
      <div class="contentright" >
        <input type="text" placeholder="请输入你要搜索的内容">
        <div  v-if="pages==1">
          <div class="databox" v-for="(item,index) in list" :key="index">
            <p>{{item.name}}</p>
          </div>
        </div>
        <div  v-if="pages==2">
          <div class="databox" v-for="(item,index) in list" :key="index">
            <p>{{item.name}}</p>
          </div>
        </div>
        <div  v-if="pages==3">
          <div class="databox" v-for="(item,index) in list" :key="index">
            <p>{{item.name}}</p>
          </div>
        </div>
        <div  v-if="pages==4">
          <div class="databox" v-for="(item,index) in list" :key="index">
            <p>{{item.name}}</p>
          </div>
        </div>
        <div  v-if="pages==5">
          <div class="databox" v-for="(item,index) in list" :key="index">
            <p>{{item.name}}</p>
          </div>
        </div>
        <div  v-if="pages==6">
          <div class="databox" v-for="(item,index) in list" :key="index">
            <p>{{item.name}}</p>
          </div>
        </div>
        <div class="diatancepage">
         <pagination v-show="total>0" :total="total" :page.sync="page" :limit.sync="limit" @pagination="getList" />
        </div>
      </div> 
    </div> -->
   </div>
</template>
<script>
  import pagination from '../components/pagination'
  export default {
    name: "hsCode",
  
    data() {
      return {
       total:0,     //数据总条数 
       page: 1,    //默认显示第1页
       limit: 10 ,  //默认一次显示10条数据
        data:[{"name":"11"},{"name":"bb"},{"name":"cc"},{"name":"dd"},{"name":"ee"},{"name":"ff"},{"name":"aa"},{"name":"bb"},{"name":"cc"},{"name":"dd"},
        {"name":"22"},{"name":"bb"},{"name":"cc"},{"name":"dd"},{"name":"ee"},{"name":"ff"},{"name":"aa"},{"name":"bb"},{"name":"cc"},{"name":"dd"},
        {"name":"33"},{"name":"bb"},{"name":"cc"},{"name":"dd"},{"name":"ee"},{"name":"ff"},{"name":"aa"},{"name":"bb"},{"name":"cc"},{"name":"dd"}
        ],
        list:[], //显示在页面上的数据
        pages:1, 
      };
    },
    created(){
      console.log(this.$route.query.pageid)
      this.pages=this.$route.query.pageid
    },
    mounted() {
      //请求第一页数据
            this.getList()
    },
    
    methods: {
     getList:function(){
       //传到后端的数据起始坐标和终止坐标
         var start = (this.page - 1) * this.limit;
         var end   = this.page * this.limit;
         //先清空list数组
         this.list=[]
       //  if(this.pages==1){
             //请求ajax后返回的数据存在list中
              this.list = this.data.slice(start,end);
              //数据总数量
               this.total = this.data.length;
       //  }
      },
      toDetailpage:function(a){
        if(a==1){
          this.pages=1
        } else if(a==2){
          this.pages=2
        } else if(a==3){
          this.pages=3
        } else if (a==4){
          this.pages=4
        } else if(a==5){
          this.pages=5
        } else if(a==6){
          this.pages=6
        }
      }
    },
    components: {
      'pagination': pagination,
    }
  }
</script>
<style lang="scss" scoped>
.box{
  width: 60%;
  margin: 2% auto;
  .leftnav{
    margin:5% auto;
    float:left;
    width: 20%;
    ul{
        background: rgb(206, 67, 67);
        li{
          width: 100%;
          height: 5rem;
          line-height:5rem;
          text-align: center;
          color:#fff;
          &:hover{
            background: rgb(133, 132, 132);
            color:#000;
            cursor: pointer;
          }
        }
        .leftaside1{
          background: rgb(206, 67, 67);
        }
        .leftaside2{
          background: rgb(133, 132, 132);
        }
    }
  }
  .contentright{
    float:right;
    margin-right:10%;
    width: 55%;
    height: 30rem;
    // background: rgb(223, 117, 117);
    input{
      display: block;
      margin:auto;
      width: 60%;
      height: 8%;
      padding-left:1rem;
    }
    .databox{
      border:1px solid #000;
      margin: 3% 0;
    }
  }
}
@media  (max-width:1024px){
   .box{
     width: 80%;
     margin-top: 7%;
   }
   .diatancepage{
     margin-left: -20%;
   }
  }
  @media  (max-width:768px){
   .box{
     width:100%;
     margin: 7% 0 0 5%;
     .leftnav
     {
       width: 30%;
      ul li{
       font-size:0.1rem;
      }
     } 
     .contentright{
       margin-top: 3%;
       input{
         width: 90%;
         height: 6%;
         font-size:0.2%;
       }
     }
   }
   .diatancepage{
     margin: 10% 0 0 -50%;
     width: 40%;
   }
  }
</style>