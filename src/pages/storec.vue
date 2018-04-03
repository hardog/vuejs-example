<style scoped>

</style>

<template>
  <div>
    <h3>Show Payload</h3>
    <div>{{payload}}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data(){
    return {};
  },
  computed: {
    ...mapState({
      payload: 'pload'
    })
  }
}
</script>