<template>
  <div id="app" :style="{minHeight: appHeight}">
    <!--<div class="center">
      <img :src="logo" alt="logo" style="width: 100%">
    </div>-->
    <transition
      mode="out-in"
      enter-active-class="fadeInUp"
      leave-active-class="fadeOutDown"
      appear
    >
      <router-view class="animated content_center"></router-view>
    </transition>
    <footer-guid v-if="footer"></footer-guid>
  </div>
</template>

<script>
  import logo from '../src/assets/vue.png'
  import footerGuid from './components/footerGuid'
  import { mapState, mapActions } from 'vuex'
export default {
  name: 'app',
  components: {
    footerGuid
  },
  mounted(){
    this.redirect()
  },
  data () {
    return {
      logo: logo,
      appHeight: document.documentElement.clientHeight - 54.5 + 'px'
    }
  },
  computed: mapState([
    'count',
    'footer'
  ]),
  methods: {
    ...mapActions([
      'increment',
      'decrement',
      'changeFooterF'
    ]),
    redirect: function () {
      let loStore = {
        isNav:sessionStorage.isNav,
        isOrder:sessionStorage.isOrder,
        isMember:sessionStorage.isMember,
        isReport:sessionStorage.isReport,
        isUser:sessionStorage.isUser,
      }
      if (loStore.isNav) {
        this.$router.push({path: './index'})
      } else if (loStore.isOrder) {
        this.$router.push({path: './order'})
      } else if (loStore.isMember) {
        this.$router.push({path: './member'})
      } else if (loStore.isReport) {
        this.$router.push({path: './report'})
      } else if (loStore.isUser) {
        this.$router.push({path: './user'})
      } else {
        this.$router.push({path: './index'})
      }
    }
  }
}
</script>
<style scoped>
  #app{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
.center{
  margin: 0 auto;
  width: 25%;
}
  .content_center{
    width: 100%;
  }
</style>

