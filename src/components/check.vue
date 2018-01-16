<template>
  <div>
    <button @click="fff">asdas</button>
  </div>
</template>

<script>
    export default {
        name: "check",
        methods: {
          fff: function () {
            this.$http.get('http://172.26.2.223:8090/cpms/sample/GetSampleList/v1.0', {
              params: 123465
            }).then(res=>{
              console.log(res)
            }).catch(err=>{
              console.log(err)
            })
          }
        }
    }
</script>

<style scoped>

</style>
