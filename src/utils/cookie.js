//获取cookie、 在页面的 beforeMount()里取
export function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
      return (arr[2]);
    else
      return null;
  }   //组件里调用 this.$getCookie( 'name')
  
  //设置cookie,增加到vue实例方便全局调用
  export function setCookie (c_name, value, expiredays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
  }; //this.$setCookie( 'name' , this.ruleForm2.name)
  //‘name’是你自己取得名字，后面的this.ruleForm2.name一个input内v-model的
  
  //删除cookie
  export function delCookie (name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
     document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
  };// this.$delCookie( 'name');
