
<template>
     <div class="form-group">
      <label class="control-label">上传公司资质(最多可上传4张)</label>
      <div class="control-form">
        <ul class="upload-imgs">
          <li v-if="imgLen>=4 ? false : true">
            <input type="file" class="upload" @change="addImg" ref="inputer" multiple accept="image/png,image/jpeg,image/gif,image/jpg"/>
            <a class="add"><i class="iconfont icon-plus"></i><p>点击上传</p></a>
          </li>
          <li v-for='(value, key) in imgs' :key="key">
            <p class="img"><img :src="getObjectURL(value)"><a class="close" @click="delImg(key)">×</a></p>
          </li>
        </ul>
      </div>
    </div>
</template>
<script>
export default {
    name: 'upload',
    data(){
        return{
            formData:new FormData(),
            imgs: {},
            imgLen:0,
        }
    },
    methods: {
        addImg(event){
        let inputDOM = this.$refs.inputer;
        // 通过DOM取文件数据
        this.fil = inputDOM.files;
        let oldLen=this.imgLen;
        let len=this.fil.length+oldLen;
        if(len>4){
          alert('最多可上传4张，您还可以上传'+(4-oldLen)+'张');
          return false;
        }
        for (let i=0; i < this.fil.length; i++) {
          let size = Math.floor(this.fil[i].size / 1024);
          if (size > 5*1024*1024) {
            alert('请选择5M以内的图片！');
            return false
          }
          this.imgLen++;
          //触发页面重新渲染
          this.$set(this.imgs,this.fil[i].name+'?'+new Date().getTime()+i,this.fil[i]);
        }
      },
      getObjectURL(file) {
        var url = null ;
        if (window.createObjectURL!=undefined) { // basic
          url = window.createObjectURL(file) ;
        } else if (window.URL!=undefined) { // mozilla(firefox)
          url = window.URL.createObjectURL(file) ;
        } else if (window.webkitURL!=undefined) { // webkit or chrome
          url = window.webkitURL.createObjectURL(file) ;
        }
        //图片链接地址
        return url ;
      },
      delImg(key){
        this.$delete(this.imgs,key);
        this.imgLen--;
      },
    }
}
</script>
<style lang="scss" scope>
.upload-imgs{
    margin: 1rem 0;
    li{
        position: relative;
        width: 7.2rem;
        height: 7.2rem;
        display: inline-block;
        padding: 0.5rem;
        margin-right:1rem;
        border: 2px dashed #ccc;
        text-align: center;
        vertical-align: middle;
        &:hover{
            cursor: pointer;
        }
        .add{
            display: block;
            background-color: #ccc;
            color: #ffffff;
            height: 6rem;
            padding: 0.3rem 0;
        }
        .upload{
            position: absolute;
            top:0;
            left:0;
            bottom:0;
            right:0;
            width: 7.2rem;
            height: 7.2rem;
            opacity: 0;
        }
        .img{
            position: relative;
            width: 6rem;
            height:6rem;
            line-height:6rem;
            img{
                vertical-align: middle;
                width: 100%;
                height: 100%; 
                object-fit: cover;
            }
            .close{
                display: none;
            }
        }
        &:hover .img .close{
            display: block;
            position: absolute;
            right: -6px;
            top: -10px;
            line-height: 1;
            font-size: 22px;
            color: #aaa;
        }
    }
}
 @media (max-width:1024px) and (min-width:767px){
     .control-label{
         font-size:0.5rem;
     }
     .upload-imgs{
     margin: 0.1rem 0;
     li {
         width: 4.6rem;
         height: 4.6rem;
         padding: 0.2rem;
         margin-right:0.3rem;
        .upload{
            width: 4.6rem;
            height: 4.6rem;
        }
        .img{
            width: 3.8rem;
            height:3.8rem;
            line-height:3.8rem;
        }
        .add{
            height: 4rem;
            p{font-size: 0.3rem;}
        }
     }
     
   }
 }
 @media (max-width:767px){
      .control-label{
         font-size:0.2rem;
     }
   .upload-imgs{
     margin: 0.1rem 0;
     li {
         width: 3.5rem;
         height:3.5rem;
         padding: 0.2rem;
         margin-right:0.3rem;
        .upload{
            width: 3.5rem;
            height: 3.5rem;
        }
        .img{
            width: 3rem;
            height:3rem;
            line-height:2.8rem;
        }
        .add{
            height: 2.9rem;
            p{font-size: 0.1rem;}
        }
     }
     
   }
 }
</style>
