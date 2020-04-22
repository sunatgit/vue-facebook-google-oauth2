<template>
  <div id="app">
    <p>
      <router-link to="/google-auth-demo">Google Auth demo</router-link>
    </p>
    <p>
      <router-link to="/facebook-auth-demo">Facebook Auth demo</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
