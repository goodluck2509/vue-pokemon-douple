<template>
  <h1>Contact</h1>
  <h4> Địa chỉ: {{ address }} </h4>
  <h4>SĐT: {{ phone }}</h4>

  <!-- <p>A list of names: {{ names.join(', ') }}</p> -->
<label>
  <input type="checkbox" value="Daniel" v-model="names" />
  Daniel
</label>
<label>
  <input type="checkbox" value="Nathaniel" v-model="names" />
  Nathaniel
</label>
<label>
  <input type="checkbox" value="Hubert" v-model="names" />
  Hubert
</label>
</template>

<script>
export default {
name: "About",
 data() {
    return {
      address: 'Nhà số 1, Nguyễn Trãi',
      phone: '012345678'
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