<template>
  <div id="bind">
    <div class="phone_area">
      <!--手机绑定-->
      <div>
        <div class="phone_bg">
          <div>
            <div class="phone_input">
              <input type="tel" class="weui-input" placeholder="请输入手机号" @touchend="textField.keyboardType = UIKeyboardTypeNumberPad" v-model="mobileNum">
              <span @touchmove="move" @touchend="sendCode" v-if="!isSend">发送验证码</span>
              <span v-if="isSend" class="isSend_btn">已发送 {{ num===null?'':num }}</span>
            </div>
            <div class="phone_input">
              <input type="password" class="weui-input" placeholder="请输入验证码" v-model="code">
            </div>
          </div>
        </div>
       <!-- <div class="phone_card">
          <div>
            <div>
              <select class="weui-select" v-model="card">
                <option value="-1">请选择证件类型</option>
                <option :value="item.value" v-for="item in cardList">{{ item.name }}</option>
              </select>
              <i class="fa fa-sort-down"></i>
            </div>
            <div>
              <div class="phone_input">
                <input type="tel" class="weui-input" placeholder="请输入证件号" v-model="idCard" @touchend="textField.keyboardType = UIKeyboardTypeNumberPad">
              </div>
            </div>
          </div>
        </div>-->
        <div style="margin-top: 25px">
          <span class="input_checkBox" :class="{input_checkBox_bg: hasChecked}" @click="agree"><i class="fa fa-check"></i></span>
          <span style="margin-left: 5px;font-size: 15px">绑定微信</span>
        </div>
        <div class="phone_btn">
          <a class="weui-btn weui-btn_primary" @touchmove="move" @touchend="sendBind">提交绑定</a>
        </div>
      </div>
    </div>
    <div class="js_dialog" id="iosDialog2" v-if="dialog">
      <div class="weui-mask"></div>
      <div class="weui-dialog">
        <div class="weui-dialog__bd">弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内</div>
        <div class="weui-dialog__ft">
          <a class="weui-dialog__btn weui-dialog__btn_primary" @click="dialog = false">知道了</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import urls from '@/store/urls'
  import {mapState} from 'vuex'
    export default {
        name: "bind-wechat",
      data(){
          return{
            cardList: [
              {name: '身份证', value: 0},
              {name: '军官证', value: 1},
              {name: '护照', value: 2}
            ],
            card: -1,
            isSend: false,
            num: null,
            watchTouch: false,
            dialog: false,
            idCard: null,
            hasChecked: true,
            mobileNum: '',
            code: '',
            codeToken: window.localStorage.wechat_user_token
          }
      },
      computed: mapState([
        'bindWechat'
      ]),
      mounted(){
        document.title = this.bindWechat
        /*监听微信回退按钮*/
        window.addEventListener("popstate", function(e) {

        }, false)
      },
      methods: {
        sendCode: function (e) {
          if (isNaN(Number(this.idCard))) {
            this.dialog = true
            this.isSend = false
            return
          }
          if (this.watchTouch === true) {
            this.watchTouch = false
            this.isSend = false
            return
          }
          this.isSend = true
          this.num = 60
          let number = setInterval(()=>{
            this.num--
          },1000)
          setTimeout(()=>{
            $(e.target).css({
              backgroundColor: '#78da77'
            })
            clearInterval(number)
            this.num = null
            this.isSend = false
          },60000)
        },
        move: function () {
          this.watchTouch = true
        },
        agree: function () {
          this.hasChecked = !this.hasChecked
        },
        sendBind: function () {
          if (this.watchTouch === true) {
            this.watchTouch = false
            return
          }
          let data = new Object()
          data.mobile = this.mobileNum
          data.code = this.code
          data.codeToken = this.codeToken
          this.$http({
            url: urls.baseUrl + urls.login + '&timestamp=' + (new Date().getTime()),
            data: data
          }).then(res=>{

          })
        }
      }
    }
</script>

<style scoped>

</style>
