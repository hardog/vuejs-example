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
    <h3>Payload From storeb</h3>
    <div>{{payload}}</div>
    <h3>Ajax Request with axios</h3>
    <button v-on:click="req" class="Btn">查询</button>
    <div><img :src="user.avator"/></div>
    <div>Return: {{JSON.stringify(user)}}</div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data(){
    return {};
  },
  computed: {
    ...mapState({
      payload: 'pload',
      user: 'user'
    })
  },
  methods: {
    ...mapActions(['query']),
    req(){
      this.query('ncuzp');
    }
  }
}
</script>