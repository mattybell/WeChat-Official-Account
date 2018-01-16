<template>
  <section id="toUser" class="combo_contain">
    <div class="order_product_fa">
      <div class="order_product">
        <div>
          <div class="order_list">
            <ul>
              <li class="user_list" v-for="item in nameList">
                <div class="user_pic">{{ item.single }}</div>
                <aside class="report_date">
                  <span>{{ item.name }}</span><br>
                  <span>{{ item.card }}</span>
                </aside>
                <a class="order_list_single disabled" v-if="item.activeUser">当前用户</a>
                <a class="order_list_single" @click="changeUser" v-if="!item.activeUser">切换用户</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!--弹窗-->
    <div class="js_dialog" v-if="changeUsr">
      <div class="weui-mask"></div>
      <div class="weui-dialog">
        <div class="weui-dialog__hd"><strong class="weui-dialog__title">切换用户</strong></div>
        <div class="weui-dialog__bd">确定切换至该用户？</div>
        <div class="weui-dialog__ft">
          <a class="weui-dialog__btn weui-dialog__btn_default" @click="changeUsr = false">取消</a>
          <a class="weui-dialog__btn weui-dialog__btn_primary" @click="makeChange">确定</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import {mapState} from 'vuex'
    export default {
      name: "user",
      data () {
        return {
          changeUsr: false,
          nameList: [
            {name: 'Bruce', card: '852417854245xxxx', activeUser: true},
            {name: 'Lee', card: '3352684525845541', activeUser: false},
            {name: '高大爷', card: '565985125315', activeUser: false}
          ]
        }
      },
      computed: mapState([
        'page5'
      ]),
      created() {
        this.names()
        document.title = this.page5
      },
      methods: {
        changeUser: function () {
          this.changeUsr = true
        },
        makeChange: function () {
          this.changeUsr = false
        },
        names: function () {
          for (let i in this.nameList) {
            let single = this.nameList[i].name.slice(0,1)
            this.nameList[i].single = single
          }
        },
      }
    }
</script>

<style scoped>

</style>
