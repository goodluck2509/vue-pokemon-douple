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
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      tempMessage: ''
    }
  },
  props: {
    msg: String
  },
  methods: {
    sendMessage() {
      this.$emit('inputData', this.tempMessage);
      this.tempMessage = '';
    }
  }
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
</style>
