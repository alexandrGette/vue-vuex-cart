<template>
  <div id="app">
    <div class="container">
      <Cart />
      <Products />
    </div>
  </div>
</template>

<script>
import Cart from "./components/Cart.vue";
import Products from "./components/Products.vue";
import style from "./assets/style/style.css";
import normalize from "./assets/style/normalize.css";

export default {
  name: "App",
  components: {
    Cart,
    Products,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
