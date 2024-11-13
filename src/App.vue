<template>

  <router-view/>

  <Navbar @isActive="SearchBarActive = true" />
  <Search-bar :isActive="SearchBarActive" />


</template>


<script>
import Navbar from "./layouts/navbar.vue";
import SearchBar from "./layouts/search-bar.vue";
import Home from "./views/home/index.vue";
export default {
  components: { Home, Navbar, SearchBar },

  data() {
    return {
      SearchBarActive: false,
    };
  },
};
</script>



<style lang="scss">
@import "./assets/styles/main.scss";
</style>
