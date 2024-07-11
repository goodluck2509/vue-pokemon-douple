<template>
  <nav>
    <ul class="nav-link">
        <!-- <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="about">About</a></li>
        <li><a href="coins">Coins</a></li> -->
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/products">Products</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/coins">Coins</router-link></li>
        </ul>
  </nav>
</template>

<script>
export default {
name: "Navbar"
}
</script>

<style>
nav {
    /* background: green; */
    color: white;
    text-align: center;
    /* padding: 10px; */
}
nav ul.nav-link{
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    padding: 0;
}
ul {
  background: #1F568B;
  list-style-type: none;
  text-align: center;
}
li {
  color: #f1f1f1;
  display: inline-block;
  width: 120px;
  height: 40px;
  line-height: 40px;
  margin-left: -5px;
}
a {
  text-decoration: none;
  color: #fff;
  display: block;
}
a:hover {
  background: #F1F1F1;  
  color: #333;
}
</style>