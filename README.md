# vue-facebook-google-oauth2

[Vue.Js](https://vuejs.org/) is a popular Javascript framework that has
a very good community backing. It provides reusable plugins and
components for high quality JS development. In this tutorial we will
look at one of key aspects of client applications - integrating
authentication. We will look into integration two prominent OAuth
providers.

  - [Google
    OAuth](https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow)
    - Follow the links in the page to get your ClientId and APIKey
  - [Facebook](https://developers.facebook.com/docs/facebook-login/web)
    - Follow the steps here to get your App Id

For both providers we will build:

  - A component that handles the OAuth functionality of the provider and
    exposes simple login and logout methods. They also emit an event,
    authInitialized when their dependent scripts have been initialized
    and it is safe to show the login buttons.
  - A demo application that will let the user choose between google and
    facebook authentication, which will continue to request credentials
    and fetch the access tokens from the providers and present it on the
    screen.

Couple of caveats.

  - This tutorial assumes basic understanding of VueJs concepts like
    routing and creating simple components. To brush on this, visit
    [Vue.Js](https://vuejs.org/) guide pages.
  - Please note that this is a simple flow, that doesn't capture token
    refresh and other considerations that will be applicable to a
    resilient application. Also once you receive a OAuth token,
    converting it into a JWT token is useful for performance and
    scalability.

## Facebook

Lets first look at the facebook auth component, since it is simpler. The
initialization attaches the facebook auth SDK script to out document. It
also sets up initialization of the script. The login operation simply
invokes the facebook's login method and wraps it inside a promise, so it
could wait on it. This in turn launches the familiar facebook login UI
to collect user credentials for authentication. And finally logout
invokes facebooks logout UI as well.

## Google OAuth2

On initialization, Google exposes a GoogleAuth object which one could
use to launch sign on and logoff methods. It also provides for way to
fetch the currently logged in user. One could pass scopes and profile
parameters to access as part of login request. If the user concents then
that information would be made available as additional properties of the
user object.

## Application

The final application would look like this. Now you can extend this
component further to suit your application needs.


![](https://ssvmcljjmjodcc7ta.westus2.cloudapp.azure.com:9443/wp-content/uploads/2020/04/vue-google-auth-300x255.png)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
