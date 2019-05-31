<template>
  <div id="app">
    <button v-on:click="openNav" id="openNavBu">&#8801;</button>
    <nav id="navMenu">
      <button v-on:click="closeNav" id="closeNavBu">&times;</button>
      <br>
      <!-- <div id="usernameBox"><Username Username="XxToxicGeckoxX"/></div> -->
      <router-link class="navItems" id="homeButton"  to="/">Home</router-link>
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
  },
  methods: {
    // Function to open the nave menu from the left to the right
    openNav: function () {
      document.getElementById('navMenu').style.width = '250px'
    },

    // Function to close the nave menu from the right to the left
    closeNav: function () {
      document.getElementById('navMenu').style.width = '0'
    }
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

#openNavBu {
  background-color: rgba(92, 92, 92, 0.445);
  color: rgba(97, 97, 97, 0.767);
  font-size: 60px;
  border: 0;
  margin-left: 18px;
  margin-top: 10px;
  padding: 0px 18px;
  border-radius: 12px;
  float: left;
}

#openNavBu:hover {
  cursor: pointer;
  background-color: rgba(92, 92, 92, 0.5);
  transition-duration: .1s;
}

#closeNavBu {
  margin-bottom: 20px;
  font-size: 40px;
  padding: 0px 12px;
  background-color: rgba(80, 80, 80, 0.562);
  color: rgb(90, 90, 90);
  border: 0;
  float: left;
  margin-left: 20px;
  margin-top: 20px;
  border-radius: 10px;
}

#closeNavBu:hover {
  cursor: pointer;
  background-color: rgba(102, 102, 102, 0.5);
  transition-duration: .1s;
}

#homeButton {
    margin-top: 60px;
}

nav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(17, 17, 17);
  overflow-x: hidden;
  /* padding-top: 60px; */
  transition: 0.5s;
}

.navItems {
  padding: 10px 8px 8px 32px;
  border: 0;
  margin-bottom: 3px;
  text-decoration: none;
  font-size: 25px;
  color: rgb(129, 129, 129);
  display: block;
  transition: 0.3s;
  width: 100%;
}

nav .navItems:hover {
  color: rgb(241, 241, 241);
  background-color: rgb(121, 111, 111);
}

nav a.router-link-exact-active {
  color: #15be15;
}
</style>
