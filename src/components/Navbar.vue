<template>
  <nav>
    <h1>My Vue</h1>
    <ul class="nav-link">
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="about">About</a></li>
        <li><a href="coins">Coins</a></li>
        <!-- <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/products">Products</router-link></li>
        <li><router-link to="/about">About</router-link></li> -->
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
    background: green;
    color: white;
    text-align: center;
    padding: 10px;
}
nav ul.nav-link{
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    padding: 0;
}
</style>