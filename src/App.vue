<template>
  <!-- <div id="app"> -->
    <!-- <img src="./assets/logo.png"> -->

    <div class="page-container md-layout-column">
      <Toolbar />
      <router-view/>
    </div>
  <!-- </div> -->
</template>

<script>
import Toolbar from '@/components/Toolbar'
export default {
  name: 'App',
  components: { Toolbar },
  computed: {
    token() {
      console.log(this.$store.state)
      return this.$store.state.auth.token
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
