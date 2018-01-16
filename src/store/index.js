import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    footer: true,
    page1: 'one',
    page2: 'two',
    page3: 'three',
    page4: 'four',
    page5: 'five',
    bindWechat: '微信绑定'
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--
    },
    changeFooterF(state) {
      state.footer = false
    },
    changeFooterT(state) {
      state.footer = true
    }
  },
  actions: {
    increment(context) {
      context.commit("increment");
    },
    decrement(context) {
      context.commit("decrement");
    },
    changeFooterF(context) {
      context.commit("changeFooterF");
    },
    changeFooterT(context) {
      context.commit("changeFooterT");
    }
  }
})

