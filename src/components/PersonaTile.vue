<template>
  <div class="persona">
    <img :src="imgSrc" class="img"/>
  </div>

</template>

<script>
import shanieImg from '../assets/peopleImages/shanilock.jpeg';
export default {
name: "PersonaTile",
  props:{},
  data(){
  return {};
  },
  computed:{
    imgSrc(){
      return shanieImg;
    }
  }
}
</script>

<style scoped>
.persona{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /*width: 100px;*/
  /*height: 70%;*/
  width:200px;
  height: 300px;
  border-radius: 4px;
  border: 1px solid gray;
  overflow: hidden;
  cursor: pointer;
  /*display: flex;*/
  /*flex-direction: row;*/
}
.img{
  /*width: 100%;*/
  /*height: 70%;*/
}

</style>
