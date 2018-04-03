<style scoped>
.addBtn{
  width: 100px;
  height: 40px;
  background-color: #eee;
  text-align: center;
  font-size: 20px;
  color: #000;
}
</style>

<template>
  <div>
    <button v-on:click="incre" class="addBtn">累加</button>
    <div>count: {{count}}</div>
    <div>use getters: {{ah}}</div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  data(){
    return {};
  },
  computed: {
    ...mapState([
      // 映射 this.count 为 store.state.count
      'count'
    ]),
    ...mapGetters({
      ah: 'appendHead'
    })
  },
  methods: {
    incre(){
      this.$store.commit('increment');
    }
  }
}
</script>