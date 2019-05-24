<template>
  <div id="usernameBox">
      <p>{{ Username }}</p>
  </div>
</template>

<script>
export default {
  name: 'Username',
  props: {
    Username: String
  }
}
</script>

<style scoped>
    p {
        font-size: 18px;
        color: #15be15;
        font-family: sans-serif;
    }
</style>
