<template>
  <div>
    <div class="title" v-html="title"/>
    <div class="upper-containrer">
      <div class="map">
        <reactive-map :points="markersData"/>
      </div>
<!--      <div class="tiles">-->
<!--        <div v-for="index in 3" :key="index"  @click="handleTileClicked">-->
<!--          <persona-tile class="persona-tile"/>-->
<!--        </div>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>
import { MAIN_PAGE_TITLE } from '../const';
import ReactiveMap from './ReactiveMap.vue';
// import PersonaTile from './PersonaTile.vue';

export default {
  name: "MainPage",
  components: {
    ReactiveMap,
    // PersonaTile
  },
  data() {
    return {
      title: MAIN_PAGE_TITLE,
      colorMapping: {
        MURDERED: '#b35454',
        IN_DUTY: '#63885b',
        WAS_HOSTAGE: '#8169cf',
        EVENT: '#e5c05c',
      }
    };
  },
  computed: {
    markersData(){
      return  [
        { coordinates: [ 34.458178, 31.385816], color: this.colorMapping.MURDERED, name: 'Shanie Luck' },
        { coordinates: [ 34.461448, 31.39442], color: this.colorMapping.MURDERED, name: 'Arik Peretz' },
        { coordinates: [ 34.461429, 31.384444], color: this.colorMapping.MURDERED, name: 'Rut Peretz' },
        { coordinates: [ 34.620517, 31.309248], color: this.colorMapping.WAS_HOSTAGE, name: 'Rachel Edry' },
        { coordinates: [ 34.570469,  31.520424], color: this.colorMapping.IN_DUTY, name: 'Inbal Liberman' },
        { coordinates: [ 34.489519, 31.424664], color: this.colorMapping.MURDERED, name: 'Amit Mann' },
        { coordinates: [ 34.400253, 31.314134], color: this.colorMapping.MURDERED, name: 'Noya Dan' },
        { coordinates: [ 34.496875, 31.470017], color: this.colorMapping.MURDERED, name: 'Roni Eshel' },
        { coordinates: [34.445979, 31.387082], color: this.colorMapping.EVENT, name: 'Nova Festival', radius: 6 },
        { coordinates: [34.487041, 31.422160], color: this.colorMapping.EVENT, name: 'Beeri', radius: 6 },
        { coordinates: [34.496188, 31.473805], color: this.colorMapping.EVENT, name: 'Nahal Oz', radius: 6 },
      ]
    }
  },
  methods: {
    handleTileClicked(){
      // eslint-disable-next-line no-debugger
      // debugger;
      // this.$router.push({ path: `/personaPage/`, query: { ruti: 11 } }); // Navigates to Details with id as a parameter

    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lilita+One&family=Montserrat&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Alef&display=swap');

.title{
  font-size: 32px;
  font-family: 'Alef', sans-serif;
  padding-bottom: 16px;
  text-align: right;
  padding-right: 55px;
}
.upper-containrer{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 8px
}
.persona-tile{
  /*width:200px;*/
  /*height: 400px;*/
  /*border-radius: 4px;*/
  /*border: 1px solid gray;*/
  /*overflow: hidden;*/
  /*cursor: pointer;*/
  /*display: flex;*/
  /*flex-direction: row;*/
}
.persona-tile:hover{
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* Box shadow */
}
.map{
  border-radius: 4px;
  overflow: hidden;
}
.box{
  width:300px;
  height:300px;
}
.tiles{
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
}
</style>
