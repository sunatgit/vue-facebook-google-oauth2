<template>
  <div id="facebookAuthDemo">
    <div>
      <h1>Facebook Auth</h1>
      <FacebookAuth
        :appId="INSERT YOUR APP ID"
        @authInitialized="authInitialized"
        ref="authRef"
      />

      <div>
        <a v-if="accessToken" href="#" v-on:click="logout()">Logout</a>
        <a v-else href="#" v-on:click="login">Log In</a>
      </div>

      <div>
        <a v-if="accessToken" href="#" v-on:click="getStatus()">Get status</a>
      </div>

      <div>
        <a v-if="accessToken" href="#" v-on:click="getProfile()">Get profile</a>
      </div>

      <div v-if="accessToken">
        <h3>Access token: </h3>
        <p>{{ accessToken }}</p>
      </div>

      <div v-if="status">
        <h3>Status: </h3>
        <p>{{ status }}</p>
      </div>

      <div v-if="profile">
        <h3>Profile: </h3>
        <p>{{ profile }}</p>
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
      accessToken: null,
      status: null,
      profile: null,
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
      await this.$refs.authRef.logout();
      this.accessToken = null;
    },
    async getStatus() {
      this.status = await this.$refs.authRef.getStatus();
    },
    async getProfile() {
      this.profile = await this.$refs.authRef.getProfile();
    }
  }
};
</script>
