<template>
  <div class="auth">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "Auth"
}
</script>

<style scoped>
.auth {
  height: 100vh;
  background: url('../../assets/background/ocean.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>