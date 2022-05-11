<template>
  <div id="app">
    <nav id="nav">
      <router-link to="/">Homepage</router-link> |
      <router-link to="/catalog">Catalog</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>

export default{
  components: {
  }
}
</script>

<style lang="scss">

</style>
