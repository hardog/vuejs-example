<style scoped>
.wrapper{
  height: 800px;
  background-color: #eeeeee;
  overflow-y: scroll;
}
</style>

<template>
  <div class="wrapper">
    <h3>Pages Example</h3>
    <div class="links">
      <router-link to="/test">GoTest</router-link>
      <router-link to="/cal">GoCal</router-link>
      <h4>Use Component</h4>
      <router-link to="/compose">GoComponent</router-link>
      <h4>Use Store</h4>
      <router-link to="/storea">GoStoreA</router-link>
      <router-link to="/storeb">GoStoreB</router-link>
      <router-link to="/storec">GoStoreC</router-link>
      <h4>Use Split</h4>
      <router-link to="/split">GoSplit</router-link>
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