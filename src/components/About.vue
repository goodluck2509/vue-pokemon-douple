<template>
  <h1>About</h1>
  <h4> {{ name }}</h4>
  <h4> Age: {{ age}}</h4>
  <h4 v-pre> Age: {{ age}}</h4>
    <p>
      <a class="about-link" v-bind:href="link">Click link</a>
    </p>
    <p v-html="content"></p>
    <!-- <h4>content: {{ content}}</h4> -->
    <button disabled="isDisable">Bam vao day</button>
</template>

<script>
export default {
name: "About",
 data() {
    return {
      name: 'Nguyễn Văn A',
      age: 10,
      link: "https://www.google.com.vn",
      content: '<strong>Nội dung in đậm<strong/>',
      isDisable: true,
    }
  },
}
</script>

<style>
h4{
  padding: 5px;
}
.about-link {
  color: rgb(55, 13, 204);
}
button{
  margin-right: 5px;
}
</style>