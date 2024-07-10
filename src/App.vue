<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <main-screen v-if="statusMatch === 'default' " @onStart="onHandleBeforeStart"/>
  <interact-screen v-if="statusMatch === 'match' " :cardsContext="settings.cardsContext"
/>
  <!-- <MainScreen/> -->
  <!-- <InteractScreen/> -->
</template>

 <script>
// import HelloWorld from './components/HelloWorld.vue'
import MainScreen from './components/MainScreen.vue'
import InteractScreen from './components/InteractScreen.vue'

import {shuffled} from "./utils/array.js"

export default {
  name: 'App',
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

    this.statusMatch = "match"
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
