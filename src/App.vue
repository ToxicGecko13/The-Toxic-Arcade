<template>
  <div id="app">
    <div v-if="menuSize = true" class="toggleNvBuContainer">
      <button class="toggleNvBu" id="on" v-on:click="openNav">&#8801;</button>  
    </div>
    <div v-else class="toggleNvBuContainer">
      <button class="toggleNvBu" id="off" v-on:click="closeNav">&#8801;</button>
    </div>
    <!-- <button id="toggleNavMenu" v-on:click="toggleMenu">&#8801;</button> -->
    <nav id="navMenu">
      <!-- <div id="usernameBox"><Username Username="XxToxicGeckoxX"/></div> -->
      <router-link class="navItems" id="homeButton"  to="/">Home</router-link>
      <!-- <span id="underline"></span> -->
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
    // Set the width of the side navigation to 250px
    openNav: function () {
      document.getElementById("navMenu").style.width = "250px";
      document.getElementById("app").style.marginLeft = "250px";
    },

    // Set the width of the side navigation to 0
    closeNav: function () {
      document.getElementById("navMenu").style.width = "0";
      document.getElementById("app").style.marginLeft = "0";
    },

    menuSize: function () {
      let navMenuWidth = document.getElementById("navMenu").style.width

      if (navMenuWidth = 0) {
        return true
      }
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

/* The nav show button */
.toggleNvBuContainer {
  border: 0;
  background-color: rgba(29, 29, 29, 0.267);
  float: left;
  padding: 5px 15px;
  border-radius: 5px;
  margin-left: 15px;
}

.toggleNvBu {
  color: rgba(68, 68, 68, 0.5);
  font-size: 40px;
  border: 0;
  background: none;
}

/* #underline {
  width: 100%;
  height: 5px;
  background-color: gray;
} */

/* The side navigation menu */
nav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(17, 17, 17);
  overflow-x: hidden;
  padding-top: 60px;
  /* transition: 0.5s; 0.5 second transition effect to slide in the sidenav */
}

/* The navigation menu links */
.navItems {
  padding: 10px 8px 8px 32px;
  border: 0;
  margin-bottom: 3px;
  text-decoration: none;
  font-size: 25px;
  color: rgb(129, 129, 129);
  display: block;
  transition: 0.3s;
}

/* When the cursor is over a navigation link, change it's color */
nav .navItems:hover {
  color: rgb(241, 241, 241);
  background-color: rgb(121, 111, 111);
}

/* When nav items are active change their style */
nav .navItems:active {
  background-color: rgb(90, 90, 90);
  color: #15be15;
}

/* When the page is where a button is linked to */
nav a.router-link-exact-active {
  color: #15be15;
}
</style>
