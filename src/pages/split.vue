<style scoped>

</style>

<template>
  <div>enter split, watch the devtool network</div>
</template>

<script>
export default {
  data(){
    return {};
  },
  created(){
    require.ensure(['@src/common/m1', '@src/common/m1'], function(require){
      const m1 = require('@src/common/m1');
      console.log('show m1:', m1.a());
      require('@src/common/m2');
    }, 'dep');
  }
}
</script>