<style scoped>
.wrapper{
  height: 600px;
  background-color: #eeeeee;
}
</style>

<template>
  <div class="wrapper">
    <h3>Pages Example</h3>
    <div class="links">
      <router-link to="/test">GoTest</router-link>
      <router-link to="/cal">GoCal</router-link>
      <router-link to="/compose">GoComponent</router-link>
    </div>
    <hr/>
    <router-view></router-view>
  </div>
</template>

<script>

export default{
  data(){
    return {
    };
  }
}
</script>