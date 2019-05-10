<template>
  <div id="app">

    <div id="nav">
      <router-link id="homeButton" class="navItems" to="/">Home</router-link>
      <router-link class="navItems" to="/highScores">High Scores</router-link>
      <router-link class="navItems" to="/game">Game</router-link>
    </div>

    <router-view/>

  </div>
</template>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: whitesmoke;
}

#nav {
  padding: 1px;
  margin: 35px;
  border-radius: 100px;
  background-color: rgb(35, 35, 35);
  display: inline-block;
  font-size: 18px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.navItems {
  padding: 18px;
  margin-left: 10px;
  margin-right: 10px;
  font-weight: bold;
  color: #919191;
  text-decoration: none;
}

.navItems:hover {
  background-color: rgb(83, 83, 83);
}

.navItems:active {
  background-color: rgb(90, 90, 90);
  color: #15be15;
}

#homeButton {
  margin-left: 30px;
}

#nav a.router-link-exact-active {
  color: #15be15;
}
</style>
