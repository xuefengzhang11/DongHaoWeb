
<template>
  <div class="box">
    <Nav :currentpage="6"></Nav>
  <div><img src="../assets/1.jpg" style="width:100%"></div> 
   
    <div class="container">
       <h2>公司成员</h2>
      <div style="float:left;">
        <div class="part-left"><img src="../assets/1.jpg"></div>
        <div class="part-right">
          <h4>aaaa</h4>
          <p>jkxsahcfiusdfjkgnvmxdskdsah</p>
        </div>
      </div>
      <div style="float:left;margin:3% 0;">
        <div class="part-left"><img src="../assets/1.jpg"></div>
        <div class="part-right">
          <h4>aaaa</h4>
          <p>jkxsahcfiusdfjkgnvmxdskdsah</p>
        </div>
      </div>
    </div>
    
    <div class="container">
      <h2>公司活动</h2>
      <div style="float:left;margin:3% 0;">
        <div class="part-left"><img src="../assets/1.jpg"></div>
        <div class="part-right">
          <h4>aaaa</h4>
          <p>jkxsahcfiusdfjkgnvmxdskdsah</p>
        </div>
      </div>
    </div>
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
      
    }
  }
</script>
<style lang="scss" scoped>
h2{
  text-align: center;
  margin: 2% 0;

}
.part-left{
  width: 30%;
  float:left;
  img{
    width: 100%;
  }
}
.part-right{
  width: 65%;
  margin-left: 5%;
  float:right;
}
</style>
