<template>
  <section id="member" class="combo_contain">
    <div class="member_card">
      <div class="member_card_bg"></div>
      <p class="member_card_num">
        <label>卡号:</label>
        <span>5201426500</span>
      </p>
      <div class="member_card_money">
        <div>
          <label>余额：</label>
          <span>20元</span>
        </div>
        <div>
          <label>积分：</label>
          <span>50</span>
        </div>
      </div>
    </div>
    <div class="member_orderList">
      <ul>
        <li v-for="item in orderList" class="member_orderList_detail">
          <i class="fa fa-sort-up"></i>
          <p class="order_consume" @touchmove="move" @touchend="consume">订单消费</p>
          <div class="order_consume_control">
            <span>RO20171221</span>
            <span>2017-12-21</span>
          </div>
          <section class="order_hidden_dg">
            <div>
              <label>订单号:</label>
              <span>RO20171221</span>
            </div>
            <div>
              <label>日期:</label>
              <span>2017-02-01</span>
            </div>
            <div>
              <label>余额变化:</label>
              <span>2017-02-01</span>
            </div>
            <div>
              <label>积分变化:</label>
              <span>2017-02-01</span>
            </div>
          </section>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  import {mapState} from 'vuex'
    export default {
      name: "member",
      data () {
          return {
            orderList: [
              {},
              {},
              {},
              {},
              {}
            ],
          }
      },
      computed: mapState([
        'page3'
      ]),
      mounted() {
        document.title = this.page3
      },
      methods: {
        move: function () {
          this.watchTouch = true
        },
        consume: function (e) {
          if (this.watchTouch === true) {
            this.watchTouch = false;
            return
          }
          if ($(e.target).siblings('.order_hidden_dg').css('display') === 'none') {
            $(e.target).siblings('.order_consume_control').slideUp()
            $(e.target).siblings('i').css({
              transform: 'rotate(180deg)'
            })
            $(e.target).siblings('.order_hidden_dg').slideDown()
          } else {
            $(e.target).siblings('.order_consume_control').slideDown()
            $(e.target).siblings('i').css({
              transform: 'rotate(90deg)'
            })
            $(e.target).siblings('.order_hidden_dg').slideUp()
          }
        },
      }
    }
</script>

<style scoped>

</style>
