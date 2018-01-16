import urls from '../store/urls'
export default (function () {
  function getRequestParams() { //截取code
    let url = location.search; //获取url中"?"符后的字串
    let theRequest = new Object();
    if (url.indexOf("?") !== -1) {
      let str = url.substr(1);
      strs = str.split("&");
      for(let i = 0; i < strs.length; i ++) {
        theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
      }
    }
    return theRequest;
  }
  if(getRequestParams().code){
    if(window.localStorage.wellxun_cstore_wechat_code === getRequestParams().code){

    }else{
      window.localStorage.wellxun_cstore_wechat_code = getRequestParams().code;
      $.ajax({
        type : 'get',
        url : urls.wechatBackstage + '?openIdcode=' + getRequestParams().code,
        dataType: 'json',
        success : function(data){
          if(data.rs.bind){
            window.localStorage.wechat_user_token = data.rs.token;

          }else{
            window.location.href = 'http://www.baidu.com';/*--------地址替换微信公众号重定向地址------*/
          }
        },
        error : function(data){

        }
      });
    }
  }else{
    if(window.localStorage.wechat_user_token){

    }else{

    }
  }
})()


