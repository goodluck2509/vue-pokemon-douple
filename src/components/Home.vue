<template>
  <h1>Home Page</h1>
  <div>
    <p>Click A {{ clickA() }} times</p>
    <p>Click B {{ clickB() }} times</p>
    <button v-on:click="a++">Click A</button>
    <button v-on:click="b++">Click B</button>
  </div>
</template>

<script>
export default {
    name: "Home",
    data(){
    return {
      a: 0,
      b: 0,
    }
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
  },
}
</script>

<style>

</style>