<template>
  <div>Component 2: {{msg}}</div>
</template>

<script>
// import emitter from 'tiny-emitter/instance'

export default {
  name: "HelloWorld2",
  data() {
    // return {
    //   msg: 'Hello many'
    // }
  },
  // mounted() {
  //   emitter.on('inputData' ,payLoad => {
  //     console.log("payLoad",payLoad)
  //     this.msg = payLoad;
  //   });
  // }
  // ,
   computed: {
    msg() {
      return this.$store.getters.MESSAGE;
    }
  }
};
</script>


