<template>
  <div id="app">

    <nav>
      <div id="usernameBox"><Username Username="XxToxicGeckoxX"/></div>
      <router-link class="navItems" id="homeButton"  to="/">Home</router-link>
      <router-link class="navItems" to="/HighScores">High Scores</router-link>
      <router-link class="navItems" to="/Game">Game</router-link>
    </nav>

    <router-view/>

  </div>
</template>

<script>
import Username from '@/components/Username.vue'

export default {
  name: 'home',
  components: {
    Username
  }
}

</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  border: 0;
  margin: 0;
}

nav {
  margin: 35px;
  border-radius: 100px;
  background-color: rgb(35, 35, 35);
  font-size: 18px;
  overflow: hidden;
}

.navItems {
  padding: 19px;
  margin-left: 20px;
  font-weight: bold;
  color: #919191;
  text-decoration: none;
  text-align: center;
  display: block;
  float: right;
}

.navItems:hover {
  background-color: rgb(121, 111, 111);
}

.navItems:active {
  background-color: rgb(90, 90, 90);
  color: #15be15;
}

#homeButton {
  margin-left: 30px;
  float: left;
}

nav a.router-link-exact-active {
  color: #15be15;
}

#usernameBox {
  margin-left: 15px;
  margin-right: 10px;
  font-weight: bold;
  text-align: center;
  display: block;
  float: left;
}
</style>
