<template>
  <div id="app">

    <nav>
      <div id="usernameBox"><Username Username="XxToxicGeckoxX"/></div>
      <router-link class="navItems" id="homeButton"  to="/">Home</router-link>
      <router-link class="navItems" to="/highScores">High Scores</router-link>
      <router-link class="navItems" to="/game">Game</router-link>
    </nav>

    <!-- <div id="nav">
      <router-link id="homeButton" class="navItems" to="/">Home</router-link>
      <router-link class="navItems" to="/highScores">High Scores</router-link>
      <router-link class="navItems" to="/game">Game</router-link>
      <Username id="usernameBox" Username="XxToxicGeckoxX"/>
    </div> -->

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
  /* background-color: whitesmoke; */
}

nav {
  padding: 1px;
  margin: 35px;
  border-radius: 100px; 
  background-color: rgb(35, 35, 35);
  font-size: 18px;
  overflow: hidden;
}

.navItems {
  padding: 18px;
  margin-left: 10px;
  margin-right: 10px;
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
  /* font-family: 'Insula', Helvetica, Arial, sans-serif; */
  margin-left: 15px;
  margin-right: 10px;
  font-weight: bold;
  color: #919191;
  text-align: center;
  display: block;
  float: left;
}

/* #username {
  font-family: 'Insula', Helvetica, Arial, sans-serif;
} */
</style>
