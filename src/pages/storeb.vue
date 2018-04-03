<style scoped>
.Btn{
  width: 100px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  background-color: #ddd;
  font-size: 20px;
  color: #000;
}
</style>

<template>
  <div>
    <button v-on:click="decre" class="Btn">递减</button>
    <div>sync from action storeA: {{count}}</div>
    <button v-on:click="pload" class="Btn">提交载荷</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data(){
    return {};
  },
  computed: mapState([
    'count'
  ]),
  methods: {
    decre(){
      this.$store.commit('decrement');
    },
    pload(){
      this.$store.commit('payload', {
        count: this.count,
        name: 'hardog'
      });
    }
  }
}
</script>