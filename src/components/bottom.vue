<template>
    <!--版权 -->
     <div class="footer">
       <p >© 江苏东昊国际货运代理有限公司 　版权所有 Designed by anine</P>
       <p>苏ICP备09011779号</P>
     </div>
</template>
<script>
export default {
  
    data() {
        return{
          
        }
    },
    methods:{
      
    },
    created(){
    
    },
    mounted() {  
    
  } ,
  watch:{
    
  }
  
}
</script>
<style lang="scss" scoped>
 .footer{
    height:5rem;
    width: 100%;
    background: #3d3d3d;
    text-align: center;
    // position: absolute;
    // bottom:0;
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

@media  (max-width:1024px) and (min-width:768px){
   .footer{
     height: 3rem;
     position: absolute;
     bottom:0;
     p{
       font-size:0.01rem;
       padding:0.1rem;
     }
     p:first-child{
     padding-top:0.3rem;
   }
   }
 }

@media  (max-width:767px){


   .footer{
     height:3rem;
    position: absolute;
    bottom:0;
     p{
       font-size:0.01rem;
       padding:0.1rem;
     }
      p:first-child{
     padding-top:0.3rem;
   }
   }
 }


</style>
