<template>
  <span>
    <!-- Left empty intentionally -->
  </span>
</template>

<script>
var apiUrl = "https://apis.google.com/js/api.js";

export default {
  name: "GoogleAuth",
  props: {
    config: { type: Object }
    // apiKey: {type: String},
    // discoveryDocs: {type: [String]},
    // clientId: {type: String},
    // scopes: {type: String},
  },
  created: function() {
    this.installClient();
  },
  data: function() {
    return {
      GoogleAuth: null,
      GoogleUser: null
    };
  },

  methods: {
    async login() {
      if (this.GoogleAuth.isSignedIn.get()) {
        this.GoogleUser = this.GoogleAuth.currentUser.get();
      } else {
        this.GoogleUser = await this.GoogleAuth.signIn();
      }
      return this.GoogleUser.getAuthResponse().access_token;
    },
    async logout() {
      await this.GoogleAuth.signOut();
    },
    installClient() {
      var script = document.createElement("script");
      script.src = apiUrl;
      var self = this;
      script.onreadystatechange = script.onload = function() {
        window.gapi.load("client:auth2", self.initClient);
      };
      document.getElementsByTagName("head")[0].appendChild(script);
    },
    initClient() {
      var self = this;
      window.gapi.client
        .init({
          apiKey: this.config.apiKey,
          discoveryDocs: this.config.discoveryDocs,
          clientId: this.config.clientId,
          scope: this.config.scopes
        })
        .then(function() {
          self.GoogleAuth = window.gapi.auth2.getAuthInstance();
          self.$emit("authInitialized");
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
