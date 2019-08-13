<template>
  <div class="carousel-wrap carousel-height" id="carousel">
    <transition-group tag="ul" class='slide-ul' name="list">
      <li v-for="(list,index) in slideList" v-bind:key="list.id" v-show="index===currentIndex" @mouseenter="stop" @mouseleave="go">
        <a href="#" >
          <img :src="list.image">
        </a>
      </li>
    </transition-group>
    <div class="carousel-items">
      <span v-for="(item,index) in slideList.length" :class="{'active':index===currentIndex}" @mouseover="change(index)" :key="index"></span>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return{
          currentIndex:0,//图片索引
          timer: '',
          slideList:[
           {"id":0,"image":require('../assets/1.jpg')} ,
            {"id":1,"image":require('../assets/2.jpg')} ,
            {"id":2,"image":require('../assets/3.jpg')} ,
            {"id":3,"image":require('../assets/4.jpg')} ,
           {"id":4,"image":require('../assets/5.jpg')} ,
          ]
        }
    },
    methods:{
      go() {
        this.timer = setInterval(() => {
          this.autoPlay()
        }, 4000)
      },
      stop() {
          clearInterval(this.timer)
          this.timer = null
      },
      change(index) {
          this.currentIndex = index
      },
      autoPlay() {
          this.currentIndex++
          if (this.currentIndex > this.slideList.length - 1) {
              this.currentIndex = 0
          }
      }
    },
    mounted() {  
    //在DOM加载完成后，下个tick中开始轮播
    this.$nextTick(() => {
        this.timer = setInterval(() => {
            this.autoPlay()
        }, 4000)
    })
  } 
}
</script>
<style lang="scss" scoped>

.carousel-wrap {
  position: relative;
  height:30rem;
  width: 100%;
  overflow: hidden;
  // 删除
  background-color: #fff;
}
@media screen and (max-width:768px){
  .carousel-height{
    height:10rem;
  }
}
@media screen and (max-width:992px) and (min-width: 768px){
  .carousel-height{
    height:15rem;
  }
}
.slide-ul {
  width: 100%;
  height: 100%;
  li {
    position: absolute;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      opacity: 1;
      // animation: fateimg 100s linear infinite;
      // animation-delay: 1s;
    }
  }
}

.carousel-items {
  position: absolute;
  z-index: 10;
  top: 90%;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  font-size: 0;
  span {
    display: inline-block;
    height: 0.8rem;
    width:0.8rem;
    border-radius: 50%;
    border:1px solid #000;
    margin: 0 0.6rem;
    background-color: #fff;
    cursor: pointer;
  }
  .active {
    background-color: rgba(0, 0, 0, 0.329);
  }
}
 @keyframes fateimg{
   0%{opacity: 1;}
   100%{opacity:0;}
 }
.list-enter-to {
  transition: all 1s ease;
  transform: translateX(0);
}

.list-leave-active {
  transition: all 1s ease;
  transform: translateX(-100%)
}

.list-enter {
  transform: translateX(100%)
}

.list-leave {
  transform: translateX(0)
}
</style>
