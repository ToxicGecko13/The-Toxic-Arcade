<template>
  <div class="gamePage">
    <h1>Scroll down intel you can see all of the game board.</h1>
    <canvas id="gameBoard">
      <div id="battleship">X</div>
    </canvas>
  </div>
</template>

<script>
export default {
  methods: {
    // test: function() {
    //   let canvas = document.querySelector('canvas');
    //   canvas.width = window.innerWidth;
    //   canvas.height = window.innerHeight;
    // },
    startGame: function() {
      this.setupGame()
    },
    setupGame: function() {

    },
    shipMove: function() {

    }
  }
}
</script>

<style scoped>
  #gameBoard {
    background-color: black;
    padding: 18% 34%;
    border: 10px solid;
    border-color: rgb(54, 54, 54);
    margin: 15px;
  }
  #battleship {
    padding: 5px 5px;
    background-color: rgb(12, 189, 12);
  }
</style>
