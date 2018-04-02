<style scoped>
div{
  font-size: 40px;
  color: #000000;
}
</style>

<template>
  <div>
    <h4>hardog, 27 years old</h4>
    <div> {{msg}}</div>
    <img :src="imgUrl"/>
    <img :src="largeUrl"/>
  </div>
</template>

<script>
import shareImg from '@assets/share.png';
import largeImg from '@assets/large.png';

export default{
  data(){
    return {
      msg: 'hello world',
      imgUrl: shareImg,
      largeUrl: largeImg
    };
  }
}
</script>