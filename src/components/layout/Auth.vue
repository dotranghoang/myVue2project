<template>
  <div>
    <b-nav>
      <ul>
        <li><a href="/login">Login</a></li>
        <li><a href="/register">Register</a></li>
      </ul>
    </b-nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "Auth"
}
</script>

<style scoped>

</style>