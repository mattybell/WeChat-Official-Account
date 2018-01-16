<template>
  <section id="report" class="combo_contain">
    <div class="order_product_fa">
      <div class="order_product">
        <div>
          <!--<h6>订单号</h6>-->
          <!--<p>RO20171123001</p>-->
          <div class="order_list">
            <ul>
              <li>
                <p>report</p>
                <aside class="report_date">2017-12-20</aside>
                <a class="order_list_single">查看</a>
              </li>
              <li>
                <p>report</p>
                <aside class="report_date">2017-12-20</aside>
                <a class="order_list_single">查看</a>
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
      name: "report",
      data () {
        return {

        }
      },
      computed: mapState([
        'page4'
      ]),
      mounted() {
        document.title = this.page4
      },
    }
</script>

<style scoped>

</style>
