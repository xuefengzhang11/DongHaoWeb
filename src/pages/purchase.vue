
<template>
  <div class="box">
    <Nav :currentpage="4"></Nav>
    <div class="goods-img"><img src="../assets/1.jpg"></div>
    <div class="purchase-box">
      <div>
        <h4>在线下单</h4>
        <div class="order-title">
          <span class="order-icon"></span>
          <span>发货方信息</span>
        </div>
        <div class="user-info">
          <div>
             <span style="color:red;">*</span>
             <span>客户类型：</span>
          </div>
          <input type="radio" v-model="send.radioPicked" value="个人" id="study">
          <label for="study">个人</label>
          <input type="radio" v-model="send.radioPicked" value="公司" id="read">
          <label for="study">公司</label><br>
          <div>
            <span style="color:red;">*</span>
            <label>姓名：</label>
          </div>
          <input type="text" v-model="send.name" placeholder="请输入发货人姓名" class="change-ipt"><br>
          <div>
              <span style="color:red;">*</span>
              <label>手机号码：</label>
          </div>
          <input type="text" v-model="send.tel" placeholder="请输入您的手机号" class="change-ipt"><br>
          <div>
              <span style="color:red;">*</span>
              <label>发货地址：</label>
          </div>
          <input type="text" v-model="send.pos"  class="change-ipt" readonly placeholder="请选择" @click="posPicker(1)" ><br>
          <v-distpicker @selected='selected' v-show="isPosPicker==1"  class="posPicker">
         </v-distpicker>
         <div>
              <span style="color:red;">*</span>
              <label>详细地址：</label>
          </div>
          <input type="text" v-model="send.detailpos"  class="change-ipt"  placeholder="详细地址,如：凉香新村14栋405"><br>
        </div>
        <div class="order-title">
          <span class="order-icon"></span>
          <span>收货方信息</span>
        </div>
        <div class="user-info">
          <div>
            <span style="color:red;">*</span>
            <label>姓名：</label>
          </div>
          <input type="text" v-model="accept.name" placeholder="请输入发货人姓名" class="change-ipt"><br>
          <div>
              <span style="color:red;">*</span>
              <label>手机号码：</label>
          </div>
          <input type="text" v-model="accept.tel" placeholder="请输入您的手机号" class="change-ipt"><br>
          <div>
              <span style="color:red;">*</span>
              <label>发货地址：</label>
          </div>
          <input type="text" v-model="accept.pos"  class="change-ipt" readonly placeholder="请选择" @click="posPicker(2)"><br>
          <v-distpicker  v-show="isPosPicker==2" @selected='selected'  class="posPicker">
         </v-distpicker>
         <div>
              <span style="color:red;">*</span>
              <label>详细地址：</label>
          </div>
          <input type="text" v-model="accept.detailpos"  class="change-ipt" placeholder="详细地址,如：凉香新村14栋405"><br>
        </div>
        <div class="order-title">
          <span class="order-icon"></span>
          <span>货物信息</span>
        </div>
        <div class="user-info">
          <div>
            <span style="color:red;">*</span>
            <label>货物名称：</label>
          </div>
          <input type="text" v-model="goods.name" placeholder="不清楚的填其他" class="change-ipt"><br>
          <div>
              <label>货物数量：</label>
          </div>
          <input type="text" v-model="goods.count" placeholder="请填货物数量/件" class="change-ipt"><br>
          <div>
              <label>货物重量：</label>
          </div>
          <input type="text" v-model="goods.weigt" placeholder="估计重量即可/千克" class="change-ipt"><br>
          <div>
              <label>货物体积：</label>
          </div>
          <input type="text" v-model="goods.volume" placeholder="请填货物数量/立方米" class="change-ipt"><br>
        </div>
        <button @click="submitOrder" class="submit-order">提交订单</button>
      </div>
    </div>
  </div>
</template>
<script>
 import VDistpicker from 'v-distpicker'

  export default {
     components: { VDistpicker },
    name: "purchase",
    data() {
      return {
        send:{
          radioPicked:'study',
          name:'',
          tel:null,
          pos:'',
          detailpos:''
        },
        accept:{
          name:'',
          tel:null,
          pos:'',
          detailpos:''
        },
        goods:{
          name:'',
          count:null,
          weigt:null,
          volume:null
        },
        isPosPicker:0,

      };
    },
    mounted() {
    },
    methods: {
      posPicker:function(a){
        if(a==1){
          this.isPosPicker=1
        }else if(a==2) {
        this.isPosPicker=2
        }
      },
       // 省市区三级联动
      selected(data){
        if(this.isPosPicker==1){
          this.send.pos = data.province.value + ' ' + data.city.value +' ' + data.area.value
        } else if(this.isPosPicker==2){
           console.log(331)
          this.accept.pos = data.province.value + ' ' + data.city.value +' ' + data.area.value
        }
        if((data.area.value!='区')&&(data.city.value!='市')&&(data.province.value!='省')){
          this.isPosPicker=0
        }
      },
      submitOrder:function(){
        if(this.send.radioPicked!='study'&&((this.send.name&&this.send.tel&&this.send.pos&&this.send.detailpos&&this.accept.name
        &&this.accept.tel&&this.accept.pos&&this.accept.detailpos&&this.goods.name)!=(null||''))){
          alert('success')
        } else {
          alert('您有必填信息没有填写，请填写！')
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
.goods-img{
  height: 25rem;
  img{
    height: 100%;
    object-fit:cover;
    width: 100%
  }
}
@media  (max-width:1024px){
    .goods-img{
      height: 15rem;
    }
}
@media  (max-width:768px){
    .goods-img{
      height: 10rem;
      width: 100%;
    }
}

.purchase-box{
  position: relative;
  top:-5rem;
  width: 50%;
  margin: auto;
  background: #fff;
  z-index:99;
  &>div{
    width:90%;
    margin: auto;
    padding: 4% 0;
    h4{
      margin:0 auto 2rem;
      text-align: center;
    }
    .order-title{
      border-bottom:0.08rem rgba(95, 95, 95, 0.123) solid;
      .order-icon{
        display: inline-block;
        width: 0.2rem;
        height: 1rem;
        background: rgba(89, 89, 209, 0.918);
      }
    }
    .user-info{
      width: 80%;
      margin:5% auto;
      &>div{
        display: inline-block;
        width: 14%;
        text-align: right;
        margin: 3% 0;
      }
      .change-ipt{
        width: 40%;
        height: 2.4rem;
        padding-left:0.5%;
        font-size: 0.9rem;
      }
      .posPicker{
        position: absolute;
        width: 100%;
        height:5rem;
        margin:-1% 0 0 -57%;
      }
      @media  (max-width:1024px) and (min-width:768px){
        .posPicker{
        margin:-1% 0 0 -40%;
        }
      }
      @media  (max-width:767px){
        .posPicker{
           margin:-1% 0 0 20%;
           width: 20%;
       } 
       width: 40%;
      }
    }
    .submit-order{
      width: 20%;
      height: 3rem;
      background: rgba(94, 94, 182, 0.274);
      border: none;
      display: block;
      margin: auto;
      color:#fff;
      &:hover{
        background: rgba(65, 65, 184, 0.274)
      }
    
    }
  }
}
@media  (max-width:1024px){
  .purchase-box{
    width: 70%;
    &>div{
      width:90%;
      margin: auto;
      .user-info{
        &>div{
          width: 25%;
        }
        .change-ipt{
          width: 50%;
          }
      }
    }
  }
}

@media  (max-width:767px){
  .purchase-box{
    width: 80%;
    font-size: 0.1rem;
    &>div{
      width:90%;
      margin: auto;
      h4{
        font-size: 0.5rem;
        margin-bottom: 1rem;
      }
      .order-title{
        .order-icon{
          height: 0.6rem;
        }
      }
      .user-info{
        width: 90%;
        margin:2% auto;
        &>div{
          width: 28%;
        }
        .change-ipt{
          width: 66%;
          height: 1.5rem;
          font-size: 0.1rem;
        }
      }
      .submit-order{
           height: 2rem;
           width: 30%;
      }
    }
  }
}
</style>