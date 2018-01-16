<template>
  <section id="order" class="combo_contain">
    <div class="order_product_fa" v-for="item in orderProduct">
      <div class="order_product">
        <div>
          <transition :duration="{enter: 800, leave: 0}" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
            <a class="order_close" v-if="isCheckedArr" @touchmove="move" @touchend="shrink">
              <i class="fa fa-times"></i>
            </a>
          </transition>
          <h6>订单号</h6>
          <p>RO20171123001</p>
          <div class="order_list">
            <ul>
              <li v-for="val in productDetail">
                <p>i 健康</p>
                <transition :duration="{enter: 0, leave: 0}" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown" appear>
                  <a class="order_list_single" @touchmove="move" @touchend="check" v-show="!isChecked">查看</a>
                </transition>
                <transition :duration="{enter: 1000, leave: 0}" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown" appear>
                  <a class="order_arr_right" v-show="isChecked" @touchmove="move" @touchend="arrDetail">
                    <i class="fa fa-sort-up"></i>
                  </a>
                </transition>
                <transition :duration="{enter: 1000, leave: 0}" enter-active-class="animated slideDown" leave-active-class="animated slideUp" appear>
                  <div v-if="isArrDetail">asdas</div>
                </transition>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import {mapState} from 'vuex'
    export default {
      name: "order",
      data () {
        return {
          isCheckedArr: false,
          orderProduct: [
            {value:0},
            {value:1},
            {value:2},
            {value:3},
            {value:4},
          ],
          productDetail: [
            {},
            {},
            {}
          ],
          isMember: false,
          isChecked: false,
          isCheckedArr: false,
          offsetTop: '',
          offsetLeft: '',
          isArrDetail: false,
        }
      },
      computed: mapState([
        'page2'
      ]),
      mounted() {
        this.setTop()
        document.title = this.page2
      },
      methods: {
        setTop: function () {
          setInterval(function () {
            $('.order_product').each(function () {
              $(this).css({
                top: $(this).offset().top - $(document).scrollTop(),
                left: $(this).offset().left
              })
            })
          },100)
        },
        move: function () {
          this.watchTouch = true
        },
        check: function (e) {
          if (this.watchTouch === true) {
            this.watchTouch = false;
            return
          }
          this.offsetTop = $(e.target).parents('.order_product').offset().top-$(document).scrollTop();
          this.offsetLeft = $(e.target).parents('.order_product').offset().left;
          let h = $(e.target).parents('.order_product').outerHeight();
          let w = $(e.target).parents('.order_product').outerWidth();
          let that = this;
          that.isChecked = true;
          $("body").on("touchmove",function(event){
            event.preventDefault();
          },false);
          $(e.target).parents('.order_product_fa').css({
            height: h,
            width: w
          });
          $(e.target).parents('.order_product').css({
            zIndex: '999',
            position: 'fixed'
          }).animate({
            top: '0',
            left: '0',
            borderRadius: '0',
            minHeight: '100%'
          },500,function () {
            that.isCheckedArr = true
          }).find('li').animate({
            height: '45px'
          }).find('p').animate({
            lineHeight: '45px'
          });
          $(e.target).siblings('.order_arr_right').find('i').css({
            transform: 'rotate(180deg)'
          });
        },
        arrDetail: function (e) {
          if (this.watchTouch === true) {
            this.watchTouch = false;
            return
          }
          if ($(e.target).hasClass('order_arr_right')){

          } else {
            if ($(e.target).css('transform') === 'matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)') {
              $(e.target).css({
                transform: 'rotate(90deg)'
              })
            } else {
              $(e.target).css({
                transform: 'rotate(180deg)'
              })
            }
          }
        },
        shrink: function (e) {
          if (this.watchTouch === true) {
            this.watchTouch = false;
            return
          }
          this.isChecked = false;
          this.isCheckedArr = false;
          let that = this;
          $("body").off("touchmove");
          $('body').on('touchmove',function () {
            $('.order_product').each(function () {
              $(this).css({
                top: $(this).offset().top - $(document).scrollTop(),
                left: $(this).offset().left
              })
            })
          });
          $(e.target).parents('.order_product').css({
            zIndex: 'inherit'
          }).animate({
            borderRadius: '15px',
            width: '95%',
            minHeight: '20%',
            top: that.offsetTop,
            left: this.offsetLeft,
          },500,function () {
            $(this).css({
              position: 'inherit',
              width: '100%'
            })
          }).find('li').animate({
            height: '25px'
          }).find('p').animate({
            lineHeight: '25px'
          });
          $('.order_arr_right').find('i').css({
            transform: 'rotate(90deg)'
          })
        },
      }
    }
</script>

<style scoped>

</style>
