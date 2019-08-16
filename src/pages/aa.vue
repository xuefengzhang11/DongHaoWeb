
<template>
  <div class="box">
   <div>{{showmsg}}</div>
            <input v-model="value" placeholder="请输入..." />
            <Button type="info" @click="sendMsg">信息按钮</Button>

  </div>
</template>
<script>
import signalR from 'signalr'
  export default {
    name: "aa",
    data() {
      return {
        value: "",
              showmsg: "",
              proxy: {}
      };
    },
    mounted() {
     this.connectServer();
    },
    
    methods: {
      //与后端链接的接口
       connectServer() {
            var $this = this;
            //如果前后端为同一个端口，可不填参数。如果前后端分离，这里参数为服务器端的URL
            var conn = $.hubConnection("http://10.10.10.103:12345/chatHub/hubs", { useDefaultPath: false })
            //broadcastHub是后端给的
            $this.proxy = conn.createHubProxy("broadcastHub");
            //broadcastMessage是后端给的
            $this.proxy.on("broadcastMessage", (data) => {
                $this.showmsg+= data;
                console.log('demo ReceiveMsg:', data)
            })
            // conn.start()成功后才表示signaIR连接成功
            conn.start().done((data) => {
                $this.sendMsg()
            }).fail((data) => {
              console.log('conn fail')
            });
        },
        //发送ajax
        sendMsg() {
          console.log('1111')
        }
    }
  }
</script>
<style lang="scss" scoped>
.box{
            background-color: #99CCFF;
            border: thick solid #808080;
            padding: 20px;
            margin: 20px;
        }
</style>