<template>
  <article id="article" class="combo_contain">
    <!--资讯列表-->
    <div class="article_list" v-for="item in articleList">
      <div class="article_content">
        <div class="article_title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus asperiores atque autem culpa dolor eius fugit harum, illo iure natus numquam quaerat quas rerum sit temporibus! Eaque provident quo unde!</div>
        <div class="article_time">2017-04-03</div>
      </div>
      <div class="article_img">
        <img :src="logo" @click="testWeb">
      </div>
    </div>
  </article>
</template>

<script>
  import logo from '../assets/vue.png'
  import { mapState, mapActions } from 'vuex'
    export default {
      name: "index",
      data () {
          return {
            logo: logo,
            articleList: [
              {name: ''},
              {name: ''},
              {name: ''},
              {name: ''},
              {name: ''},
              {name: ''},
              {name: ''},
              {name: ''},
              {name: ''}
            ],
            clicked: true
          }
        },
      computed: mapState([
        'page1'
      ]),
      create () {

        // source.cancel('Operation canceled by the user.');
      },
      mounted(){
        document.title = this.page1
      },
      methods: {
        ...mapActions([
          'changeFooterF',
          'changeFooterT'
        ]),
        jump: function () {

        },
        testWeb: function () {
          this.$router.push({name:'bind-wechat'})
          this.changeFooterF()
        },
      }
    }
</script>

