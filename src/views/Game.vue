<template>
  <div class="gamePage">
    <h1>Scroll down intel you can see all of the game board.</h1>
    <button id="startGame" v-on:click="setUpGame">Start Game</button>
    <canvas id="gameBoard">
    </canvas>
  </div>
</template>

<script>
export default {
  methods: {
    setUpGame: function () {
      let gameBoard = document.querySelector('canvas')
      let c = gameBoard.getContext('2d')

      // Draw rect
      // c.fillRect(x, y, width, height)
      // c.fillStyle = 'rgba(0-255, 0-255, 0-255, 1-0.1)'

      // Draw ship
      c.fillStyle = 'rgba(255, 255, 255)'
      let battleship = c.fillRect(130, 136, 8, 8)

      // Draw aliens
      c.fillStyle = 'rgba(0, 191, 255)'
      c.fillRect(10, 10, 8, 8)
      c.fillRect(25, 10, 8, 8)
      c.fillRect(40, 10, 8, 8)
      c.fillRect(55, 10, 8, 8)
      c.fillRect(70, 10, 8, 8)
      c.fillRect(85, 10, 8, 8)
      c.fillRect(100, 10, 8, 8)
      c.fillRect(115, 10, 8, 8)
      c.fillRect(130, 10, 8, 8)
      c.fillRect(145, 10, 8, 8)
      c.fillRect(160, 10, 8, 8)
      c.fillRect(175, 10, 8, 8)
      c.fillRect(190, 10, 8, 8)
      c.fillRect(205, 10, 8, 8)
      c.fillRect(220, 10, 8, 8)
      c.fillRect(235, 10, 8, 8)
      c.fillRect(250, 10, 8, 8)
      c.fillRect(265, 10, 8, 8)
      c.fillRect(280, 10, 8, 8)

      // Draw lines
      c.beginPath()
      c.moveTo()
    },
    shipMove: function () {

    }
  }
}
</script>

<style scoped>
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
    margin-top: -20px;
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
