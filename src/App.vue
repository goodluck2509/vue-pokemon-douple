<template>
  <Navbar/>
  <router-view/>
    <div>
        <p>Click A {{ clickA() }} times</p>
        <p>Click B {{ clickB() }} times</p>
        <button v-on:click="a++">Click A</button>
        <button v-on:click="b++">Click B</button>
    </div>
    <h3>{{message}}</h3>
    <HelloWorld msg="Welcome to Your Vue.js App"  @inputData="updateMessage"/>
    <hr />
    <HelloWorld2 />

  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <main-screen v-if="statusMatch === 'default' " @onStart="onHandleBeforeStart"/>
  <interact-screen v-if="statusMatch === 'match' " :cardsContext="settings.cardsContext"
/>
  <!-- <MainScreen/> -->
  <!-- <InteractScreen/> -->
   <p> {{ info }}</p>
</template>

 <script>
import HelloWorld from './components/HelloWorld.vue'
import HelloWorld2 from './components/HelloWorld2.vue'


import axios from 'axios';


// export default EventBus;

import MainScreen from './components/MainScreen.vue'
import InteractScreen from './components/InteractScreen.vue'
import Navbar from "./components/Navbar.vue"

import {shuffled} from "./utils/array.js"

export default {
  name: 'App',
  data(){
    return {
      a: 0,
      b: 0,
      settings: {
        totalOfBlocks: 0,
        cardsContext: [],
      },
        statusMatch: "default",
        message: 'Message default',
           info: null
    }
  },
  components: {
    HelloWorld,
    HelloWorld2,
    Navbar,
    MainScreen,
    InteractScreen
  },
  methods:{

      clickA: function () {
            console.log('gọi method clickA')
            return this.a
        },
        clickB: function () {
            console.log('gọi method clickB')
            return this.b
        },
    updateMessage(mes) {
      this.message = mes;
    },
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
  mounted(){
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response))
 
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
