
<template>
  <div class="box">
    <Nav :currentpage="6"></Nav>
  <div><img src="../assets/1.jpg" style="width:100%"></div> 
   
    <div class="container">
       <h2>公司成员</h2>
      <div class="about-com">
        <div class="part-left"><img src="../assets/1.jpg"></div>
        <div class="part-right">
          <h4>aaaa</h4>
          <p>jkxsahcfiusdfjkgnvmxdskdsah</p>
        </div>
      </div>
      <div class="about-com" >
        <div class="part-left"><img src="../assets/1.jpg"></div>
        <div class="part-right">
          <h4>aaaa</h4>
          <p>jkxsahcfiusdfjkgnvmxdskdsah</p>
        </div>
      </div>
    </div>
    
    <div class="container">
      <h2>公司活动</h2>
      <div class="about-com">
        <div class="part-left"><img src="../assets/1.jpg"></div>
        <div class="part-right">
          <h4>aaaa</h4>
          <p>jkxsahcfiusdfjkgnvmxdskdsah</p>
        </div>
      </div>
    </div>
    <button @click="toData">denglu </button>
  </div>
</template>
<script>

  export default {
    name: "abouts",
    data() {
      return {
      };
    },
    mounted() {
     
    },
    
    methods: {
      toData:function(){
        var data={
          "name":"Ania",
          "isComplete":false
        }
        // JSON.stringify()
        this.$post(this.url.test,data)
        .then(res => {
            console.log(res)
           })
           .catch(err => {
             console.log(err)
           });
      }
    }
  }
</script>
<style lang="scss" scoped>

h2{
  text-align: center;
  margin: 2% 0;
}
.about-com{
  width: 100%;
  margin:3% 0;
 display: flex;
 flex-direction: row;
  .part-left{
    width: 30%;
   
    img{
      width: 100%;
    }
  }
  .part-right{
    width: 65%;
    margin-left: 4%;
   
  }
}

</style>
