<template>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <nuxt-link to="/"><a class="navbar-brand">FASHION</a></nuxt-link>
  <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button> -->
      <nuxt-link to="/men"><a class="nav-item nav-link active">MEN</a></nuxt-link>
      <nuxt-link to="/women"><a class="nav-item nav-link">WOMEN</a></nuxt-link>
      <nuxt-link to="/kids"><a class="nav-item nav-link">KIDS</a></nuxt-link>
      <nuxt-link to="/about"><a class="nav-item nav-link">ABOUT</a></nuxt-link>
</nav>

</template>

<script>
export default {

}
</script>

<style scoped>
/* .navbar{
  color: #fff;
  background-color: #D4AF37;
} */
</style>
