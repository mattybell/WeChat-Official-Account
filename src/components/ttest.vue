<template>
  <div :title="tttt">
    {{tttt}}
  </div>
</template>

<script>
    export default {
        props:{
          tttt: {
            type: String
          }
        }
    }
</script>

<style scoped>

</style>
