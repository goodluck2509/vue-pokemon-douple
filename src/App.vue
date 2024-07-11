<template>
  <Navbar/>
  <router-view/>
    <!-- <h3>{{message}}</h3>
    <h4>{{ userName}}</h4>
    <p>Đây là demo template {{text}}</p> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"  @inputData="updateMessage"/>
    <HelloWorld2 /> -->
 
   <!-- <p> {{ info }}</p> -->
</template>

 <script>

// import HelloWorld from './components/HelloWorld.vue'
// import HelloWorld2 from './components/HelloWorld2.vue'

// import axios from 'axios';

import Navbar from "./components/Navbar.vue"

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
        userName : "Nguyen Van A",
        text: "Vue"
        //info: null
    }
  },
  components: {
    // HelloWorld,
    // HelloWorld2,
    Navbar,
    // MainScreen,
    // InteractScreen
  },
  methods:{
    updateMessage(mes) {
      this.message = mes;
    },
  },
  // mounted(){
  //   axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
  //     .then(response => (this.info = response))
 
  // }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
