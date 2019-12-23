
<!--关于东昊界面-->
<template>
  <div class="box">
    <Nav :currentpage="6"></Nav>
    <div class="container">
      <ul class="about-nav">
        <li :class="pages===1?'selected1':'selected2'" @click="changeSelect(1)">关于东昊</li>
        <li :class="pages===2?'selected1':'selected2'" @click="changeSelect(2)">公司资质</li>
        <li :class="pages===3?'selected1':'selected2'" @click="changeSelect(3)">联系我们</li>
        <li></li>
      </ul>
    </div>
    <div class="container" v-if="pages==1" style="margin-bottom:5%;">
       <h3>关于东昊</h3>
       <div class="detailintro">&nbsp;&nbsp;&nbsp;&nbsp;江苏东昊国际货运代理有限公司是经国家外经贸部批准成立的一级货运代理企业。前身为宜兴市中昊货物运输有限公司，成立于1995年（主营内贸海运、空运、陆运业务），经过了十多年的创业与积累，于2006年成功收购江苏宏威国际货运代理有限公司，进行重组，更名为江苏东昊国际货运代理有限公司。
          目前业务范围：国际和国内海运、空运、陆运，代理报关、报检，综合保税业务，贸易代理等，成为一家综合、专业的物流企业。<br> &nbsp;&nbsp;&nbsp;&nbsp;本公司致力于为客户提供最完善的服务，在进出口海空运输、保险、国内运输等方面提供最优质、高效的“一站式”服务，为您筹划最佳、最省、最便捷的贸易运输方案。</div>
      <h3>创始人</h3>
      <div class="about-com">
        <img src="../assets/companer.jpg">
      </div>
    </div>
    <div class="container" v-if="pages==2">
      <div class="scroll-box">
          <ul>
            <li @click="toGet()">iso</li>
            <li @click="run(a1)">aeo</li>
          </ul>
          <div>{{arr}}</div>
      </div>
    </div>
    <div class="container" v-if="pages==3">
      <h3>联系我们</h3>
      <p>江苏中昊国际货运代理有限公司</p>
      <p>电话:65265119</p>
      <p>地址:苏州方正智谷1幢531</p>
    </div>
  </div>
</template>
<script>

  export default {
    name: "abouts",
    data() {
      return {
        data:[],
        pages:1,//当前在那个小片段
        arr:[],
        a1:
    {
        "showStyle":"barscn",
        "areaList":
        [
            {
                "showModel":0,
                "showLen":5,
                "title":"",
                "showName":"aa",
                "lines":{
                    "style":{
                        "bgcolor":"ff0000",
                        "fgcolor":"ffffff", 
                        "fontsize":"36", 
                        "fontname":["simhei",'purple'],
                        "alpha":1.0,
                      "showName":["cc",'bb','zz']
                    },
                    "datas":
                    [
                        {   "style":"",
                            "cols":[
                                {"showName":"Nokia","currentShow":true,"style":""},
                                {"showName":"Apple","currentShow":true,"style":""}
                            ]
                        }
                    ]   
                }
            }    
        ]
    }
}
  
    },
    mounted() {
     
    },
    
    methods: {
      //用递归方法取值
     run:function (v){
        if(v&&v.constructor==Array){
          v.forEach(value=>{
              this.run(value)
          })
          return
        }
        if(v&&v.constructor==Object){
          for(var k in v){
              if(k=="showName"){
                  this.arr.push(v[k])
              }
              this.run(v[k])
          }
        }
      },
      // toData:function(){
      //   var data={
      //     "name":"Ania",
      //     "isComplete":false
      //   }
      //   this.$post(this.url.test,data)
      //   .then(res => {
      //       console.log(res)
      //       this.data.push(res)
      //       console.log(this.data)
      //      })
      //      .catch(err => {
      //        console.log(err)
      //      });
      // },
      //在服务器上读取json文件
      toGet:function(){
        //json序列化，反序列化用json.parse
        var a={
          a:"bbbbb",
          c:"dddddd"
        }
        var b=JSON.stringify(a)
       
        
        $.getJSON("http://10.10.10.241/a.json")
        .then(res => {
          console.log(2)
            
            console.log(3)
            console.log(res)
           })
           .catch(err => {
             console.log(err)
           });
         console.log(1)
      },
      changeSelect:function(e){
        this.pages=e
      },
    }
  }
</script>
<style lang="scss" scoped>
.about-nav{
  width: 100%;
  margin:20% auto 0;
  display: flex;
  font-size: 1.3rem;
  color:#000;
  li{
    line-height:  4rem;
    width: 20%;
    text-align: center;
    border-bottom: 1px solid rgba(155, 155, 155, 0.473);
    
    &:last-child{
      width: 40%;
    }
  }
  .selected2{
    &:hover{
      background: rgba(211, 210, 210, 0.507);
      margin-left:0.2rem;
       cursor: pointer;
    }
  }
  .selected1{
    color:rgb(250, 107, 54);
    border:1px solid rgba(155, 155, 155, 0.473);
    border-bottom:none;
    border-radius:3px;
  }

}

h3{
  text-align: center;
  margin: 4% 0;
}
p{
  font-size: 1.3rem;
}
.detailintro{
  font-size:1.2rem;
  color:rgb(83, 81, 81);
}
.about-com{
  width: 100%;
  height: 18rem;
  img{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
.scroll-box{
  width: 100%;
  ul{
    li{ 
     width:30%; 
     height: 10rem;
     border:1px solid rgb(114, 114, 114);
     text-align: center;
     background: rgb(136, 136, 136);
     float: left;
     margin:5%;
    }
  }
}
@media  (max-width:1024px){
   .about-nav{
    margin-top:20%;
  }
  .goods-img{
      height: 15rem;
    }
    .scroll-box{
      ul{
        li{ 
        width:23%;
        }
      }
    }
}
@media  (max-width:767px){
  .about-nav{
    margin-top:30%;
    font-size: 0.2rem;
  }
  h3{
    font-size:1.1rem;
  }
  p{
    font-size:0.5rem;
  }
  .detailintro{
    font-size:0.5rem;
  }
  .about-com{
    margin-top:-5rem;
  }
  .goods-img{
    height: 10rem;
    width: 100%;
  }
  .scroll-box{
      ul{
        li{ 
        width:22%;
        img{
          height: 5rem;
        }
        }
      }
    }  
}
</style>
