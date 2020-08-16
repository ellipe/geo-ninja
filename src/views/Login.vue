<template>
  <v-container class="fill-height">
    <Login />
  </v-container>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/auth/Login.vue'

export default {
  name: 'LoginPage',
  components: {
    Login,
  },
}
</script>
