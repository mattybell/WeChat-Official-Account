<template>
  <footer id="footerGuid">
    <ul>
      <li @click="toNav" :class="{footer_color: isNav}">
        <i class="fa fa-2x fa-home"></i>
        <span>{{ page1 }}</span>
      </li>
      <li @click="toOrder" :class="{footer_color: isOrder}"><!--@touchmove="move" @touchend="toOrder"-->
        <i class="fa fa-2x fa-print"></i>
        <span>{{ page2 }}</span>
      </li>
      <li @click="toMember" :class="{footer_color: isMember}">
        <i class="fa fa-2x fa-id-card"></i>
        <span>{{ page3 }}</span>
      </li>
      <li @click="toReport" :class="{footer_color: isReport}">
        <i class="fa fa-2x fa-file-text-o"></i>
        <span>{{ page4 }}</span>
      </li>
      <li @click="toUser" :class="{footer_color: isUser}">
        <i class="fa fa-2x fa-user-circle-o"></i>
        <span>{{ page5 }}</span>
      </li>
    </ul>
  </footer>
</template>

<script>
  import { mapState } from 'vuex'
    export default {
        name: "footerGuid",
      data () {
        return {
          watchTouch: false,
          isNav: sessionStorage.isNav,
          isOrder: sessionStorage.isOrder,
          isMember: sessionStorage.isMember,
          isReport: sessionStorage.isReport,
          isUser: sessionStorage.isUser,

        }
      },
      created () {
        this.setIndex()
      },
      watch: {

      },
      computed: mapState([
        'page1',
        'page2',
        'page3',
        'page4',
        'page5',
      ]),
      methods: {
        setIndex: function () {
          let a = sessionStorage.isNav
          let b = sessionStorage.isOrder
          let c = sessionStorage.isMember
          let d = sessionStorage.isReport
          let e = sessionStorage.isUser
          if (!a && !b && !c && !d && !e) {
            sessionStorage.isNav = true
          }
        },
        reset: function () {
          this.isNav = false;
          this.isOrder = false;
          this.isMember = false;
          this.isReport = false;
          this.isUser = false;
          sessionStorage.removeItem('isNav')
          sessionStorage.removeItem('isOrder')
          sessionStorage.removeItem('isMember')
          sessionStorage.removeItem('isReport')
          sessionStorage.removeItem('isUser')
        },
        move: function () {
          this.watchTouch = true
        },
        toNav: function () {
          if (this.watchTouch === true) {
            this.watchTouch = false;
            return
          }
          $(document).scrollTop(0);
          this.reset();
          this.isNav = true
          this.$router.push({path: '/index'})
          sessionStorage.isNav = true
        },
        toOrder: function () {
          if (this.watchTouch === true) {
            this.watchTouch = false;
            return
          }
          $(document).scrollTop(0);
          this.reset();
          this.isOrder = true
          this.$router.push({path: '/order'})
          sessionStorage.isOrder = true
        },
        toMember: function () {
          if (this.watchTouch === true) {
            this.watchTouch = false;
            return
          }
          $(document).scrollTop(0);
          this.reset();
          this.isMember = true
          this.$router.push({path: '/member'})
          sessionStorage.isMember = true
        },
        toReport: function () {
          if (this.watchTouch === true) {
            this.watchTouch = false;
            return
          }
          $(document).scrollTop(0);
          this.reset();
          this.isReport = true
          this.$router.push({path: '/report'})
          sessionStorage.isReport = true
        },
        toUser: function () {
          if (this.watchTouch === true) {
            this.watchTouch = false;
            return
          }
          $(document).scrollTop(0);
          this.reset();
          this.isUser = true
          this.$router.push({path: '/user'})
          sessionStorage.isUser = true
        },
      }
    }
</script>


