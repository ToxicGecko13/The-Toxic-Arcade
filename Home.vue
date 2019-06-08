<template>
  <div class="home">
    <!-- <img alt="The Toxic Arcade logo" src="../assets/TALogo1.jpg"> -->
    <h1>Home Page</h1>
    <HelloWorld/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>

</style>
