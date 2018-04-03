<style scoped>
input{
  width: 40px;
  font-size: 20px;
  line-height: 1em;
  text-align: center;
}
.results{
  width: 40px;
  font-size: 20px;
  text-align: center;
  color: #f00;
}
</style>

<template>
  <div>
    <h1>Simple sum</h1>
    <input v-model="a" v-on:focus="focusa">
    <label>+</label>
    <input v-model="b" v-on:focus="focusb">
    <label>=</label>
    <label class="results">{{c}}</label>
  </div>
</template>

<script>

export default{
  data(){
    return {
      a: 0,
      b: 0
    };
  },
  computed: {
    c(){
      let a = (parseInt(this.a, 10) || 0);
      let b = (parseInt(this.b, 10) || 0);
      return (a + b);
    }
  },
  methods: {
    focusa(){
      this.a = '';
    },
    focusb(){
      this.b = '';
    }
  }
}
</script>