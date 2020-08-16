<template>
  <v-app-bar app color="primary" dark>
    <router-link :to="{ name: 'Home' }">
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>
    </router-link>

    <v-spacer></v-spacer>
    <router-link :to="{ name: 'Signup' }">
      <v-btn text>
        <span class="mr-2">Sign Up</span>
      </v-btn>
    </router-link>
    <router-link :to="{ name: 'Login' }">
      <v-btn text>
        <span class="mr-2">Login</span>
      </v-btn>
    </router-link>
    <v-btn text @click="logout">
      <span class="mr-2">Logout</span>
    </v-btn>
  </v-app-bar>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Navbar',
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: 'Login' })
        })
    },
  },
}
</script>
