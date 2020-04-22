<template>
  <div id="facebookAuthDemo">
    <div>
      <h1>Facebook Auth</h1>
      <FacebookAuth
        :appId="INSERT YOUR APP ID"
        @authInitialized="authInitialized"
        ref="authRef"
      />
      <a v-if="accessToken" href="#" v-on:click="logout()">Logout</a>
      <a v-else href="#" v-on:click="login">Log In</a>
      <div v-if="accessToken">
        <h3>Access token</h3>
        <p>{{ accessToken }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import FacebookAuth from "./FacebookAuth.vue";
export default {
  name: "FacebookAuthDemo",
  components: { FacebookAuth },
  data: function() {
    return {
      initialized: false,
      accessToken: null
    };
  },
  methods: {
    authInitialized() {
      this.initialized = true;
    },
    async login() {
      this.accessToken = await this.$refs.authRef.login();
    },
    async logout() {
      this.$refs.authRef.logout();
      this.accessToken = null;
    }
  }
};
</script>
