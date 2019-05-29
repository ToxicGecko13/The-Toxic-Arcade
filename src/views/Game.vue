<template>
  <div class="gamePage">
    <h1 v-on:click="startGame" id="click">Scroll down intel you can see all of the game board.</h1>
    <canvas id="gameBoard">
      <!-- <div id="battleship">X</div> -->
    </canvas>
  </div>
</template>

<script>
export default {
  // mounted: function () {
  // },
  methods: {
    startGame: function () {
      this.setupGame()
      let gameBoard = document.getElementById('gameBoard')
      let c = gameBoard.getContext('2d')
      c.fillRect(80, 110, 2000, 2000)
    },
    setupGame: function () {

    },
    shipMove: function () {

    }
  }
}
</script>

<style scoped>
  #gameBoard {
    /* background-color: black; */
    background-color: rgb(128, 93, 93);
    padding: 18% 34%;
    border: 10px solid;
    border-color: rgb(37, 37, 37);
    margin: 15px;
  }
  #battleship {
    padding: 5px 5px;
    background-color: rgb(12, 189, 12);
  }
  #click:hover {
    cursor: pointer;
    color: rgb(59, 59, 59);
  }
</style>
