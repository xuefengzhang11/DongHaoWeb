<template>
  <div class="box" style="width:100%;height:100%;">
    <canvas id="mycanvas" ref="myCanvas" @click="getPosition" width="400" height="500"></canvas>
    <div v-for="(item,index) in pos" :key="index">
      <p v-show="item.checked===true">{{item.text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  
  name: 'canvas',
  data () {
    return {
     src:require('../assets/1.jpg'),
     //后端传过来的坐标数据
     pos:[{startPoint:[29, 24],endPoint:[124, 52],text:'hhhhhhhhh',checked:false},{startPoint:[89, 110],endPoint:[177, 199],text:'aaaaaaaaa',checked:false}],
      //画布与原图片大小的比率
     zoom:[],
    }
  },
  created(){
  },
  mounted(){
    this.doCanvas()
  },
  methods:{
    //获得画布上点击的坐标
   getPosition :function(ev) {
      var x,y
      //点击的坐标获取
      if (ev.layerX || ev.layerX === 0) {
        x = ev.layerX
        y = ev.layerY
      } else if (ev.offsetX || ev.offsetX === 0) {
        x = ev.offsetX
        y = ev.offsetY
      }
      //每次点击时间发生之前将所有的小画布恢复成蓝色
      this.blueborder()
      //判断点击坐标是否在小画布里，如果在的话就将边框变为红色，并将checked值改变
      this.pos.forEach((el,index)=>{
        el.checked=false
        if((el.startPoint[0] * this.zoom.width)<=x&&x<=(el.endPoint[0] * this.zoom.width)&&(el.startPoint[1] * this.zoom.height)<=y&&y<=(el.endPoint[1] * this.zoom.height)){
          let myCanvas = this.$refs.myCanvas;
          var ctx = myCanvas.getContext('2d');
            el.checked=!el.checked
            ctx.strokeStyle = "red";
            ctx.strokeRect(
              el.startPoint[0] * this.zoom.width,
              el.startPoint[1]* this.zoom.height,
              (el.endPoint[0]- el.startPoint[0]) * this.zoom.width,
              (el.endPoint[1] - el.startPoint[1]) * this.zoom.height
          );
        }
      })
    },
    //画图
    doCanvas:function(){
      let myCanvas = this.$refs.myCanvas;
     var ctx = myCanvas.getContext('2d');
      let backImg = new Image();
      backImg.onload=()=>{
        //canva画布大小
        const cWidth = myCanvas.width, cHeight = myCanvas.height;
        //原图片大小
        const imgWidth = backImg.naturalWidth, imgHeight = backImg.naturalHeight
        //画布与原图片大小的比率
        this.zoom = {
            width: cWidth / imgWidth,
            height: cHeight / imgHeight,
        };
        // 以图画底
        ctx.drawImage(backImg, 0, 0, cWidth, cHeight);
        // 假设左上角的point 29,24 这是针对原图的坐标系
        // 假设右下角的point 124,52 这是针对原图的坐标系
        //const startPoint = [29, 24], endPoint = [124, 52];
        this.blueborder()
    }
    backImg.src=this.src
    },
    blueborder:function(){
      let myCanvas = this.$refs.myCanvas;
      var ctx = myCanvas.getContext('2d');
      ctx.strokeStyle = "blue";
        //循环得到的坐标画出框框
        this.pos.forEach((el,index)=>{
          ctx.strokeRect(
              el.startPoint[0] * this.zoom.width,
              el.startPoint[1]* this.zoom.height,
              (el.endPoint[0]- el.startPoint[0]) * this.zoom.width,
              (el.endPoint[1] - el.startPoint[1]) * this.zoom.height
          );
      })
    }
  }, 
  
}
</script>

<style lang="scss" scoped>

</style>
