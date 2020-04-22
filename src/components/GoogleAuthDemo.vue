<template>
  <div id="googleAuthDemo">
    <div>
      <h1>Google Auth</h1>
      <GoogleAuth
        :config="authConfig"
        @authInitialized="authInitialized"
        ref="authRef"
      />
      <div v-if="initialized">
        <a v-if="accessToken" href="#" v-on:click="logout">Logout</a>
        <a v-else href="#" v-on:click="login">Log In</a>
        <div v-if="accessToken">
          <h3>Access token</h3>
          <p>{{ accessToken }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GoogleAuth from "./GoogleAuth.vue";
export default {
  name: "GoogleAuthDemo",
  components: { GoogleAuth },
  data: function() {
    return {
      accessToken: null,
      initialized: false,
      authConfig: {
        apiKey: "INSERT YOUR API KEY",
        discoveryDocs: [],
        clientId:
          "INSERT YOUR CLIENT ID",
        scopes: "https://www.googleapis.com/auth/userinfo.email"
      }
    };
  },
  methods: {
    authInitialized() {
      this.initialized = true;
    },
    async login() {
      this.accessToken = await this.$refs.authRef.login();
      console.log(this.accessToken);
    },
    async logout() {
      await this.$refs.authRef.logout();
      this.accessToken = null;
    }
  }
};
</script>
