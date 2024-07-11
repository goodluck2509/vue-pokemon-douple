<template>
  <!-- <h1>Products</h1> -->
  <main-screen v-if="statusMatch === 'default' " @onStart="onHandleBeforeStart"/>
  <interact-screen v-if="statusMatch === 'match' " :cardsContext="settings.cardsContext"/>
  <!-- <MainScreen/> -->
  <!-- <InteractScreen/> -->
</template>

<script>



import MainScreen from './MainScreen.vue'
import InteractScreen from './InteractScreen.vue'

import {shuffled} from "../utils/array"


export default {
  name: 'Products',
  data(){
    return {
      settings: {
        totalOfBlocks: 0,
        cardsContext: [],
      },
        statusMatch: "default",
    }
  },
  components: {
    MainScreen,
    InteractScreen
  },
  methods:{

    onHandleBeforeStart(config){
      console.log("runing hanlde before start", config)
    //data ready
    this.settings.totalOfBlocks = config.totalOfBlocks;
    
    const firstCards = Array.from({length: this.settings.totalOfBlocks/2}, (_,i)=> i+ 1);
    console.log("datafirstCards",firstCards)
    const secondCards = [...firstCards]
    const card = [...firstCards,...secondCards]
    console.log(card);

    this.settings.cardsContext = shuffled(shuffled(shuffled(shuffled(card))))

    console.log("test o day",this.settings.cardsContext);

    this.statusMatch = "match";
    
    }
  },
}
</script>

<style>

</style>
