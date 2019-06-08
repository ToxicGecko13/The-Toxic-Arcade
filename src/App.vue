<template>
  <div id="app">
    <button v-on:click="openNav" id="openNavBu">&#8801;</button>
    <nav id="navMenu">
      <button v-on:click="closeNav" id="closeNavBu">&times;</button>
      <br>
      <router-link class="navItems" id="homeButton"  to="/">Home</router-link>
    </nav>

    <h1>Scroll down until you can see all of the game board.</h1>
    <button id="startGame" v-on:click="this.setUpGame" v-on:keyup.space="drawBullet">Start Game</button>
    <canvas id="gameBoard">
    </canvas>

    <router-view/>

  </div>
</template>

<script>
export default {
  name: 'home',
  methods: {
    // Function to open the nave menu from the left to the right
    openNav: function () {
      document.getElementById('navMenu').style.width = '250px'
    },

    // Function to close the nave menu from the right to the left
    closeNav: function () {
      document.getElementById('navMenu').style.width = '0'
    },

    // Set up the game on the canvas (the Game Board)
    setUpGame: function () {
      let gameBoard = document.querySelector('canvas')
      let c = gameBoard.getContext('2d')

      // Example of how to draw a rectangle and color it
      // c.fillStyle = 'rgba(0-255, 0-255, 0-255, 1-0.1)'
      // c.fillRect(x, y, width, height)

      // Draw battleship
      c.fillStyle = 'rgba(255, 0, 148)'
      // let battleship = c.fillRect(146, 136, 8, 8)
      c.fillRect(146, 136, 8, 8)

      this.drawAliens()
      this.drawStars()
    },

    // Draw the background stars on the Game Board
    drawStars: function () {
      let gameBoard = document.querySelector('canvas')
      let c = gameBoard.getContext('2d')

      let hei = Math.floor(Math.random() * 146) + 2
      let wid = Math.floor(Math.random() * 296) + 2

      // Draw a star at a random location
      c.beginPath()
      c.strokeStyle = 'rgba(255, 255, 255, 0.4)'
      c.arc(wid, hei, 0.4, 0, Math.PI * 2, false)
      c.stroke()
    },

    // Draw the enemy aliens on the Game Board
    drawAliens: function () {
      let gameBoard = document.querySelector('canvas')
      let c = gameBoard.getContext('2d')

      // Draw first line of aliens
      c.fillStyle = 'rgba(255, 0, 0)'
      c.fillRect(19, 10, 10, 10)
      c.fillRect(37, 10, 10, 10)
      c.fillRect(55, 10, 10, 10)
      c.fillRect(73, 10, 10, 10)
      c.fillRect(91, 10, 10, 10)
      c.fillRect(109, 10, 10, 10)
      c.fillRect(127, 10, 10, 10)
      c.fillRect(145, 10, 10, 10)
      c.fillRect(163, 10, 10, 10)
      c.fillRect(181, 10, 10, 10)
      c.fillRect(199, 10, 10, 10)
      c.fillRect(217, 10, 10, 10)
      c.fillRect(235, 10, 10, 10)
      c.fillRect(253, 10, 10, 10)
      c.fillRect(271, 10, 10, 10)

      // Draw Second line of aliens
      c.fillStyle = 'rgba(255, 70, 0)'
      c.fillRect(20, 29, 8, 8)
      c.fillRect(38, 29, 8, 8)
      c.fillRect(56, 29, 8, 8)
      c.fillRect(74, 29, 8, 8)
      c.fillRect(92, 29, 8, 8)
      c.fillRect(110, 29, 8, 8)
      c.fillRect(128, 29, 8, 8)
      c.fillRect(146, 29, 8, 8)
      c.fillRect(164, 29, 8, 8)
      c.fillRect(182, 29, 8, 8)
      c.fillRect(200, 29, 8, 8)
      c.fillRect(218, 29, 8, 8)
      c.fillRect(236, 29, 8, 8)
      c.fillRect(254, 29, 8, 8)
      c.fillRect(272, 29, 8, 8)

      // Draw third line of aliens
      c.fillStyle = 'rgba(255, 70, 0)'
      c.fillRect(20, 46, 8, 8)
      c.fillRect(38, 46, 8, 8)
      c.fillRect(56, 46, 8, 8)
      c.fillRect(74, 46, 8, 8)
      c.fillRect(92, 46, 8, 8)
      c.fillRect(110, 46, 8, 8)
      c.fillRect(128, 46, 8, 8)
      c.fillRect(146, 46, 8, 8)
      c.fillRect(164, 46, 8, 8)
      c.fillRect(182, 46, 8, 8)
      c.fillRect(200, 46, 8, 8)
      c.fillRect(218, 46, 8, 8)
      c.fillRect(236, 46, 8, 8)
      c.fillRect(254, 46, 8, 8)
      c.fillRect(272, 46, 8, 8)
    },

    // Draw a bullet on the Game Board
    drawBullet: function () {
      let gameBoard = document.querySelector('canvas')
      let c = gameBoard.getContext('2d')

      // Draw a bullet
      c.fillStyle = 'rgba(255, 255, 0)'
      c.fillRect(149, 130, 2, 2)
      c.fillRect(149, 122, 2, 2)
      c.fillRect(149, 114, 2, 2)
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

#gameBoard {
    background-color: rgb(0, 0, 0);
    height: 700px;
    width: 1350px;
    border: 10px solid;
    border-color: rgb(59, 59, 59);
    margin: 5px;
    margin-top: 45px;
    margin-left: -75px;
}

#battleship {
    padding: 5px 5px;
    background-color: rgb(12, 189, 12);
}

#startGame {
    float: right;
    /* margin-top: -20px; */
    margin-top: 30px;
    margin-bottom: 40px;
    margin-right: 10px;
    border: 0;
    padding: 8px;
    padding-right: 14px;
    padding-left: 14px;
    border-radius: 5px;
    background-color: rgb(58, 58, 58);
    color: whitesmoke;
}

#startGame:hover {
    cursor: pointer;
    background-color: rgb(70, 70, 70);
}
</style>
