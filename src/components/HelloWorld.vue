<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
    <input
      placeholder="Enter Text Here"
      v-model="tempMessage"
    />
    <div>
      <button @click="sendMessage">@Emit event</button>
    </div>
  </div>
  </div>
  <div>
    <h1>infor</h1>
    <h2>{{username}}</h2>
    <h2>{{age}}</h2>
    <br/>
     <input
      placeholder="Nhập vào đây"
      v-model="usernameInput"
    />
    <div>
      <button @click="changeUsername">Change username</button>
    </div>
    <br/>
    <div>
      <div>{{getUsername}}</div>
      <div>{{getAge}}</div>
    </div>
  </div>
  <div>
  </div>
    <div class="fetchdata">
		<h1>{{ msg }}</h1>
		<button @click="fetchData">Click Me!</button>
	</div>
</template>

<script>

// phan event bus
// import emitter from 'tiny-emitter/instance'

import { mapGetters } from 'vuex';


export default {
  name: 'HelloWorld',
  data() {
    return {
      tempMessage: '',
      usernameInput: '',
    }
  },
  props: {
    msg: String
  },
  methods: {
    // truyen prop con sang cha dung emit
    // sendMessage() {
    //   this.$emit('inputData', this.tempMessage);
    //   this.tempMessage = '';
    // }
    // event bus
    // sendMessage() {
    //   emitter.emit('inputData', this.tempMessage);
    //   this.tempMessage = '';
    // }

    //vuex
    changeUsername(){
        this.$store.dispatch('handleChangeUsername', this.usernameInput)
      }
  },
  computed:{
    usename(){
      return this.$store.state.username;
    },
    ...mapGetters(['getUsername','getAge'])
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

button {
	padding: 5px 5px;
	font-size: 15px;
}
</style>
